import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
    const [values, setValues] = useState([
        {
            name: "text",
            placeholder: "Your Name",
            errormessage: "",
        },
        {
            name: "text",
            placeholder: "Street",
            errormessage: "",
        },
        {
            name: "text",
            placeholder: "Zipcode",
            errormessage: "",
        },
        {
            name: "text",
            placeholder: "Country",
            errormessage: "",
        },
        {
            name: "email",
            placeholder: "E-mail",
            errormessage: "",
        },
    ]);

    const handleSubmit = (e) => {
        e.preventdefault();
    }

    return (
        <div className="form">
            <h4>Enter your Contact Data</h4>
            <form>
                {values.map((item, index) => (
                    <div key={index.toString()}>
                        <input
                            className="input"
                            type={item.name}
                            placeholder={item.placeholder}
                        />
                    </div>
                ))}
                <select id="dropdown" name="dropdown">
                    <option value="Fastest">Fastest</option>
                    <option value="Cheapest">Cheapest</option>
                </select>
                <button className="Success" onSubmit={handleSubmit}>ORDER</button>
            </form>
        </div>
    );
}

export default SignupForm;