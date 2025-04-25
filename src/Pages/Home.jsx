import { useState, useEffect } from "react";
import data from "../Data/Data.js";
import Card from "../Components/Card.jsx";
import Button from "../Components/Buttons.jsx";

function Home() {
  const [upData, setUpData] = useState(data);
  //const [actButt, setActButt] = useState("active");
  const [filter, setFilter] = useState("all");

  function removeItem(id) {
    let newArray = [];
    upData.map((item) => {
      if (id !== item.id) {
        newArray.push(item);
      }
    });
    setUpData(newArray);
  }
  function updateIsActive(id, newIsActive) {
    console.log(id, newIsActive);
    const updatedData = upData.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: newIsActive };
      }
      return item;
    });
    setUpData(updatedData);
  }

  const filteredData = upData.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return item;
  });
  //you want to make a filter that when the user clicks the "active" button, all of the objects that have a value of item.isActive === false are filtered out

  return (
    <>
  
      <div className="topLogo"></div>
      <img src={logo} alt="logoPic" />
      <h1>Extensions List</h1>

      <div className="topButtons">
        {/* //render three buttons, each with a text attribute. One has a value of "active", one of "inactive", and "All" */}
        <ul>
          <div className="activeButt">
            <li>
              <Button
                clickHandler={() => {
                  setFilter("active");
                }}
                text="Active"
              />
            </li>
          </div>
          <div className="inactiveButt">
            <li>
              <Button
                clickHandler={() => {
                  setFilter("inactive");
                }}
                text="Inactive"
              />
            </li>
          </div>
          <div className="allButt">
            <li>
              <Button
                clickHandler={() => {
                  setFilter("all");
                }}
                text="All"
              />
            </li>
          </div>
        </ul>
      </div>

      <div className="card-wrapper">
        {filteredData.map((item, key) => {
          return (
            <Card
              logo={item.logo}
              id={item.id}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
              clickHandler={removeItem}
              updateIsActive={updateIsActive}
              key={key}
            />
          );
        })}
      </div>
    </>
  );
}
export default Home;

/*

{arrayName.map((item, key) => {
    return(
      <div key={key}>{item.title}</div>
    )
  })}

*/
