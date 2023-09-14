const empleados = [
    {
        id: 1,
        nombre: 'John'
    },
    {
        id: 2,
        nombre: 'Isabella'
    },
    {
        id: 3,
        nombre: 'Carolina'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        nombre: 2000,
    },
];


// const getEmpleado = (id) => {
//     const empleado = empleados.find (e => e.id === id);
//     if (empleado){
//         return empleado;
//     } else {
//         return `Empleado con id ${id} no existe`;
//     }
// }

// console.log(getEmpleado(3));


const getEmpleado = (id, callback) => {
    const empleado = empleados.find (e => e.id === id);
    if (empleado){
        callback(null, empleado.nombre);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find (e => e.id === id)?.salario;
    if (salario){
        callback(null, salario);
    } else {
        callback(`Salario de empleado con id ${id} no existe`);
    }
}

const id = 1;


// getEmpleado(id,(err, empleado)=>{
//     if (err) {
//         console.log('Error');
//         return console.log(err);  
//     }
//     console.log('Empleado existe');
//     console.log(empleado.nombre);
// })

// getSalario(id,(err, salario)=>{
//     if (err) {
//         console.log('Error');
//         return console.log(err);  
//     }
//     //console.log('Salario existe');
//     console.log(salario);
// })

getEmpleado(id,(err, empleado)=>{
    if (err) {
        console.log('Error');
        return console.log(err);  
    }
    getSalario(id,(err, salario)=>{
        if (err) {
            console.log('Error');
            return console.log(err);  
        }
        console.log('El empleado:',empleado,'tiene un salario de:',salario);
        
    })
})