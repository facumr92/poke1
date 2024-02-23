const precio= document.getElementById('precio-p');
const boton= document.getElementById('boton-c');
const boton_restaurar= document.getElementById('boton-r');


precio.style.backgroundColor="red";

let cantidad = 100;
let total=0;

precio.innerText= cantidad;

boton.addEventListener("click", ()=>{

    total = cantidad * 1.23; // Aumentar en un 23%
    precio.textContent = total.toFixed(2); //mostrar 2 cifras despues de la coma

});
const preguntar= () =>{


    let nombre= prompt("hola , ¿Cómo te llamas?");
    alert("bienvenido al sistema: " + nombre);
}



boton_restaurar.addEventListener("click", ()=>{

    precio.innerText= cantidad;

});

const t=3;

const tabla=(t) =>{

    for(let i=1; i<10; i++){
        console.log(i + "x"+ t +"="+ (i*t));
    }

}

tabla(t);



// const numeros= () =>{

// let num =prompt("ingresa un numero");

// if (isNaN(num)){

//     console.log("no es un numero");
// }else{

//     console.log("es un  numero")
// }

// }

// numeros();

const edades = (edad) => {
    edad > 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");
};

let edad = 20;
edades(edad);


