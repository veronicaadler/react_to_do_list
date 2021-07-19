import react from "react"

function ToDoItem(props) {

    return (
        <div>
        <label for={props.item.for}>{props.item.text}</label>
        <input 
            type="checkbox" 
            id={props.item.for}
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)} />
        </div>
    )

}

export default ToDoItem;