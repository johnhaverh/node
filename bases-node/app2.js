
const {crearArchivo} = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

//const base = 5

console.clear();
//console.log(process.argv);
// console.log(argv);


crearArchivo(argv.base, argv.listar, argv.tope)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));

