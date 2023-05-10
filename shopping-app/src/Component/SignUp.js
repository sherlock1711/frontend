import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Signup(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [role, setrole] = useState("");

  function first(params) {
    setfirstName(params.target.value);
  }
  function last(params) {
    setlastName(params.target.value);
  }
  function pass(params) {
    setpassword(params.target.value);
  }
  function cpass(params) {
    setcpassword(params.target.value);
  }
  function em(params) {
    setemail(params.target.value);
  }
  function mob(params) {
    setmobile(params.target.value);
  }
  function user(params) {
    setusername(params.target.value);
  }
  function ro(params) {
    setrole(params.target.value);
  }

  var jsonData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    userName: username,
    password: password,
    confirmPassword: cpassword,
    contactNumber: mobile,
    role: role,
  };
  function handleClick(e) {
    e.preventDefault();
   
    fetch("http://localhost:8081/api/v1.0/shopping/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(jsonData),
    });
  }
  return (
    <div className="container">
      <div className="signup-form">
        <form onSubmit={handleClick} method="post">
          <h2 style={{textAlign: "center", backgroundColor: "grey"}}>Register</h2>
          <p className="hint-text"> </p>
            <div className="text-center">
            <img
                  src="https://cdn-icons-png.flaticon.com/512/5455/5455873.png"
                  
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />    
            </div>
           <p>Create your account now </p>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="First Name"
                  required="required"
                  onChange={first}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Last Name"
                  required="required"
                  onChange={last}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={em}
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="user"
              placeholder="username"
              onChange={user}
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={pass}
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={cpass}
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              name="number"
              placeholder="Mobile Number"
              onChange={mob}
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="role"
              placeholder="Role"
              onChange={ro}
              required="required"
            />
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-color px-5 mb-5 w-100">
              Register Now
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {};

export default Signup;
