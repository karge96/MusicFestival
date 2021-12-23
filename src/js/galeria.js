document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});
function crearGaleria () {
    const galeria = document.querySelector('.galeria-imagenes');
    for( let i=1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
       imagen.dataset.imagenId = i;
        // añadir la funcion de mostrar imagen
        imagen.onclick = mostrarimagen;
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}
function mostrarimagen(e) {
    const id = parseInt( e.target.dataset.imagenId);
    // generar la imagen 
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    // cuando se da click, cerrar la imagen 
    overlay.onclick =function() {
        overlay.remove();
    }
    // boton para cerrar la imagen
    const cerrarimagen = document.createElement('P');
    cerrarimagen.textContent = 'X';
    cerrarimagen.classList.add('btn-cerrar');
//    cuando se presiona, se cierrar la imagen
cerrarimagen.onclick = function(){
    overlay.remove();
}
    overlay.appendChild(cerrarimagen)
    // mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}
