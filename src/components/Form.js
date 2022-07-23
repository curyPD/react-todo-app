import React from "react";
import { IoAddSharp } from "react-icons/io5";

export default function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                name="input"
                placeholder="Add some todo's"
                value={props.input}
                onChange={props.handleChange}
            />
            <button className="form-btn">
                <IoAddSharp />
            </button>
            <select
                name="curOption"
                value={props.curOption}
                onChange={props.handleChange}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="unfinished">Unfinished</option>
            </select>
        </form>
    );
}
