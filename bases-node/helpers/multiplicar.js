const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar=false, tope=10) => {

    try {
        
        let salida='';
        let consola='';
        
        for (let i = 1; i <= tope; i++) {
            salida += (`${base} x ${i} = ${base*i}\n`);
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`);
        }
        
        if (listar){
            console.log('====================='.green);
            console.log('    Tabla del'.green,colors.blue(base)   );
            console.log('====================='.green);
            console.log(consola);
        }
        
        
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        //console.log(`Archivo tabla-${base}.txt creado`);
        return `Archivo tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }  
};

module.exports = { crearArchivo }