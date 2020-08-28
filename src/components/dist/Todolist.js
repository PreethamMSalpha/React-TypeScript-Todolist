"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TodoList.css");
var Todolist = function (props) {
    return (react_1["default"].createElement("ul", { className: "elements" }, props.items.map(function (todo) { return (react_1["default"].createElement("li", { key: todo.id },
        react_1["default"].createElement("span", null,
            todo.text,
            react_1["default"].createElement("button", { onClick: props.onDeleteTodo.bind(null, todo.id) }, "DELETE")))); })));
};
exports["default"] = Todolist;
