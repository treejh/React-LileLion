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
    const id = useRef(Math.max(...todoList.map((todo)=>todo.id))+1);

    const addTodoList=(title)=>{
        /*const newTodo ={
            id : todoList.length+1,
            title
        }*/
        const newTodo = {
            id: id.current++,
            title,
        };
        setTodoList([...todoList,newTodo]);
        //id.current+=1;  
    };

    //삭제
    const deleteTodoList =(id) =>{
        const deleteList = todoList.filter((todo)=>todo.id!==id);
        setTodoList(deleteList);

        //setTodoList(todoList.filter((todo)=>todo.id!==id));

    }
    
    //수정
    const updateTodoList =(todo) =>{
       
       //리랜더링이 필요 없다면 
        todoList.map((item)=> {
            if(todo.id===item.id){
                item.title = todo.title;
            }
        });

         /*//수정 후 리렌더링이 일어나야 한다면.
         const updateTodoList = todoList.map((item) =>
           item.id === todo.id ? { ...item, title: todo.title } : item
         );
         setTodoList(updateTodoList);*/

    };

    
    return(
    <div>
        <TodoInput addTodo={addTodoList}/>
        <TodoList
        todoList={todoList}
        deleteHandler={deleteTodoList}
        updateHandler={updateTodoList}
      />
    </div>
    );
};

export default TodoBox;