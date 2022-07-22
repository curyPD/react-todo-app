import React, { useState } from "react";
import { IoCheckmarkSharp, IoTrashSharp } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";

export default function List(props) {
    const listItems = props.todos.map((todo) => {
        return (
            <ListItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                complete={todo.complete}
                exists={todo.exists}
                completeTodo={props.completeTodo}
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
            unmountOnExit
            classNames="example"
            appear={true}
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
                <button onClick={() => props.deleteTodo(props.id)}>
                    <IoTrashSharp />
                </button>
            </li>
        </CSSTransition>
    );
}
