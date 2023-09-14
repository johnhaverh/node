//es una función que se envía como argumentos a otra función.



//definicion tradicional de funciones
// setTimeout(function() {
//     console.log('Hola Mundo');
// }, 1000);

//definicion tipo flecha
// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 1000);

//funcion normal para callback
// const getUsuarioByID = (id) => {
//     const usuario = {
//         id,
//         nombre: 'John',
//     }
//     setTimeout(() => {
//         console.log(usuario);
//     }, 1500)
// }
// getUsuarioByID(10);

//funcion con callback
const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'John',
    }
    setTimeout(() => {
        callback(usuario);
    }, 1500)
}

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});