import { Todo } from '../classes';
import { todoList } from '../index';

//Referencias al html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const Filtro = document.querySelectorAll('.filtro');
var prioridades = document.getElementsByName('prioridad');




export const crearTodoHTML = (todo) => {

    const htmlTodo =
        `<li class="${(todo.completado) ?  'completed': ''}"  data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado)? 'checked':'' }>
                <label>${todo.tarea}</label>
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


//Eventos

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {


        let prioridad;

        for (var i = 0; i < prioridades.length; i++) {
            if (prioridades[i].checked) {
                prioridad = prioridades[i].value;
            }
        }


        console.log(txtInput.value);
        console.log(prioridad)

        const nuevoTodo = new Todo(txtInput.value, prioridad);
        todoList.nuevoTodo(nuevoTodo);

        console.log(todoList);

        crearTodoHTML(nuevoTodo);
        txtInput.value = '';

    }


});


divTodoList.addEventListener('click', (event => {

    // console.log('click');
    // console.log(event.target.localName);

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoID = todoElemento.getAttribute('data-id');
    console.log(todoID);

    if (nombreElemento.includes('input')) {
        todoList.marcarFinalizado(todoID);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoID);
        divTodoList.removeChild(todoElemento);
    }

    console.log(todoList);

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