import react from "react"

function ToDoItem(props) {

    return (
        <div>
        <label for={props.item.for}>{props.item.text}</label>
        <input type="checkbox" id={props.item.for} />
        </div>
    )

}

export default ToDoItem;