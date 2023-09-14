const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base debe ser numérica';
        } 
        return true;
    })    
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
    })
    .argv

//const base = 5

console.clear();
//console.log(process.argv);
console.log(argv);


crearArchivo(argv.base, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

