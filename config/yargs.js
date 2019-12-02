const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de tarea"
}
const completado = {
    alias: 'c',
    default: true,
    desc: "Descripcion de estado completado"
}

const argv = require("yargs")
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra un elemento por hacer', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}