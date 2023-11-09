//Actividad 1 - Numero Primo

let numero = 8;
function esPrimo(numero) { 
    { if (numero <=1)
        {return "no es primo";}
    };
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return " No es primo"; 
        }
        return " Es primo";
    }
    
};

console.log(esPrimo(numero));


//Actividad 2 - Matrices

let matrizA = [[1,2], [3,4]];
let matrizB = [[5,6], [7,8]];

function sumadeMatrices (matrizA,matrizB) { 
  const filas = matrizA.length;
  const columnas = matrizA[0].length;
  let resultado = [];
  
  for (let i = 0; i < filas; i++) {
    let fila = [];
  
    for (let j = 0; j < columnas; j++) {
      fila.push(matrizA[i][j] + matrizB[i][j]); 
    }
    resultado.push(fila); 
  }

 for (let i = 0; i < filas; i++)
  {
    console.log(resultado[i]);
}
}
sumadeMatrices(matrizA, matrizB);


//Actividad 3 - Suma de rangos

let rango1 = [1, 2, 3, 4];
let rango2 = [5, 6, 7, 8];
let rango3 = [9, 10, 11, 12];

function sumadeRangos() {
  let data1 = 0;
  let data2 = 0;
  let data3 = 0;

  for (let i = 0; i < rango1.length; i++) {
    data1 += rango1[i];
  }
  
  for (let j = 0; j < rango2.length; j++) {
    data2 += rango2[j];
  }
  
  for (let k = 0; k < rango3.length; k++) {
    data3 += rango3[k];
  }

  if (data1 === data2) {
    console.log(`El resultado es ${data1}`);
  }
  if (data1 === data3) {
    console.log(`El resultado es ${data2}`);
  }
  if (data2 === data3) {
    console.log(`El resultado es ${data3}`);
  }
}

sumadeRangos();

//Actividad 4 - Suma Vocales.

let texto = "Gloria eterna"; 
const vocales = ["a", "e", "i", "o", "u"];

function contadorVocales(texto) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase(); 
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

let totalVocales = contadorVocales(texto);
console.log("La cantidad de vocales que tiene el texto: " + totalVocales);


// Actividad 5 - Matriz con elementos únicos.

let matriz1 = ["fernet","coca", "hielo", "vaso"]


console.log (matriz1.splice (1,2));


// Actividad 6 - Invertir texto sin reverse.

let texto1 = "Argentina campeon del mundo";

function textoInvertido() {
  let palabras = texto1.split(' '); 
  for (let i = 0; i < palabras.length; i++) {
    let palabraInvertida = '';
    for (let j = palabras[i].length - 1; j >= 0; j--) {
      palabraInvertida += palabras[i][j]; 
    }
    console.log(palabraInvertida);
  }
}

textoInvertido(); 



// INTERACCION CON DOM



//Actividad 2 - Aumentar disminuir tamaño


const aumentarBtn = document.getElementById('aumentarBtn');
const disminuirBtn = document.getElementById('disminuirBtn');

function cambiarTamaño(elementId, accion) {
    const texto = document.getElementById(elementId);
    const estilo = window.getComputedStyle(texto).fontSize;

    let tamanio = parseInt(estilo);

    if (accion === 'aumentar') {
        tamanio += 5;
    } else if (accion === 'disminuir') {
        tamanio -= 5;
    }

    texto.style.fontSize = `${tamanio}px`;
}

aumentarBtn.addEventListener('click', function() {
    cambiarTamaño('texto', 'aumentar');
});

disminuirBtn.addEventListener('click', function() {
    cambiarTamaño('texto', 'disminuir');
});






//Actividad 1 - Creacion de Carrusel de imagenes.

let carrusel = document.getElementById ("carrusel"); 
let imagenes = ["auto1.jpg","auto2.jpg","auto1.jpg","auto4.jpg"]; 
let index = 0; 
let botonAnterior = document.getElementById ("anterior"); 
let botonSiguiente = document.getElementById ("siguiente");

function mostrarImagen() {
    carrusel.src = `imagenes/${imagenes[index]}`;
}

function anterior () {
  if (index > 0) {
      index--;
    } else {
      index = 3;
    }
    mostrarImagen();
  };

function siguiente () {

    if (index < 3) {
      index++;
    } else {
      index = 0;
    };
    mostrarImagen();
}


botonAnterior.addEventListener ("click", anterior);
botonSiguiente.addEventListener("click", siguiente);




// Actividad 3 - Tarjetas.


function ShowHide(){
    var oferta = document.getElementsByClassName("oferta") [0];
    if(oferta.style.visibility =="hidden") {
        oferta.style.visibility = "visible";
    }else{
        oferta.style.visibility = "hidden";
    }
}













  