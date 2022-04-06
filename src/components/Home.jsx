import React, { useState } from "react";
import Burger from "./common/Burger";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ user }) => {
  const [values, setValues] = useState([
    {
      name: "Lettuce",
      price: 0.5,
      quantity: 0,
    },
    {
      name: "Bacon",
      price: 0.7,
      quantity: 0,
    },
    {
      name: "Cheese",
      price: 0.4,
      quantity: 0,
    },
    {
      name: "Meat",
      price: 1.3,
      quantity: 0,
    },
  ]);

  const [price, setPrice] = useState(3);

  const handleAddition = (index) => {
    const tempValues = [...values]
    tempValues[index].quantity = tempValues[index].quantity + 1
    setValues(tempValues)
    setPrice(price + tempValues[index].price)
  }
  const handleSubtraction = (index) => {
    const tempValues = [...values]
    tempValues[index].quantity = tempValues[index].quantity - 1
    setValues(tempValues)
    setPrice(price - tempValues[index].price)
  }

  return (
    <div className="burger-app">
      <Burger values={values} />
      <div className="app-functions">
        <p>
          <div>
            Current Price: <b>${price.toFixed(2)}</b>
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
                  <button onClick={() => handleAddition(index)}>
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="sign-up">

          {user ? <Link className="link" to="/signup">ORDER NOW</Link>
            : <Link className="link" to="/signup">SIGN UP TO ORDER</Link>}

        </button>
      </div>
    </div>
  );
};

export default Home;
