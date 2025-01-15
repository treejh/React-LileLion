import { useState } from "react";
import Todo from "./Todo";

const TodoList=({todoList, deleteHandler, updateHandler })=>{

    const recentNoteList = [...todoList].sort((a,b) => new Date(b.createdAt) -new Date(a.createdAt) );
    return(
    
    <ul>
       { recentNoteList.map((todo)=>(
                <li key={todo.id}>
                    <Todo todo={todo} deleteHandler={deleteHandler} updateHandler={updateHandler}/></li>
            
       ))
        }
            
     </ul>
    );
};

export default TodoList;