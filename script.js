
/*  Ejercicio manipulando elementos de HTML dentro de js usamos etiquetadores
cambiamos atributos, usamos getters y setters para acceder a atributos 
y metodos de las clases incluso creamos nuevos elementos
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Cosito';
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");
//console.log(h1.getAttribute("class"));

h1.classList.add("rojo");
h1.classList.remove("verde");

input.value="1234";

const img = document.createElement('img');
img.setAttribute('src', 'https://th.bing.com/th/id/R.b16196c59e1ea1b448776cc9ba3ed144?rik=8ZPFb2AFc7qtfw&riu=http%3a%2f%2fbuyorganiccoffee.org%2fwp-content%2fuploads%2f2015%2f11%2fcup-of-java.jpg&ehk=E3uE25i1%2flISch6Up1y7iBWqQ3nMUk9u%2bMBnehSji7s%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1');
console.log(img);
pid.innerHTML = "";
pid.append(img);

*/




//acá comienza el nuevo ejercicio para escuchar eventos dentro del html 
// y manipularlos dentro del script agregamos una concatenacion con innertext


const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
   const sumaImputs =  input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaImputs;
  
}

