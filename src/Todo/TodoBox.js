import { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoBox=()=>{
    
    const [todoList, setTodoList]= useState([
        {id :1, title:"리액트 공부하기"},
        {id :2, title:"스프링 공부하기"},
        {id :3, title:"커피 마시기"},
    ])

    //const id = useRef(todoList.length + 1);
    const id = userRef(Math.max(...todoList.map((todo)=>todo.id))+1);

    const addTodoList=(title)=>{
        console.log(title);
        /*const newTodo ={
            id : todoList.length+1,
            title
        }*/
        const newTodo = {
            id: id.current++,
            title: title,
        };
        setTodoList([...todoList,newTodo]);
        //id.current+=1;
        
    }

    
    return(
    <div>
        <TodoInput addTodo={addTodoList}/>
        <TodoList todoList={todoList} />
    </div>
    );
};

export default TodoBox;