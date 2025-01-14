import { useState } from "react";
import Todo from "./Todo";

const TodoList=({todoList, deleteHandler})=>{

    return(
    
    <ul>
       { todoList.map((todo)=>(
                <li key={todo.id}>
                    <Todo todo={todo} deleteHandler={deleteHandler}/></li>
            
       ))
        }
            
     </ul>
    );
};

export default TodoList;