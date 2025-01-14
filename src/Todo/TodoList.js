import { useState } from "react";

const TodoList=({todoList})=>{

    return(
    
    <ul>
       { todoList.map((todo)=>(
                <li key={todo.id}>{todo.title}</li>
            
       ))
        }
            
     </ul>
    );
};

export default TodoList;