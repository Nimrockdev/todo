export class Todo {

    //Para los objetos
    static fromJSON({ id, tarea, completado, creado }) {
        const tTodo = new Todo(tarea);

        tTodo.id = id;
        tTodo.completado = completado;
        tTodo.creado = creado;

        return tTodo
    }

    constructor(tarea) {

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }

};