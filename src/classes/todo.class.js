export class Todo {

    //Para los objetos
    static fromJSON({ id, tarea, completado, creado, prioridad }) {
        const tTodo = new Todo(tarea);

        tTodo.id = id;
        tTodo.completado = completado;
        tTodo.creado = creado;
        tTodo.prioridad = prioridad;

        return tTodo
    }

    constructor(tarea, prioridad) {

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
        this.prioridad = prioridad;

    }

};