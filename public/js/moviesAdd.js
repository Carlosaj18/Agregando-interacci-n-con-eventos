window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let tituloInput = document.getElementById('titulo')


    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    /** 4. En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color. */
    titulo.addEventListener('mouseover', function(e){
        titulo.style.color = 'orange'
    })
    titulo.addEventListener('mouseout', function(e) {
        // modo oscuto
        titulo.style.color = 'black'
    })

    let estadoSecreto = 0;

    tituloInput.addEventListener('keypress', function(e){
        if(estadoSecreto == 0 && e.key == "s"){ 
            estadoSecreto =1;
        } else if (estadoSecreto == 1 && e.key == "e"){
            estadoSecreto =2;
        } else if (estadoSecreto == 2 && e.key == "c"){
            estadoSecreto =3;
        } else if (estadoSecreto == 3 && e.key == "r"){
            estadoSecreto =4;
        } else if (estadoSecreto == 4 && e.key == "e"){
            estadoSecreto =5;
        } else if (estadoSecreto == 5 && e.key == "t"){
            estadoSecreto =6;
        } else if (estadoSecreto == 6 && e.key == "o"){
            estadoSecreto =0;
            alert('SECRETO MAGICO');
        }  else {
            estadoSecreto =0;
        }
    })

}