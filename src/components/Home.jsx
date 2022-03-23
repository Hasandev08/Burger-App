import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [values, setValues] = useState([
    {
      name: "Lettuce",
    },
    {
      name: "Bacon",
    },
    {
      name: "Cheese",
    },
    {
      name: "Meat",
    },
  ]);

  return (
    <div className="burger-app">
      <div className="Burger">
        <div className="Burger-Top"></div>
        <p>No Ingredients Added</p>
        <div className="Burger-Bottom"></div>
      </div>
      <div className="app-functions">
        <p>
          Current Price: <b>$3.00</b>
        </p>
        <div className="App-ingredient">
          {values.map((item, index) => (
            <div key={index.toString()}>
              <div>
                <div className="ingredient">
                  <p>{item.name}</p>
                </div>
                <div className="less">
                  <button>Less</button>
                </div>
                <div className="more">
                  <button>More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="sign-up" disabled>
          SIGN UP TO ORDER
        </button>
      </div>
    </div>
  );
};

export default Home;
