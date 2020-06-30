/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: Todo, TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return _todo_class__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"]; });\n\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/classes/todo-list.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return _todo_list_class__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\r\n\r\nclass TodoList {\r\n\r\n    constructor() {\r\n        //this.todos = [];\r\n\r\n        this.cargarLocalStorage();\r\n    }\r\n\r\n    nuevoTodo(todo) {\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    eliminarTodo(id) {\r\n\r\n        let idNumber = parseInt(id);\r\n\r\n        this.todos = this.todos.filter(todo => todo.id !== idNumber);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    marcarFinalizado(id) {\r\n\r\n        let idNumber = parseInt(id);\r\n\r\n        for (const todo of this.todos) {\r\n\r\n            console.log(idNumber, todo.id);\r\n\r\n            if (todo.id === idNumber) {\r\n                todo.completado = !todo.completado;\r\n                this.guardarLocalStorage();\r\n                break;\r\n            }\r\n        }\r\n\r\n\r\n    }\r\n\r\n    eliminarCompletados() {\r\n\r\n        this.todos = this.todos.filter(todo => !todo.completado);\r\n        this.guardarLocalStorage();\r\n\r\n    }\r\n\r\n\r\n    //LocalStorage\r\n    guardarLocalStorage() {\r\n\r\n        localStorage.setItem('todo', JSON.stringify(this.todos));\r\n\r\n    }\r\n\r\n    cargarLocalStorage() {\r\n        /*\r\n        if (localStorage.getItem('todo')) {\r\n\r\n            this.todos = JSON.parse(localStorage.getItem('todo'));\r\n            console.log('Cargar :', this.todos);\r\n        } else {\r\n            console.log('Creo Todo, desde cargarLocalStorage');\r\n            this.todos = [];\r\n        }\r\n        */\r\n\r\n        //Lo hacemos con operadores ternairos\r\n        this.todos = (localStorage.getItem('todo')) ?\r\n            JSON.parse(localStorage.getItem('todo')) : [];\r\n\r\n        //Devuelven los objetos y los pasamos a clases\r\n        this.todos = this.todos.map(\r\n            obj => _todo_class__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"].fromJSON(obj)\r\n        );\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\nclass Todo {\r\n\r\n    //Para los objetos\r\n    static fromJSON({ id, tarea, completado, creado, prioridad }) {\r\n        const tTodo = new Todo(tarea);\r\n\r\n        tTodo.id = id;\r\n        tTodo.completado = completado;\r\n        tTodo.creado = creado;\r\n        tTodo.prioridad = prioridad;\r\n\r\n        return tTodo\r\n    }\r\n\r\n    constructor(tarea, prioridad) {\r\n\r\n        this.tarea = tarea;\r\n        this.id = new Date().getTime();\r\n        this.completado = false;\r\n        this.creado = new Date();\r\n        this.prioridad = prioridad;\r\n\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack:///./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n\n\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]();\n\n// const tarea = new Todo('Aprender JS');\n// todoList.nuevoTodo(tarea);\n\n// tarea.completado = false;\n// crearTodoHTML(tarea);\n\ntodoList.todos.forEach(todo => Object(_js_componentes__WEBPACK_IMPORTED_MODULE_2__[\"crearTodoHTML\"])(todo));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/*! exports provided: crearTodoHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearTodoHTML\", function() { return crearTodoHTML; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n\r\n//Referencias al html\r\nconst divTodoList = document.querySelector('.todo-list');\r\nconst txtInput = document.querySelector('.new-todo');\r\nconst btnBorrar = document.querySelector('.clear-completed');\r\nconst ulFiltros = document.querySelector('.filters');\r\nconst Filtro = document.querySelectorAll('.filtro');\r\nvar prioridades = document.getElementsByName('prioridad');\r\n\r\n\r\n\r\n\r\nconst crearTodoHTML = (todo) => {\r\n\r\n\r\n\r\n    const htmlTodo =\r\n        `<li class=\"${(todo.completado) ?  'completed': ''}\"  data-id=\"${todo.id}\">\r\n            <div class=\"view\">\r\n                <input class=\"toggle\" type=\"checkbox\" ${(todo.completado)? 'checked':'' }>\r\n                <div>\r\n                <label style=\"COLOR:${dameColor(todo.prioridad)}\">${todo.tarea}</label>\r\n        \r\n                </div>\r\n       \r\n                <button class=\"destroy\"></button>\r\n               </div>\r\n            <input class=\"edit\" value=\"Create a TodoMVC template\">\r\n        </li>`;\r\n\r\n    const div = document.createElement('div');\r\n    div.innerHTML = htmlTodo;\r\n    //Hacemos el apped del primer hijo del div, el li\r\n    divTodoList.append(div.firstElementChild);\r\n\r\n    return div.firstElementChild;\r\n\r\n}\r\n\r\nfunction dameColor(prioridad) {\r\n\r\n    console.log(prioridad)\r\n\r\n    switch (parseInt(prioridad)) {\r\n\r\n        case 1:\r\n            return '#4CAF50'\r\n\r\n            break;\r\n        case 2:\r\n            return '#fffb03'\r\n            break;\r\n        case 3:\r\n            return '#ff0000'\r\n            break;\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n//Eventos\r\n\r\ntxtInput.addEventListener('keyup', (event) => {\r\n\r\n    if (event.keyCode === 13 && txtInput.value.length > 0) {\r\n\r\n\r\n        let prioridad;\r\n\r\n        for (var i = 0; i < prioridades.length; i++) {\r\n            if (prioridades[i].checked) {\r\n                prioridad = prioridades[i].value;\r\n            }\r\n        }\r\n\r\n\r\n        console.log(txtInput.value);\r\n        console.log(prioridad)\r\n\r\n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](txtInput.value, prioridad);\r\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].nuevoTodo(nuevoTodo);\r\n\r\n        console.log(_index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"]);\r\n\r\n        crearTodoHTML(nuevoTodo);\r\n        txtInput.value = '';\r\n\r\n    }\r\n\r\n\r\n});\r\n\r\n\r\ndivTodoList.addEventListener('click', (event => {\r\n\r\n    // console.log('click');\r\n    // console.log(event.target.localName);\r\n\r\n    const nombreElemento = event.target.localName;\r\n    const todoElemento = event.target.parentElement.parentElement;\r\n    const todoID = todoElemento.getAttribute('data-id');\r\n    console.log(todoID);\r\n\r\n    if (nombreElemento.includes('input')) {\r\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].marcarFinalizado(todoID);\r\n        todoElemento.classList.toggle('completed');\r\n    } else if (nombreElemento.includes('button')) {\r\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarTodo(todoID);\r\n        divTodoList.removeChild(todoElemento);\r\n    }\r\n\r\n    console.log(_index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"]);\r\n\r\n}));\r\n\r\n\r\n\r\nbtnBorrar.addEventListener('click', () => {\r\n\r\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarCompletados();\r\n\r\n    for (let i = divTodoList.children.length - 1; i >= 0; i--) {\r\n\r\n        const elemento = divTodoList.children[i];\r\n\r\n        if (elemento.classList.contains('completed')) {\r\n            divTodoList.removeChild(elemento);\r\n        }\r\n\r\n\r\n    }\r\n\r\n});\r\n\r\nulFiltros.addEventListener('click', (event) => {\r\n\r\n    const filtro = event.target.text;\r\n    if (!filtro) {\r\n        return;\r\n    }\r\n\r\n    //Para la clase selected, cuando pulsemos sobre una acción\r\n    Filtro.forEach(elem => elem.classList.remove('selected'));\r\n    event.target.classList.add('selected');\r\n\r\n\r\n    for (const elemento of divTodoList.children) {\r\n\r\n        elemento.classList.remove('hidden');\r\n        const completado = elemento.classList.contains('completed');\r\n\r\n        switch (filtro) {\r\n            case 'Pendientes':\r\n                if (completado) {\r\n                    elemento.classList.add('hidden');\r\n                }\r\n                break;\r\n            case 'Completados':\r\n                if (!completado) {\r\n                    elemento.classList.add('hidden');\r\n                }\r\n                break;\r\n\r\n\r\n        }\r\n\r\n\r\n    }\r\n\r\n\r\n})\n\n//# sourceURL=webpack:///./src/js/componentes.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });