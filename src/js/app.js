document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    navegacionfija();
});
function navegacionfija(){
    const barra =document.querySelector('.header');
    const observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting){
            barra.classList.add('header');
        } else {
            barra.classList.add('header-move');
        }
    });
    observer.observe(document.querySelector('.video'));
}
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( function(enlace) {
        enlace.addEventListener('click', function(e){
          e.preventDefault();
            const seccion =document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView( {
                behavior: 'smooth'
            });
        });
    });
}