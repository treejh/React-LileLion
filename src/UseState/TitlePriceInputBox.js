import { useState } from "react";

const TitlePriceInputBox=()=>{

    //useState의 초기값을 객체로 설정해준다.

    const [inputs,setInputs] = useState({
        title :"pen",
        price:"2000"
    });

    const {title,price} = inputs;
    const changeHandler =(e) =>{
        const{name, value} = e.target;
        //새롭게 객체를 만들어서 기존 값은 유지하고, 바뀐 값은 바꿔서 

        setInputs({
            ...inputs,
            [name]:value,
        });
    }


    return(
        <div>
            <label> title : {title} </label>
            <br></br>
            <label> price : {price}</label>
            <br/>
            제목 : <input type="text" placeholder="제목을 입력하세요" name = "title" value={title} onChange={changeHandler}/><br/>
            가격 : <input type="text" placeholder="가격을 입력하세요: " name = "price" value = {price} onChange={changeHandler}/><br/>
            <button>RESET</button>
            

        </div>
    )
}

export default TitlePriceInputBox;