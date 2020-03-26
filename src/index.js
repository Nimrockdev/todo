import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JS');
// todoList.nuevoTodo(tarea);

// tarea.completado = false;
// crearTodoHTML(tarea);

todoList.todos.forEach(todo => crearTodoHTML(todo));