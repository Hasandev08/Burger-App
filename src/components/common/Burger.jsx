import React from "react"
import "./Burger.css"

const Burger = ({ values }) => {

    const ingredientExist = values.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <div className="app">
            <div className="Burger">
                <div className="Burger-Top"></div>
                {values.map(item =>
                    [...Array(item.quantity)].map((ingr) => (
                        <p>{item.name}</p>
                    ))
                )}

                {!ingredientExist ? <p>No Ingredients Added</p> : null}

                <div className="Burger-Bottom"></div>
            </div>
        </div>
    );
}

export default Burger;