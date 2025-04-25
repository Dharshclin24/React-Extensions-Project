


function Button({clickHandler, id, text}) {

  
  return (
    <>
      <button onClick={()=>clickHandler(id)}>{text}</button>
    
    </>
  );
}
export default Button;
