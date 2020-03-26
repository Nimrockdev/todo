import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        //this.todos = [];

        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        let idNumber = parseInt(id);

        this.todos = this.todos.filter(todo => todo.id !== idNumber);
        this.guardarLocalStorage();
    }

    marcarFinalizado(id) {

        let idNumber = parseInt(id);

        for (const todo of this.todos) {

            console.log(idNumber, todo.id);

            if (todo.id === idNumber) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }


    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }


    //LocalStorage
    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {
        /*
        if (localStorage.getItem('todo')) {

            this.todos = JSON.parse(localStorage.getItem('todo'));
            console.log('Cargar :', this.todos);
        } else {
            console.log('Creo Todo, desde cargarLocalStorage');
            this.todos = [];
        }
        */

        //Lo hacemos con operadores ternairos
        this.todos = (localStorage.getItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) : [];

        //Devuelven los objetos y los pasamos a clases
        this.todos = this.todos.map(
            obj => Todo.fromJSON(obj)
        );
    }

}