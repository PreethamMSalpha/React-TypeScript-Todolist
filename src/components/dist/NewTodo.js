"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./NewTodo.css");
var NewTodo = function (props) {
    var textInputRef = react_1.useRef(null);
    var todoSubmitHandler = function (event) {
        event.preventDefault();
        var enteredText = textInputRef.current.value;
        // console.log(enteredText);
        props.onAddToDo(enteredText);
    };
    return (react_1["default"].createElement("form", { onSubmit: todoSubmitHandler },
        react_1["default"].createElement("div", { className: "form-control" },
            react_1["default"].createElement("label", { htmlFor: "todo-text" }, "Todo Text"),
            react_1["default"].createElement("input", { type: "text", id: "todo-text", ref: textInputRef })),
        react_1["default"].createElement("button", { type: "submit" }, "ADD TODO")));
};
exports["default"] = NewTodo;
