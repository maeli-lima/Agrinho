document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. COMPONENTE ACCORDION (EXPANSÃO DINÂMICA VIA SCROLLHEIGHT)
    // ==========================================================================
    const gatilhosAccordion = document.querySelectorAll('.gatilho-accordion');

    gatilhosAccordion.forEach(gatilho => {
        gatilho.addEventListener('click', function() {
            const caixaPai = this.parentElement;
            const painelConteudo = this.nextElementSibling;
            const estaAberto = caixaPai.classList.contains('aberto');

            // Fecha painéis ativos para manter um comportamento limpo e focado
            document.querySelectorAll('.caixa-dobravel').forEach(item => {
                item.classList.remove('aberto');
                item.querySelector('.painel-accordion').style.maxHeight = null;
                item.querySelector('.gatilho-accordion').setAttribute('aria-expanded', 'false');
            });

            // Se não estava aberto, realiza a abertura controlada por código
            if (!estaAberto) {
                caixaPai.classList.add('aberto');
                this.setAttribute('aria-expanded', 'true');
                painelConteudo.style.maxHeight = painelConteudo.scrollHeight + "px";
            }
        });
    });

    // ==========================================================================
    // 2. PAINEL FLUTUANTE DE ACESSIBILIDADE
    // ==========================================================================
    const gatilhoWidget = document.getElementById('gatilho-widget');
    const menuRecursosVoz = document.getElementById('menu-recursos-voz');
    const btnFonteAumentar = document.getElementById('fonte-aumentar');
    const btnFonteDiminuir = document.getElementById('fonte-diminuir');
    const btnAlternarContraste = document.getElementById('alternar-contraste');

    let percentualFonte = 100;

    // Toggle de visibilidade do menu flutuante
    gatilhoWidget.addEventListener('click', () => {
        menuRecursosVoz.classList.toggle('oculto');
    });

    // Controle de dimensionamento acessível de texto
    btnFonteAumentar.addEventListener('click', () => {
        if (percentualFonte < 140) {
            percentualFonte += 10;
            document.documentElement.style.fontSize = `${percentualFonte}%`;
        }
    });

    btnFonteDiminuir.addEventListener('click', () => {
        if (percentualFonte > 85) {
            percentualFonte -= 10;
            document.documentElement.style.fontSize = `${percentualFonte}%`;
        }
    });

    // Alternador de Alto Contraste (Modo Claro/Escuro)
    btnAlternarContraste.addEventListener('click', () => {
        document.body.classList.toggle('modo-claro-ativo');
    });

    // ==========================================================================
    // 3. LEITURA POR VOZ NATIVA (SPEECH SYNTHESIS API)
    // ==========================================================================
    const btnAudioLer = document.getElementById('audio-ler');
    const btnAudioParar = document.getElementById('audio-parar');
    
    const sintetizador = window.speechSynthesis;
    let emissorVoz = null;

    btnAudioLer.addEventListener('click', () => {
        // Interrompe leituras prévias ativas
        sintetizador.cancel();

        // Alvo semântico estrito de extração de conteúdo textual
        const containerLeitura = document.getElementById('leitura-foco');
        
        // Clonagem para filtragem cirúrgica e preservação da árvore viva original
        const cloneFiltrado = containerLeitura.cloneNode(true);

        // Expulsão explícita de elementos interativos e formulários
        const tagsIgnoradas = cloneFiltrado.querySelectorAll('button, form, aside, textarea, label, h3, .container-comentarios');
        tagsIgnoradas.forEach(elemento => elemento.remove());

        const textoLimpo = cloneFiltrado.innerText.replace(/\s+/g, ' ').trim();

        if (textoLimpo) {
            emissorVoz = new SpeechSynthesisUtterance(textoLimpo);
            emissorVoz.lang = 'pt-BR';
            emissorVoz.rate = 1.0;

            sintetizador.speak(emissorVoz);
        }
    });

    btnAudioParar.addEventListener('click', () => {
        if (sintetizador.speaking) {
            sintetizador.cancel();
        }
    });

    // ==========================================================================
    // 4. INTERAÇÕES DE ENVIOS (SIMULAÇÕES DE SUBMISSÃO)
    // ==========================================================================
    const formCadastro = document.getElementById('cadastro-seminario');
    formCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault();
        alert('Cadastro corporativo recebido com sucesso para o Seminário AgroFuturo 2026!');
        formCadastro.reset();
    });

    const formOpiniao = document.getElementById('formulario-opiniao');
    const campoTextoComentario = document.getElementById('campo-texto-comentario');
    const muralComentarios = document.getElementById('mural-comentarios');

    formOpiniao.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const boxComentario = document.createElement('div');
        boxComentario.classList.add('item-comentario-usuario');
        boxComentario.textContent = campoTextoComentario.value;

        muralComentarios.prepend(boxComentario);
        campoTextoComentario.value = '';
    });
});
