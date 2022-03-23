import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState([
    {
      name: "email",
      placeholder: "Enter Email",
      value: "",
      error: false,
      errorMessage: "",
    },
    {
      name: "password",
      placeholder: "Enter Password",
      value: "",
      error: false,
      errorMessage: "",
    },
  ]);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (value, index) => {
    const tempValues = [...values];
    tempValues[index].value = value;
    validator(tempValues);
    setValues(tempValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validator(values);

    setIsSubmit(true);
  };

  const validator = (values) => {
    const tempValues = [...values];

    if(values[0].value.length === 0){
      tempValues[0].error = true;
      tempValues[0].errorMessage = "Username is required";
      setValues(tempValues);
      return;
    } else {
        tempValues[0].errorMessage = " ";
    }

    if(values[1].value.length === 0){
      tempValues[1].error = true;
      tempValues[1].errorMessage = "Password is required";
      setValues(tempValues);
      return;
    } else if(values[1].value.length < 6){
      tempValues[1].error = true;
      tempValues[1].errorMessage = "WEAK_PASSWORD: Password should be atleast 6 characters";
      setValues(tempValues);
      return;
    } else {
      tempValues[1].errorMessage = " ";
    }
  }

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        {values.map((item, index) => (
          <div key={index.toString()} >
            <div>
              <label htmlFor={item.name}></label>
              <input
                type={item.name}
                name={item.name}
                id={item.name}
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
