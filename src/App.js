import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { nanoid } from "nanoid";

export default function () {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [formData, setFormData] = useState({
        input: "",
        curOption: "all",
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = function (e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = function (e) {
        e.preventDefault();
        if (!formData.input) return;
        if (formData.input)
            setTodos((prevTodos) => [
                ...prevTodos,
                {
                    text: formData.input,
                    id: nanoid(),
                    complete: false,
                    exists: true,
                },
            ]);

        setFormData((prevData) => ({ ...prevData, input: "" }));
    };

    const completeTodo = function (id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, complete: true } : todo
            )
        );
    };

    const hideTodo = function (id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, exists: !todo.exists } : todo
            )
        );
    };

    const deleteTodo = function (id) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <h1>My Todo App</h1>
            <Form
                curOption={formData.curOption}
                input={formData.input}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <List
                todos={todos}
                hideTodo={hideTodo}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                curOption={formData.curOption}
            />
        </>
    );
}
