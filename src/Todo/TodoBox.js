import { useRef, useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";

const TodoBox=()=>{
    
    const [todoList, setTodoList]= useState([
        //{id :1, title:"리액트 공부하기"},
        //{id :2, title:"스프링 공부하기"},
        //{id :3, title:"커피 마시기"},
    ])

    useEffect(() => {
        //백엔드 서버에서 todoList를 가져오는 함수를 구현..
        // 동기 vs 비동기
        async function getTodos() {
          const result = await axios.get("http://localhost:1577/api/todos");
          setTodoList(result.data);
        }
    
        getTodos();
      }, []);

    //const id = useRef(todoList.length + 1);
    const id = useRef(Math.max(...todoList.map((todo)=>todo.id))+1);

    const addTodoList=(title)=>{
        /*const newTodo ={
            id : todoList.length+1,
            title
        }*/
        const newTodo = {
        title:title,
        };
        //setTodoList([...todoList,newTodo]);
        //id.current+=1;  


        async function addTodo(todo) {
            axios.post("http://localhost:1577/api/todos", todo); //서버에 새로운 Todo저장
      
            const result = await axios.get("http://localhost:1577/api/todos"); //서버에서  todoList를 얻어옴.
            setTodoList(result.data);
        }
        addTodo(newTodo);
    };

    //삭제
    const deleteTodoList =(id) =>{
        //const deleteList = todoList.filter((todo)=>todo.id!==id);
        //setTodoList(deleteList);

        //setTodoList(todoList.filter((todo)=>todo.id!==id));

        //서버사용 
        async function deleteTodo(id) {
            await axios.delete(`http://localhost:1577/api/todos/${id}`);
      
            const result = await axios.get("http://localhost:1577/api/todos"); //서버에서  todoList를 얻어옴.
            setTodoList(result.data);
          }
      
          deleteTodo(id);

    }
    
    //수정
    const updateTodoList =(todo) =>{
       
       /*//리랜더링이 필요 없다면 
        todoList.map((item)=> {
            if(todo.id===item.id){
                item.title = todo.title;
            }
        });*/

         /*//수정 후 리렌더링이 일어나야 한다면.
         const updateTodoList = todoList.map((item) =>
           item.id === todo.id ? { ...item, title: todo.title } : item
         );
         setTodoList(updateTodoList);*/

         //api 서버를 이용해서  수정하기.
    async function updateTodo(todo) {
        await axios.patch("http://localhost:1577/api/todos", todo);
  
        const result = await axios.get("http://localhost:1577/api/todos"); //서버에서  todoList를 얻어옴.
        setTodoList(result.data);
      }
  
      updateTodo(todo);

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