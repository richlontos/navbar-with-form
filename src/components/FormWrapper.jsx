import React, { useState } from 'react';



const FormWrapper = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        newUser.firstName > 1 ? setHasBeenSubmitted(true) : setHasBeenSubmitted(false)
        console.log("Welcome", newUser.firstName);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const dropdown = (e) => {
        console.log(e.target.value);
    }

    const checkbox = (e) => {
        console.log(e.target.checkbox)
    }



    return (

        <div className='container'>
        
        
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }

                <div class="form-field d-flex align-items-center">
                    <span class="far fa-user"></span>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div>
                    {firstName.length > 0 && firstName.length < 2
                        ? "First name must be at least 2 characters."
                        : ""
                    }
                </div>
                <div class="form-field d-flex align-items-center">
                    <span class="far fa-user"></span>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setlastName(e.target.value)} />
                    <div>

                        {lastName.length > 0 && lastName.length < 2
                            ? "First name must be at least 2 characters."
                            : ""
                        }
                    </div>
                </div>
                <div class="form-field d-flex align-items-center">
                    <span class="far fa-user"></span>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <div>

                        {email.length > 0 && email.length < 2
                            ? "First name must be at least 2 characters."
                            : ""
                        }
                    </div>
                </div>
                <div class="form-field d-flex align-items-center">
                    <span class="fas fa-key"></span>

                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    <div>

                        {password.length > 0 && password.length < 2
                            ? "First name must be at least 2 characters."
                            : ""
                        }
                    </div>
                </div>
                <div class="form-field d-flex align-items-center">
                    <span class="fas fa-key"></span>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setconfirmPassword(e.target.value)} />
                    {password !== confirmPassword ? "Passwords do not match." : ""}

                </div>
                <div>
                    Favorit Language
                    <select onChange={dropdown}>
                        <option value="js> JavaScript"></option>
                        <option value="py> python"></option>
                        <option value="java> java"></option>
                    </select>
                </div>
                <div>
                    Job ready
                    <input type="checkbox" value={"click"} onChange={checkbox} />
                </div>
                <input type="submit" value="Create User"  class="btn mt-3" />
            </form>

        <div className='footer'>

            <h3>Your FormWrapper Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>

        </div>

        </div>
    );
};

export default FormWrapper;