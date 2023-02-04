/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\nconst submitBtn = document.getElementById('submit-task-btn');\nconst addProject = document.getElementById('submit-proj-btn');\n\ndocument.addEventListener('click', function(e) {\n    if(e.target.innerText == 'add_circle') {\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();\n    } else if(e.target.closest('.modal')){\n        return\n    } else {\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\n    }\n})\n\ndocument.addEventListener('click', function(e) {\n    e.preventDefault();\n    if(e.target.innerText === 'add') {\n        (0,_project__WEBPACK_IMPORTED_MODULE_3__.openForm)();\n    } else if(e.target.innerText === 'Cancel') {\n        (0,_project__WEBPACK_IMPORTED_MODULE_3__.closeForm)();\n    }\n})\n\nsubmitBtn.addEventListener('click', (e) => {\n    e.preventDefault()\n    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.submit)();\n});\n\naddProject.addEventListener('click', (e) => {\n    e.preventDefault()\n    ;(0,_project__WEBPACK_IMPORTED_MODULE_3__.getProject)();\n});\n\n(0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFromLocalStorage\": () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   \"removeFromLocalStorage\": () => (/* binding */ removeFromLocalStorage),\n/* harmony export */   \"setToLocalStorage\": () => (/* binding */ setToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nconst todo = JSON.parse(localStorage.getItem('todo')) || [];\n\nfunction setToLocalStorage(task) {\n    \n    todo.push(task)\n    localStorage.setItem('todo', JSON.stringify(todo))\n}\n\nfunction removeFromLocalStorage(index) {\n\n    todo.splice(index, 1)\n    localStorage.setItem('todo', JSON.stringify(todo));\n}\n\nfunction loadFromLocalStorage() {\n    \n    if(todo != null) {\n        todo.forEach(element => {\n        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.displayTask)(element);\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/localstorage.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst popUp = document.getElementById('popup');\n\nfunction openModal() {\n    popUp.classList.add('open-modal');\n}\n\nfunction closeModal() {\n    popUp.classList.remove('open-modal');\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modal.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"getProject\": () => (/* binding */ getProject),\n/* harmony export */   \"openForm\": () => (/* binding */ openForm)\n/* harmony export */ });\nconst projectDiv = document.getElementById('projects-div');\nconst projectTitle = document.getElementById('projects-name');\nconst popupForm = document.getElementById('popup-form');\n\nfunction getProject() {\n    const projectBtn = document.createElement('button');\n\n    if(projectTitle.value === '') {\n        projectBtn.innerText = 'My Project';\n    } else {\n        projectBtn.innerText = projectTitle.value;\n    }\n    \n    projectDiv.appendChild(projectBtn);\n\n    closeForm();\n    document.querySelector('form').reset();\n}\n\nfunction openForm() {\n    popupForm.classList.add('open-project');\n}\n\nfunction closeForm() {\n    popupForm.classList.remove('open-project');\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask),\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n\n\n\nclass Tasks {\n    constructor(name, description, dueDate, priority) {\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\nfunction getTaskInput() {\n    const taskName = document.getElementById('name').value;\n    const taskDesc = document.getElementById('description').value;\n    const taskDate = document.getElementById('date').value;\n    const taskPrio = document.getElementById('priority').value;\n\n    return new Tasks(taskName, taskDesc, taskDate, taskPrio);\n}\n\nconst tasksId = document.getElementById('tasksId');\n\nfunction displayTask(tasks) {\n    const taskDiv = document.createElement('div');\n    taskDiv.id = 'card';\n    \n    const taskName = document.createElement('h3');\n    const taskDescription = document.createElement('p');\n    const taskDate = document.createElement('p');\n    const taskPrio = document.createElement('p');\n    \n    taskName.innerText = tasks.name;\n    \n    if(taskName.innerText === '') {\n        taskName.innerText = 'My Task';\n    }\n    \n    taskDescription.innerText = tasks.description;\n    taskDate.innerText = formatDate(tasks.dueDate);\n    \n    if(taskDate.innerText.includes('undefined')) {\n        taskDate.innerText = 'No Due Date';\n    }\n    \n    taskPrio.innerText = tasks.priority;\n    \n    taskDiv.appendChild(taskName);\n    taskDiv.appendChild(taskDescription);\n    taskDiv.appendChild(taskDate);\n    taskDiv.appendChild(taskPrio);\n    \n    tasksId.appendChild(taskDiv)\n    deleteButton(taskDiv)\n}\n\nfunction deleteButton(card) {\n    const delBtn = document.createElement('button');\n    delBtn.id = 'del-btn';\n    \n    delBtn.innerText = 'Delete 🗑';\n    card.appendChild(delBtn);\n    \n    return card;\n}\n\n\ntasksId.addEventListener('mouseover', (e) => {\n    \n    for (let i = 0; i < tasksId.children.length; i++){\n\n        tasksId.children[i].onclick = function(){\n            if(e.target.id === 'del-btn') {\n\n                tasksId.removeChild(tasksId.children[i]);\n                (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.removeFromLocalStorage)(i);\n            }\n        }    \n    }\n})\n\nfunction formatDate(date) {\n    const day = date.split('-')[2];\n    const month = date.split('-')[1];\n    const year = date.split('-')[0];\n    \n    return `${day}/${month}/${year}`;\n}\n\nfunction submit() {\n    const newTask = getTaskInput();\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.setToLocalStorage)(newTask);\n    displayTask(newTask)\n    \n    document.querySelector('form').reset();\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)()\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;