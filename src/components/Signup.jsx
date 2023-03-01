import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../css/Signup.css';
export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword,setConfirmPassword] = useState();

  return (
    <div>
      <div className="container">
        <form action="" className="form signup">
          <h2>Sign Up</h2>
          <div className="inputFields">
            <input
              type="text"
              value={firstName}
              required="required"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <span>first name</span>
          </div>
          <div className="inputFields">
            <input
              type="text"
              value={lastName}
              required="required"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <span>last name</span>
          </div>
          <div className="inputFields">
            <input
              type="email"
              value={email}
              required="required"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <span>email</span>
          </div>
          <div className="inputFields">
            <input type="password" required="required" onChange={() => {}} />
            <span>password</span>
          </div>
          <div className="inputFields">
            <input
              type="password"
              value={password}
              required="required"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <span>confirm password</span>
          </div>
          <div className="inputFields">
            <input type="submit" />
          </div>
          <p>
            Already a member ?
            <Link to="/signin" className="login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
