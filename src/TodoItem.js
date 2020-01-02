import React from "react"

function TodoItem(props) {
   
    
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            
            <p style={{textDecoration: props.item.completed  && 'line-through'}}>{props.item.text}</p>
           
        </div>
        
    )
}

export default TodoItem