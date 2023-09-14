
const {crearArchivo} = require('./helpers/multiplicar');

const base = x

console.clear();

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

