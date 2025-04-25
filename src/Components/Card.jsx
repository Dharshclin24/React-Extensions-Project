import Buttons from "../Components/Buttons.jsx";
import MyToggle from "./MyToggle.jsx";
import { useState } from "react";
import "../App.css";

function Card({
  id,
  logo,
  name,
  description,
  clickHandler,
  updateIsActive,
  isActive,
}) {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    updateIsActive(id, nextChecked);
    setChecked(nextChecked);
  };
  return (
    <>
      <div className="dataCard">
        <img src={logo} />
        <p>{name} </p>
        <p>{description}</p>

        <Buttons 
          clickHandler={clickHandler} 
          id={id} 
          text="Remove"
        />

        <MyToggle
          // checked={checked}
          handleChange={handleChange}
          isActive={isActive}
        />
      </div>
    </>
  );
}
export default Card;
