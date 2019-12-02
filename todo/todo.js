const fs = require('fs')

let listadoTodo = []

const guardarDB = () => {
    let data = JSON.stringify(listadoTodo)

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error("No se pudo grabar");
        console.log(`Guardado`)
    });
}

const getListado = () => {
    cargarDB()
    return listadoTodo;
}

const cargarDB = () => {
    try {
        listadoTodo = require('../db/data.json')
    }
    catch (err) {
        listadoTodo = []
    }

}

const crear = descripcion => {
    cargarDB()

    let todo = {
        descripcion,
        completado: false
    }

    listadoTodo.push(todo)
    guardarDB()

    return todo
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTodo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoTodo[index].completado = true;
        guardarDB();
        return true
    }
    return false;
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoTodo.filter((todo) => {
        return todo.descripcion !== descripcion
    });
    if (listadoTodo.length === nuevoListado.length) {
        return false
    }
    listadoTodo = nuevoListado
    guardarDB()
    return true
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}