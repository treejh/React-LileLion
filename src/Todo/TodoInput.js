const TodoInput=({addTodo})=>{

    const keyDownHandler=(e) =>{
        console.log(e.key);
        if(e.key==="Enter"){
            //엔터가 입력되면, 이 e.target.vaule 값이 todolist에 저장되어야 한다.
            //공백은 저장되지 않게 해야한다. 
            if(e.target.value===""){
                return;
            }
            //addTodoList에 받은 값을 넘겨보내준다. 
            addTodo(e.target.value);
            e.target.value="";
            e.target.focus();
            
        }

    };

    return(
    <div>
       
        
    <input type="text" placeholder="할일을 입력하세요" onKeyUp={keyDownHandler}/>
    </div>
    
    
    );

};

export default TodoInput;