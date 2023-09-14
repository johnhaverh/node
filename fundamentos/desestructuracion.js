const deadpool = {
    nombre: 'Wide',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre (){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//impresión directa desde el objeto
console.log('Objeto ',deadpool.getNombre());

//impresión generando variables por separado
const nombre1 = deadpool.nombre;
const apellido1 = deadpool.apellido;
const poder1 = deadpool.poder;
console.log('Variables ',nombre1,apellido1,poder1);


//impresión usando desestructuracion de objetos
const {nombre, apellido, poder, edad=0} = deadpool;
console.log('Desestructuracion ',nombre,apellido,poder, edad);

//haciendo uso de funcion (no se usa este tipo de codificacion para funciones)
function imprimeHeroe(heroe){
    const {nombre, apellido, poder, edad=0} = deadpool;
    console.log('Funcion 1 ',nombre,apellido,poder, edad);
}

function imprimeHeroe2({nombre, apellido, poder, edad=0}){
    console.log('Funcion 2 ',nombre,apellido,poder, edad);
}

imprimeHeroe(deadpool);
imprimeHeroe2(deadpool);

//variables para arreglos
const heroes = ['Deadpool','Superman','Batman'];
const h1=heroes[0];
const h2=heroes[1];
const h3=heroes[2];

console.log('Variables Arreglos  ',h1,h2,h3);

//desestructuracion de arreglos
const [h4,h5,h6] = heroes;
console.log('Desestructuracion Arreglos',h4,h5,h6);

//desestructuracion de arreglos - puntual
const [,,h7] = heroes;
console.log('Desestructuracion Arreglos puntual',h7);