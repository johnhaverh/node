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

const getInfoUsuario = async () =>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tienen un salario de ${salario}`;
    } catch (error) {
        //return error;
        throw error;
    }
}

getInfoUsuario()
    .then(msg => {
        console.log('todo bien');
        console.log(msg)
    })
    .catch(err => {
        console.log('todo mal');
        console.log(err)
    });