# 🌾 AgroFuturo 2026 — Inteligência Artificial & Sustentabilidade no Campo

---

## 💻 Tema do Projeto: O Desenvolvimento do Ecossistema Cyber-Agro

O **AgroFuturo 2026** é uma solução de front-end de ponta projetada para posicionar o ecossistema agrícola brasileiro como o principal vetor de inovação sustentável global. 

Diferente das abordagens visuais tradicionais do setor, que utilizam layouts puramente corporativos ou excessivamente rústicos, esta plataforma foi codificada sob o conceito de **Cyber-Agro Premium**. Esta identidade visual foi planejada para simular sistemas operacionais avançados de monitoramento em tempo real através dos seguintes pilares de desenvolvimento:

* **Glassmorphism Dinâmico (Efeito Vidro):** Os elementos de interface (como o formulário de conversão e a central de comentários) utilizam propriedades avançadas de CSS, como `backdrop-filter: blur(16px)` e fundos semi-transparentes baseados em canais RGBA. Isso cria uma ilusão de painéis holográficos flutuantes, remetendo a telas de controle de alta tecnologia.
* **Pontos de Realce em Neon (Neon Highlights):** Foram utilizadas cores de alta frequência visual (como o Verde Tech e o Azul Celeste) aplicadas estrategicamente em pseudoclasses `:hover`, bordas ativas e tags de categorias. Esses pontos atuam como guias visuais que reduzem a carga cognitiva do usuário, direcionando sua atenção de forma natural para os elementos interativos.
* **Garantia de Alto Contraste (Acessibilidade Cromática):** As combinações de cores respeitam estritamente as diretrizes de acessibilidade da WCAG. Os textos principais utilizam variações de cores contrastantes sobre o fundo escuro industrial (`#060913`), eliminando a fadiga visual e garantindo legibilidade completa mesmo em telas de baixa resolução ou sob forte luz solar.

---

## 🎯 Objetivo Estratégico da Plataforma

Do ponto de vista de negócios e experiência do usuário (UX), a interface foi projetada para atuar em duas frentes simultâneas:
1. **Retenção via Conteúdo Técnico (Inbound Marketing):** Em vez de exibir um texto estático e cansativo, a página organiza as informações sobre biotecnologia e microbiologia em blocos elegantes e interativos. O uso de citações destacadas e palavras-chave em negrito estilizado prende a atenção do leitor técnico (pesquisadores, investidores e produtores).
2. **Conversão de Leads de Alta Performance:** A barra lateral contendo o formulário de inscrição funciona de forma independente. Utilizando a propriedade `position: sticky` no CSS, o formulário permanece visível fixo na tela enquanto o usuário navega pelo artigo principal. Isso garante que o botão de chamada para ação (CTA) esteja disponível no exato momento em que o leitor decide se inscrever no seminário online.

---

## 🛠️ Detalhamento Técnico da Arquitetura de Código

Para garantir manutenibilidade e alta velocidade de carregamento (essencial para conexões de internet no campo), o projeto foi estruturado sem o uso de frameworks pesados, utilizando apenas tecnologias nativas:

### 1. CSS Grid & Flexbox Assimétrico
O layout utiliza uma malha mista. No desktop, o contêiner principal divide a tela de forma assimétrica (`grid-template-columns: 1fr 380px`), garantindo que o artigo tenha espaço amplo de leitura e o formulário permaneça compacto. Em dispositivos móveis, o CSS Grid reorganiza o fluxo automaticamente para uma única coluna, movendo o formulário de inscrição para a base da página sem quebrar os elementos.

### 2. Controle de Expansão Dinâmica (Abertura do Accordion)
Em vez de definir uma altura fixa no CSS para as caixas expansíveis (o que causaria cortes de texto ou espaços em branco vazios), a lógica JavaScript captura a propriedade `scrollHeight` de cada painel. Essa propriedade lê a altura real em pixels que o texto ocupa internamente e injeta esse valor de forma dinâmica no estilo inline do elemento. O resultado é uma animação de abertura extremamente fluida e adaptável a qualquer tamanho de tela.

### 3. Filtro de Áudio Avançado via DOM
O sistema de leitura por voz utiliza a `SpeechSynthesis API`. Para evitar que o navegador leia de forma confusa elementos textuais soltos como "Botão", "Campo Nome" ou os links do rodapé, o script realiza uma clonagem virtual da área de texto principal. Através do método `querySelectorAll().forEach()`, o JavaScript remove cirurgicamente todos os botões, formulários e elementos interativos do clone antes de enviar o texto limpo para o motor de voz do navegador.

---

## 🚀 Instruções de Instalação e Configuração

### 1. Disposição dos Arquivos no Servidor ou Diretório Local
Os arquivos devem coexistir exatamente na mesma pasta raiz para manter as referências de caminhos relativos ativas:

* `index.html` -> Contém a marcação estrutural e todos os textos jornalísticos e técnicos.
* `style.css` -> Contém o design system, gerenciamento de variáveis cromáticas e regras de responsividade.
* `script.js` -> Gerencia os eventos de clique, submissão de dados e as ferramentas de acessibilidade.

### 2. Configuração Prática das Imagens
O layout reserva três espaços estratégicos para mídias visuais. Para ativá-los, basta inserir as imagens de sua preferência no mesmo diretório dos arquivos, salvando-as obrigatoriamente com os nomes:
* `Foto1.png` (Recomendado: Imagem focada em laboratório, ciência ou microbiologia)
* `Foto2.png` (Recomendado: Imagem focada em tecnologia aérea, drones ou mapas térmicos de plantações)
* `Foto3.png` (Recomendado: Imagem focada em automação industrial, tratores autônomos ou colheitadeiras com GPS)

O código CSS identificará esses arquivos e aplicará automaticamente as propriedades de cantos arredondados (`border-radius`), sombras de profundidade (`box-shadow`) e a transição suave de aproximação visual (`transform: scale`) quando o ponteiro do mouse passar por cima da imagem.

---

## ♿ Funcionamento dos Recursos de Acessibilidade

O painel de acessibilidade flutuante foi programado para modificar diretamente o comportamento e a estrutura da página em tempo real:

* **Modificação Proporcional de Fontes:** Os botões de tamanho de fonte (`A+` e `A-`) alteram a propriedade de tamanho padrão da tag raiz do documento (`html`). Como todo o restante do design foi estilizado utilizando a unidade de medida relativa `rem`, todas as fontes, margens e espaçamentos da página aumentam ou diminuem de forma perfeitamente proporcional, sem quebrar o layout.
* **Alternador de Tema (Modo Alto Contraste):** Ao disparar o botão de tema, o JavaScript adiciona a classe `.modo-claro-ativo` ao elemento global `body`. O CSS, por sua vez, substitui as variáveis internas de cor, convertendo o fundo escuro em um cinza claro de alta leitura e os textos brancos em tons de azul escuro e preto, adaptando a tela para usuários com dificuldades de visão em ambientes de alta luminosidade.
* **Interrupção de Fluxo de Áudio:** O botão de interrupção chama diretamente a função `window.speechSynthesis.cancel()`, garantindo que o áudio seja cortado imediatamente caso o usuário decida parar a navegação assistida por voz, sem travamentos no navegador.
