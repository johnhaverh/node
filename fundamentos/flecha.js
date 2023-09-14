//forma tradicional
// function sumar(a,b=10){
//     return a + b;
// }

//forma normal
// const sumar = (a,b)=>{
//     return a + b;
// } 

//forma corta (solo cuando existe un return)
const sumar = (a,b) => a + b;

const saludar = () => 'Hola Mundo';

// function saludar (){
//     return 'Hola Mundo';
// }


console.log(sumar(5,11));
console.log(saludar());