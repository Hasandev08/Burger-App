import React, { useState } from "react"
import Burger from "./common/Burger"
import { Link } from "react-router-dom"
import SignupForm from "./SignupForm"
import "./Signup.css"

const Signup = () => {

    const [showForm, setShowForm] = useState(false)

    return (
        <div className="signup">
            <h1>We hope it tastes well!</h1>
            <Burger />
            <div className="buttons">
                <button className="Danger">
                    <Link className="danger-button" to="/">Cancel</Link>
                </button>
                <button onClick={() => setShowForm(true)} className="Success">Continue</button>

                {
                    showForm ? <SignupForm /> : null
                }

            </div>
        </div>
    );
}

export default Signup;
