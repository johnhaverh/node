
const {crearArchivo} = require('./helpers/multiplicar');

const base = 5

console.clear();

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

