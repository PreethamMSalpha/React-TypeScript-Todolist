"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Todolist_1 = require("./components/Todolist");
var NewTodo_1 = require("./components/NewTodo");
function App() {
    var _a = react_1.useState([]), todos = _a[0], setTodos = _a[1];
    var todoAddHanlder = function (text) {
        setTodos(function (prevTodos) { return __spreadArrays(prevTodos, [
            { id: Math.random().toString(), text: text },
        ]); });
    };
    var todoDeleteHandler = function (todoId) {
        setTodos(function (prevTodos) {
            return prevTodos.filter(function (todo) { return todo.id !== todoId; });
        });
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(NewTodo_1["default"], { onAddToDo: todoAddHanlder }),
        react_1["default"].createElement(Todolist_1["default"], { items: todos, onDeleteTodo: todoDeleteHandler })));
}
exports["default"] = App;
