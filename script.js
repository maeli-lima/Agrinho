document.addEventListener('DOMContentLoaded', () => {

    // 1. MECÂNICA DE EXPANSÃO INTELIGENTE (ACCORDION)
    const gatilhosAccordion = document.querySelectorAll('.gatilho-accordion');

    gatilhosAccordion.forEach(gatilho => {
        gatilho.addEventListener('click', function() {
            const caixaPai = this.parentElement;
            const painelConteudo = this.nextElementSibling;
            const estaAberto = caixaPai.classList.contains('aberto');

            // Fecha todos antes de abrir o novo, mantendo a tela do celular limpa e organizada
            document.querySelectorAll('.caixa-dobravel').forEach(item => {
                item.classList.remove('aberto');
                item.querySelector('.painel-accordion').style.maxHeight = null;
                item.querySelector('.gatilho-accordion').setAttribute('aria-expanded', 'false');
            });

            // Se o painel não estava aberto, calcula a altura real dele e abre de forma suave
            if (!estaAberto) {
                caixaPai.classList.add('aberto');
                this.setAttribute('aria-expanded', 'true');
                painelConteudo.style.maxHeight = painelConteudo.scrollHeight + "px";
            }
        });
    });

    // 2. PAINEL DE CONTROLE DE ACESSIBILIDADE E RECONHECIMENTO DE FONTES
    const gatilhoWidget = document.getElementById('gatilho-widget');
    const menuRecursosVoz = document.getElementById('menu-recursos-voz');
    const btnFonteAumentar = document.getElementById('fonte-aumentar');
    const btnFonteDiminuir = document.getElementById('fonte-diminuir');
    const btnAlternarContraste = document.getElementById('alternar-contraste');

    let percentualFonte = 100;

    gatilhoWidget.addEventListener('click', () => {
        menuRecursosVoz.classList.toggle('oculto');
    });

    // Altera proporcionalmente o tamanho da fonte mudando apenas a raiz do documento (tag HTML)
    btnFonteAumentar.addEventListener('click', () => {
        if (percentualFonte < 130) {
            percentualFonte += 10;
            document.documentElement.style.fontSize = `${percentualFonte}%`;
        }
    });

    btnFonteDiminuir.addEventListener('click', () => {
        if (percentualFonte > 90) {
            percentualFonte -= 10;
            document.documentElement.style.fontSize = `${percentualFonte}%`;
        }
    });

    btnAlternarContraste.addEventListener('click', () => {
        document.body.classList.toggle('modo-claro-ativo');
    });

    // 3. LEITURA POR VOZ LIMPA (SpeechSynthesis API)
    const btnAudioLer = document.getElementById('audio-ler');
    const btnAudioParar = document.getElementById('audio-parar');
    const sintetizador = window.speechSynthesis;

    btnAudioLer.addEventListener('click', () => {
        sintetizador.cancel(); // Interrompe qualquer áudio travado na memória

        const containerLeitura = document.getElementById('leitura-foco');
        const cloneFiltrado = containerLeitura.cloneNode(true); // Cria uma cópia invisível do texto

        // Exclui botões e inputs do áudio para o navegador ler apenas o artigo jornalístico limpo
        const tagsIgnoradas = cloneFiltrado.querySelectorAll('button, form, aside, textarea, label, h2, h3');
        tagsIgnoradas.forEach(elemento => elemento.remove());

        const textoLimpo = cloneFiltrado.innerText.replace(/\s+/g, ' ').trim();

        if (textoLimpo) {
            const emissorVoz = new SpeechSynthesisUtterance(textoLimpo);
            emissorVoz.lang = 'pt-BR';
            sintetizador.speak(emissorVoz);
        }
    });

    btnAudioParar.addEventListener('click', () => {
        sintetizador.cancel();
    });

    // 4. SIMULAÇÃO DE SUBMISSÃO E COMENTÁRIOS SÍNCRONOS
    const formCadastro = document.getElementById('cadastro-seminario');
    formCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o site de recarregar no celular ao clicar em enviar
        alert('Inscrição recebida com sucesso para o Projeto Agrinho!');
        formCadastro.reset();
    });
});
