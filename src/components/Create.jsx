import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Swal from "sweetalert2";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [depart, setDepart] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65ec22c80ddee626c9afa2b3.mockapi.io/crud", {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        depart: depart
      })
      .then(() => {
        Swal.fire({
          title: "Done!",
          text: "Your Data has been submitted.",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Go Home",
          cancelButtonText: "Ok"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="mt-3 p-3 text-center">
          <h1>Add Employee</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="firstNameInp">First Name:</label>
            <input
              type="text"
              placeholder="Ali"
              className="form-control mt-1"
              id="firstNameInp"
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="lastNameInp">Last Name:</label>
            <input
              type="text"
              placeholder="Ahmed"
              className="form-control mt-1"
              id="lastNameInp"
              onChange={(e) => setLastName(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="ageInp">Age:</label>
            <input
              type="number"
              placeholder="21"
              className="form-control mt-1"
              id="ageInp"
              onChange={(e) => setAge(e.target.value)}
              required
              min="18"
              max="60"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="emailInp">Email:</label>
            <input
              type="email"
              placeholder="ali@example.com"
              className="form-control mt-1"
              id="emailInp"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="departInp">Department:</label>
            <input
              type="text"
              placeholder="Development"
              className="form-control mt-1"
              id="departInp"
              onChange={(e) => setDepart(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <br />
          <div className="d-grid gap-2">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
            <input
              type="button"
              value="Return Home"
              className="btn btn-outline-secondary"
              onClick={() => {
                navigate("/")
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
