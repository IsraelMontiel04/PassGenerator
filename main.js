constraseñaGenerada = document.getElementById("contraseña-generada");
copiarContraseña = document.getElementById("copiar-contraseña");
longitudContraseña = document.getElementById("longitud-contraseña");

incremetoRango = document.getElementById("incrementar-rango");
disminuirRango = document.getElementById("disminuir-rango");

inputLongitud = document.getElementById("longitud")
inputMayusculas = document.getElementById("mayusculas")
inputMinusculas = document.getElementById("minusculas")
inputNumeros = document.getElementById("numeros")
inputSimbolos = document.getElementById("simbolos")

botonGenerar = document.getElementById("boton-generar");

mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
minusculas = "abcdefghijklmnopqrstuvwxyz";
numeros = "0123456789";
simbolos = "!@#$%&*()_+=";

incremetoRango.addEventListener("click", function incrementarUno(){
    inputLongitud.value=parseInt(inputLongitud.value) + 1;
    longitudContraseña.textContent = inputLongitud.value;
})

incremetoRango.addEventListener("click", function disminuirUno(){
    inputLongitud.value=parseInt(inputLongitud.value) - 1;
    longitudContraseña.textContent = inputLongitud.value;
})

function mostrarCantidad(valor){
    longitudContraseña.textContent = valor
}

function numeroAleatorio(maximo){
    return Math.floor(Math.random()* maximo)
}

function obtenerMayuscula(){
    return mayusculas[numeroAleatorio(mayusculas.length)];
}

function obtenerMinuscula(){
    return minusculas[numeroAleatorio(minusculas.length)];
}

function obtenerNumeros(){
    return numeros[numeroAleatorio(numeros.length)];
}

function obtenerSimbolos(){
    return simbolos[numeroAleatorio(simbolos.length)];
}

let contraseñaNueva ="";
botonGenerar.addEventListener('click', function generarContraseña(e){
    console.log(obtenerMayuscula());

    contraseñaNueva = '';
    if(inputMayusculas.checked){
        contraseñaNueva +=obtenerMayuscula()
    }
    if(inputMinusculas.checked){
        contraseñaNueva +=obtenerMinuscula()
    }
    if(inputNumeros.checked){
        contraseñaNueva +=obtenerNumeros()
    }
    if(inputSimbolos.checked){
        contraseñaNueva +=obtenerSimbolos()
    }

    if(inputMayusculas.checked || inputMinusculas.checked || inputNumeros.checked || inputSimbolos.checked){
        rellenarContraseña()
    }

    console.log(contraseñaNueva);
    constraseñaGenerada.textContent=contraseñaNueva;

    if(checkboxDestilados()){
        mostrarError()
    } 
})

function rellenarContraseña(){
    while(contraseñaNueva.length < parseInt(longitudContraseña.textContent)){
        const aletorio=caracterAleatorio();

        if(inputMayusculas.checked && aletorio === 0){
            contraseñaNueva +=obtenerMayuscula()
        }
        if(inputMinusculas.checked && aletorio === 1){
            contraseñaNueva +=obtenerMinuscula()
        }
        if(inputNumeros.checked && aletorio === 2){
            contraseñaNueva +=obtenerNumeros()
        }
        if(inputSimbolos.checked && aletorio === 3){
            contraseñaNueva +=obtenerSimbolos()
        }
    }

    console.log(contraseñaNueva);
}

function caracterAleatorio(){
    return Math.floor(Math.random() * 4)
}

copiarContraseña.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    textarea.value = contraseñaNueva;
    document.body.appendChild(textarea)
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
})

function checkboxDestilados(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    console.log(checkboxes);
    for(let i = 0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            return false
        }
    }
    return true
}

function mostrarError(){
    const divError = document.querySelector("#error")
    const parrafoError = document.createElement('p')
    parrafoError.innerHTML ="Por favor selecciona alguna de las opciones de caracter para crear tu contraseña"
    divError.appendChild(parrafoError)
    parrafoError.classList.add("error")

    setTimeout(() => {
        parrafoError.remove()
    }, 3000);
}

