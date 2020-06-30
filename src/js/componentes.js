import { Todo } from '../classes';
import { todoList } from '../index';

//Referencias al html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const Filtro = document.querySelectorAll('.filtro');
var prioridades = document.getElementsByName('prioridad');
const divpendientes = document.querySelector('.todo-count');

export const crearTodoHTML = (todo) => {

    const htmlTodo =
        `<li class="${(todo.completado) ?  'completed': ''}"  data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado)? 'checked':'' }>
                <div>
                    <label style="COLOR:${dameColor(todo.prioridad)}">${todo.tarea}</label>
                </div>
                    <button class="destroy"></button>           
               </div>               
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    //Hacemos el apped del primer hijo del div, el li
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}


export const crearPendientes = (todos) => {

    divpendientes.innerHTML = '';

    let todosPendientes = todos.filter(todo => todo.completado == false)

    const htmlPendientes =
        `<span class="todo-count"><strong>${todosPendientes.length}</strong> Pendientes</span>`;

    const div = document.createElement('div');
    div.innerHTML = htmlPendientes;
    //Hacemos el apped del primer hijo del div, el li

    divpendientes.append(div.firstElementChild);
}

function dameColor(prioridad) {

    console.log(prioridad)

    switch (parseInt(prioridad)) {

        case 1:
            return 'black'
            break;
        case 2:
            return 'blue'
            break;
        case 3:
            return '#ff0000'
            break;

    }

}

//Eventos

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {

        let prioridad;

        for (var i = 0; i < prioridades.length; i++) {
            if (prioridades[i].checked) {
                prioridad = prioridades[i].value;
            }
        }

        const nuevoTodo = new Todo(txtInput.value, prioridad);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
        crearPendientes(todoList.todos)
    }


});


divTodoList.addEventListener('click', (event => {

    // console.log('click');
    // console.log(event.target.localName);

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoID = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) {
        todoList.marcarFinalizado(todoID);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoID);
        divTodoList.removeChild(todoElemento);
    }
    crearPendientes(todoList.todos)


}));



btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }


    }

});

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) {
        return;
    }

    //Para la clase selected, cuando pulsemos sobre una acción
    Filtro.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');


    for (const elemento of divTodoList.children) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;


        }


    }


})