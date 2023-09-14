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
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


// const getEmpleado = (id) => {
    //     const promesa = new Promise((resolve, reject) => {
        //         const empleado = empleados.find (e => e.id === id)?.nombre;
        //         if (empleado){
            //             resolve(empleado);
            //         } else {
                //             reject(`Empleado con id ${id} no existe`);
                //         }
                //     });
                //     return promesa;
                // }
                
                // const getEmpleado = (id) => {
                    //     return new Promise((resolve, reject) => {
                        //         const empleado = empleados.find (e => e.id === id)?.nombre;
                        //         if (empleado){
//             resolve(empleado);
//         } else {
//             reject(`Empleado con id ${id} no existe`);
//         }
//     });
// }

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find (e => e.id === id)?.nombre;
        (empleado) ?  resolve(empleado) : reject(`Empleado con id ${id} no existe`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find (s => s.id === id)?.salario;
        (salario) ?  resolve(salario) : reject(`Salario del empleado con id ${id} no existe`);
    });
}


const id=3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log('El empleado:',empleado, 'tiene un salario de:',salario);
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));