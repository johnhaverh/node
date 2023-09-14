const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Numero para el calculo'
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
        default: false,
        description: 'Indica si imprime tabla en consola'
    })    
    .option('t',{
        alias: 'tope',
        type: 'number',
        demandOption: true,
        //default: 10,
        description: 'Numero maximo para el calculo'
    })
    .argv

module.exports = argv