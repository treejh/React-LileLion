const Hello = ({color, name, inSpecial}) => {
    return (
      <div style={{color}}>
        방가워{name}
        {inSpecial && <b>**</b>}
      </div>
    );
  };

  Hello.defaultProps ={
    color : "pink",
    name : "jihyun",
    isSpecial :false,
  }
  
  
  export default Hello;