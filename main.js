// 1. Controle do Tema (Claro/Escuro)
const toggle = document.querySelector('#toogle');

toggle.addEventListener("click", () => {
   if(document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light');
   } else {
      document.documentElement.classList.add('light');
   }
});

// 2. Controle do Formulário de Contato
const formulario = document.querySelector('#contato form');
const mensagemSucesso = document.getElementById('mensagemSucesso');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    formulario.style.display = 'none';
    mensagemSucesso.style.display = 'block';
});

// 3. Controle do Botão de Ouvir Site
document.getElementById('ouvir').addEventListener('click', () => {
    window.speechSynthesis.cancel(); 
    const secoes = document.querySelectorAll('section');
    let textoParaLer = "";
    secoes.forEach(secao => {
        textoParaLer += secao.innerText + " ";
    });

    const narrador = new SpeechSynthesisUtterance(textoParaLer);
    narrador.lang = 'pt-BR';
    narrador.rate = 0.8;
    window.speechSynthesis.speak(narrador);
});