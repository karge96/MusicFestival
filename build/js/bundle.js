function navegacionfija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.add("header"):e.classList.add("header-move")})).observe(document.querySelector(".video"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarimagen;const a=document.createElement("LI");a.appendChild(n),e.appendChild(a)}}function mostrarimagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const a=document.createElement("DIV");a.appendChild(n),a.classList.add("overlay"),a.onclick=function(){a.remove()};const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick=function(){a.remove()},a.appendChild(c);const o=document.querySelector("body");o.appendChild(a),o.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionfija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map