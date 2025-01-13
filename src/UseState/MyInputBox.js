const MyInputBox=()=>{
    //text에 들어갈 값

    const text="기본값";
    const resetHandler =()=>{
        alert("reset 버튼을 클릭하셨습니다.");
    }
    return(
    <div>
        <label>{text}</label><br></br>
        <input type="text" value={text}/>

        <button onClick={resetHandler}>RESET</button>
    </div>
    );

};

export default MyInputBox;