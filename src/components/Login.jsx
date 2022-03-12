import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <form action="">
      <div className="form-inner">
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail Address"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default Login;
