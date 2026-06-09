const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll('section');

function ativaLink(linkAlvo){
    links.forEach(link => link.classList.remove('active'));
    if (linkAlvo) linkAlvo.classList.add('active');
}
links.forEach((link) => {
    //adiciona o evento de click no link a da nav
    link.addEventListener('click', (event) => {
        event.preventDefault();
        //ADICIONA UMA CLASSE "ACTIVE" NO LINK A DA NAV 
        ativaLink(link);        
    })

});

const opcoes = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold:0
};

const observador = new IntersectionObserver((entradas) => {

entradas.forEach((entrada) => {
    // Se a section entrou na metade visível da tela
    if (entrada.isIntersecting) {
      const idSection = entrada.target.getAttribute('id');
      // Procura o link que tem o href correspondente ao ID da section
      const linkCorrespondente = document.querySelector(`.meu-link[href="#${idSection}"]`);
      
      ativarLink(linkCorrespondente);
    }
  });
}, opcoes);
