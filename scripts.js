const imagenes = document.querySelectorAll('img');
const parrafos = document.getElementsByTagName("p");
const articles = document.getElementsByClassName("post no-image");

/*2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.*/
for(let i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('click', ()=>{
        imagenes[i].setAttribute('src', './assets/magic-1.gif');
    })
}
/*2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.*/
for(let i=0; i<parrafos.length; i++){
    parrafos[i].addEventListener('click', ()=>{
        parrafos[i].style.background = 'purple';
        parrafos[i].style.color = 'pink';
    })
}
/*2.3 Bloques de article o section: Cambia el color de fondo.*/
for(let i=0; i<articles.length; i++){
    articles[i].addEventListener('click', ()=>{
        articles[i].style.background = 'gray'
    })
}

/* 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif. */
for(let i=0; i<imagenes.length; i++){
    imagenes[i].setAttribute("src", "./assets/abracadabra.gif")
}

/* 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera. */
for(let i=0; i<parrafos.length; i++){
    parrafos[i].style.background = 'black'
    parrafos[i].style.color = 'white'
}
/* 3.3 Bloques de article o section: Color de fondo distinto al de párrafo. */
for(let i=0; i<articles.length; i++){
    articles[i].style.background = 'blue'
}