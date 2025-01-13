const butStyle={
    color: "white",
    background: "teal",
    padding: ".375rem .75rem",
    margin: ".5rem",
    border: "1px solid teal",
}

const MyButton = (props)=>{

    return <button style={butStyle} onClick={props.clickHandler}>
            {props.title}
        </button>
    
}

export default MyButton;