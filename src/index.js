import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHTML, crearPendientes } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JS');
// todoList.nuevoTodo(tarea);

// tarea.completado = false;
// crearTodoHTML(tarea);

todoList.todos.forEach(todo => crearTodoHTML(todo));

crearPendientes(todoList.todos);

// let creaTODO = () => {
//     return new Promise((resolve, reject) => {
//         resolve(todoList.todos.forEach(todo => crearTodoHTML(todo)));
//     })
// }

// creaTODO().then(() => crearPendientes(todoList.todos));