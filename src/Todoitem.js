import React from "react";

function ToDoItem(props) {
    const completedStyle = {
        color: "grey",
        textDecoration: "line-through"
    }

    return (
        <div>
        <label 
            style={props.item.completed ? completedStyle: null}
            for={props.item.for}>{props.item.text}</label>
        <input 
            type="checkbox" 
            id={props.item.for}
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)} />
        </div>
    )

}

export default ToDoItem;