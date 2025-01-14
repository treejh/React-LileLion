import { useState } from "react";
import Todo from "./Todo";

const TodoList=({todoList, deleteHandler, updateHandler })=>{

    return(
    
    <ul>
       { todoList.map((todo)=>(
                <li key={todo.id}>
                    <Todo todo={todo} deleteHandler={deleteHandler} updateHandler={updateHandler}/></li>
            
       ))
        }
            
     </ul>
    );
};

export default TodoList;