import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Swal from "sweetalert2";

function Edit() {
    const navigate = useNavigate();
    const [id , setId] = useState(0);
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [age , setAge] = useState(0);
    const [email , setEmail] = useState("");
    const [depart , setDepart] = useState("");

    const departmentOptions = [
        { label: "Development", value: "Development" },
        { label: "Testing", value: "Testing" },
        { label: "Marketing", value: "Marketing" },
        { label: "Human Resources", value: "Human Resources" },
        { label: "Management", value: "Management" },
      ];

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`https://65ec22c80ddee626c9afa2b3.mockapi.io/crud/${id}`,{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            depart: depart
        }).then(() => {
            navigate("/");
        }).catch((error) => {
            Swal.fire({
                title: "Oops!",
                text: `${error.message}`,
                icon: "error"
              })
        })
    }

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setFirstName(localStorage.getItem("first_name"));
        setLastName(localStorage.getItem("last_name"));
        setAge(localStorage.getItem("age"));
        setEmail(localStorage.getItem("email"));
        setDepart(localStorage.getItem("depart"));
    }, [])

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
      <div className="mt-3 p-3 text-center">
          <h1>Update Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="firstNameInp">First Name:</label>
            <input
              type="text"
              placeholder="Ali"
              className="form-control mt-1"
              id="firstNameInp"
              value={firstName}
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
              value={lastName}
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
              value={age}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="departInp">Department:</label>
            <select
              className="form-control mt-1"
              id="departInp"
              onChange={(e) => setDepart(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              {departmentOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="d-grid gap-2">
            <input
              type="submit"
              value="Update Date"
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
  )
}

export default Edit
