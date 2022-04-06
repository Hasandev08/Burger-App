import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {

  const [user, setUser] = useState(null)
  
  const login = (email) => {
    localStorage.setItem('token', JSON.stringify(email))
    setUser(email)
  }

  useEffect(() => {
    const tempUser = localStorage.getItem('token')
    if (tempUser) {
      setUser(JSON.parse(tempUser))
    } else {
      setUser(null)
    }
  })

  const logout = () => {  
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar logout={logout} user={user} />
      <main className="container">
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} login={login} />} />
          <Route path="/signup" render={Signup} />
          <Route path="/" render={(props) => <Home {...props} user={user} />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
