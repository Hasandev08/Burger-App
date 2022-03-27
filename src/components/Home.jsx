import React, { useState } from "react";
import Burger from "./Burger";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const values = [
    {
      name: "Lettuce",
      price: 0.5,
    },
    {
      name: "Bacon",
      price: 0.7,
    },
    {
      name: "Cheese",
      price: 0.4,
    },
    {
      name: "Meat",
      price: 1.3,
    },
  ];

  const [price, setPrice] = useState(3);

  const handleAddition = (ingrPrice) => setPrice(price + ingrPrice);
  const handleSubtraction = (ingrPrice) => setPrice(price - ingrPrice);

  return (
    <div className="burger-app">
      <Burger />
      <div className="app-functions">
        <p>
          <div>
            Current Price: <b>${price}</b>
          </div>
        </p>
        <div className="App-ingredient">
          {values.map((item, index) => (
            <div key={index.toString()}>
              <div>
                <div className="ingredient">
                  <p>{item.name}</p>
                </div>
                <div className="less">
                  <button
                    onClick={() => handleSubtraction(item.price)}
                  >
                    Less
                  </button>
                </div>
                <div className="more">
                  <button onClick={() => handleAddition(item.price)}>
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="sign-up">
          <NavLink className="nav-link" to="/signup">SIGN UP TO ORDER</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Home;
