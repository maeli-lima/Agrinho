document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. GERENCIAMENTO COMPONENTE ACCORDION (EXPANSÍVEL)
    // ==========================================================================
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            
            // Verifica se o item já está ativo
            const estaAtivo = item.classList.contains('ativo');
            
            // Fecha todos os accordions abertos antes de abrir o atual (Opcional - Estilo Sanfona)
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('ativo');
                i.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Se não estava ativo, abre o atual calculando o scrollHeight exato do conteúdo
            if (!estaAtivo) {
                item.classList.add('ativo');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // ==========================================================================
    // 2. PAINEL E RECURSOS DE ACESSIBILIDADE NATIVA
    // ==========================================================================
    const btnPainelToggle = document.getElementById('btn-painel-toggle');
    const menuAcessibilidade = document.getElementById('menu-acessibilidade');
    const btnAumentarFonte = document.getElementById('btn-aumentar-fonte');
    const btnDiminuirFonte = document.getElementById('btn-diminuir-fonte');
    const btnTemaToggle = document.getElementById('btn-tema-toggle');
    const btnOuvir = document.getElementById('btn-ouvir');
    const btnPararOuvir = document.getElementById('btn-parar-ouvir');

    let escalaFonte = 100; // Porcentagem inicial da fonte base do HTML

    // Toggle de exibição do painel flutuante
    btnPainelToggle.addEventListener('click', () => {
        menuAcessibilidade.classList.toggle('escondido');
    });

    // Acessibilidade: Aumentar Fonte
    btnAumentarFonte.addEventListener('click', () => {
        if (escalaFonte < 140) {
            escalaFonte += 10;
            document.documentElement.style.fontSize = `${escalaFonte}%`;
        }
    });

    // Acessibilidade: Diminuir Fonte
    btnDiminuirFonte.addEventListener('click', () => {
        if (escalaFonte > 80) {
            escalaFonte -= 10;
            document.documentElement.style.fontSize = `${escalaFonte}%`;
        }
    });

    // Acessibilidade: Modo Claro/Escuro alternável
    btnTemaToggle.addEventListener('click', () => {
        document.body.classList.toggle('modo-claro');
    });

    // ==========================================================================
    // 3. SPEECH SYNTHESIS API (LEITURA APENAS DO CONTEÚDO PRINCIPAL)
    // ==========================================================================
    let sinteseVoz = window.speechSynthesis;
    let utterance = null;

    btnOuvir.addEventListener('click', () => {
        // Cancela qualquer leitura em andamento para não encavalar
        sinteseVoz.cancel();

        // Alvo estrito: Captura o texto puramente do contêiner do artigo principal
        const elementoAlvo = document.getElementById('conteudo-principal');
        
        // Clonamos o nó para realizar limpezas cirúrgicas antes de ler o texto
        const cloneConteudo = elementoAlvo.cloneNode(true);
        
        // Remove elementos indesejáveis da leitura (formulários, botões e accordions fechados/headers redundantes se necessário)
        const elementosParaIgnorar = cloneConteudo.querySelectorAll('button, form, aside, textarea, label, .area-comentarios');
        elementosParaIgnorar.forEach(el => el.remove());

        const textoParaLer = cloneConteudo.innerText.trim();

        if (textoParaLer) {
            utterance = new SpeechSynthesisUtterance(textoParaLer);
            utterance.lang = 'pt-BR';
            utterance.rate = 1.0; // Velocidade normal de leitura
            
            sinteseVoz.speak(utterance);
        }
    });

    btnPararOuvir.addEventListener('click', () => {
        if (sinteseVoz.speaking) {
            sinteseVoz.cancel();
        }
    });

    // ==========================================================================
    // 4. INTERAÇÕES DE FORMULÁRIO (SIMULAÇÃO REGRAS CLEAN CODE)
    // ==========================================================================
    const formSeminario = document.getElementById('form-seminario');
    formSeminario.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Inscrição realizada com sucesso! Verifique seu e-mail corporativo para o link de acesso.');
        formSeminario.reset();
    });

    const formComentario = document.getElementById('form-comentario');
    const textoComentario = document.getElementById('texto-comentario');
    const listaComentarios = document.getElementById('lista-comentarios');

    formComentario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario-item');
        novoComentario.textContent = textoComentario.value;
        
        listaComentarios.prepend(novoComentario);
        textoComentario.value = '';
    });
});