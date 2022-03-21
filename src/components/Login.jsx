import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validator(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);

  const validator = (values) => {
    const error = {};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      error.email = "Please enter a valid username";
    }
    if (!values.password) {
      error.password = "Please enter a valid password";
    } else if (values.password.length < 6) {
      error.password = "WEAK_PASSWORD: Password should be atleast 6 characters";
    }

    return error;
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-inner">
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            placeholder="E-mail Address"
          />
        </div>
        <p>{errors.email}</p>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <p>{errors.password}</p>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default Login;
