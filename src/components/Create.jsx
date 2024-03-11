import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65ec22c80ddee626c9afa2b3.mockapi.io/crud", {
        name: name,
        age: age,
        email: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="mb-2 mt-2">
          <Link git to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="p-4 text-center">
          <h1>Create Date</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nameInp">Enter Name:</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              id="nameInp"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ageInp">Enter Age:</label>
            <input
              type="number"
              placeholder="Age"
              className="form-control"
              id="ageInp"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailInp">Enter Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="emailInp"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="d-grid">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
