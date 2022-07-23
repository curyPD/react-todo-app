import React, { useState } from "react";
import { IoCheckmarkSharp, IoTrashSharp } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";

export default function List(props) {
    let todos;

    if (props.curOption === "all") todos = props.todos;
    if (props.curOption === "completed")
        todos = props.todos.filter((todo) => todo.complete);
    if (props.curOption === "unfinished")
        todos = props.todos.filter((todo) => !todo.complete);

    const listItems = todos.map((todo) => {
        return (
            <ListItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                complete={todo.complete}
                exists={todo.exists}
                completeTodo={props.completeTodo}
                hideTodo={props.hideTodo}
                deleteTodo={props.deleteTodo}
            />
        );
    });

    return <ul>{listItems}</ul>;
}

function ListItem(props) {
    return (
        <CSSTransition
            in={props.exists}
            timeout={300}
            unmountOnExit={true}
            classNames="example"
            appear={true}
            onExited={() => props.deleteTodo(props.id)}
        >
            <li
                className={[props.complete ? "todo-complete" : "", "todo"].join(
                    " "
                )}
            >
                <span>{props.text}</span>
                <button onClick={() => props.completeTodo(props.id)}>
                    <IoCheckmarkSharp />
                </button>
                <button onClick={() => props.hideTodo(props.id)}>
                    <IoTrashSharp />
                </button>
            </li>
        </CSSTransition>
    );
}
