import React, { useState } from "react";
import "./Login.css";

const Login = ({ login }) => {
  const [values, setValues] = useState([
    {
      name: "email",
      placeholder: "Email-Address",
      value: "",
      errorMessage: "",
    },
    {
      name: "password",
      placeholder: "Password",
      value: "",
      errorMessage: "",
    },
  ]);

  const handleChange = (value, index) => {
    const tempValues = [...values];
    tempValues[index].value = value;
    setValues(tempValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validator(values);
    login(values[0].value)
  };

  const validator = (values) => {
    const tempValues = [...values];

    if (values[0].value.length === 0) {
      tempValues[0].errorMessage = "Username is required";
      setValues(tempValues);

    } else {
      tempValues[0].errorMessage = " ";
    }

    if (values[1].value.length === 0) {
      tempValues[1].errorMessage = "Password is required";
      setValues(tempValues);
    } else if (values[1].value.length < 6) {
      tempValues[1].errorMessage = "WEAK_PASSWORD: Password should be atleast 6 characters";
      setValues(tempValues);
    } else {
      tempValues[1].errorMessage = " ";
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        {values.map((item, index) => (
          <div key={index.toString()} >
            <div>
              <label htmlFor={item.name}></label>
              <input
                className="form-input"
                type={item.name}
                name={item.name}
                onChange={(e) => handleChange(e.target.value, index)}
                placeholder={item.placeholder}
              />
            </div>
            {
              item.error ? <p>{item.errorMessage}</p> : null
            }

          </div>
        ))}
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default Login;
