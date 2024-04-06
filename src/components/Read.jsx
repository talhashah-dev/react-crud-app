import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Read() {
  const [apiData, setApiData] = useState([]);
  const [allUsers, setAllUsers] = useState();

  const getData = () => {
    axios
      .get("https://65ec22c80ddee626c9afa2b3.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
        setAllUsers(response.data.length);
      })
      .catch((error) => {
        Swal.fire({
            title: "Oops!",
            text: `${error.message}`,
            icon: "error"
          })
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://65ec22c80ddee626c9afa2b3.mockapi.io/crud/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Data has been deleted.", "success");
            getData();
          })
          .catch((error) => {
            Swal.fire({
                title: "Oops!",
                text: `${error.message}`,
                icon: "error"
              })
          });
      }
    });
  };

  const setToLocalStorage = (id, firstName, lastName, age, email, depart) => {
    localStorage.setItem("id", id)
    localStorage.setItem("first_name", firstName)
    localStorage.setItem("last_name", lastName)
    localStorage.setItem("age", age)
    localStorage.setItem("email", email)
    localStorage.setItem("depart", depart)
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12">
          <h1>Employee Managment Software</h1>
          <h6>All Employees: {allUsers}</h6>
          <hr />
          <div className="mb-2 mt-3 d-flex justify-content-between">
            <Link to="/create">
              <button className="btn btn-primary">Add Employee</button>
            </Link>
            <button type="button" className="btn btn-primary">Dark Mode</button>
          </div>
          {apiData.length === 0 ? (
            <div className="noData">
              <h1>NO DATA FOUND!</h1>
            </div>
          ) : (
            <table className="table table-bordered table-hover table-striped text-center justify-content-center">
              <thead>
                <tr>
                  <th>Emp ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.age}</td>
                      <td>{item.email}</td>
                      <td>{item.depart}</td>
                      <td>
                        <Link to={"/edit"}>
                        <button
                          className="btn btn-outline-secondary me-2"
                          onClick={() => setToLocalStorage(item.id, item.firstName, item.lastName, item.age, item.email, item.depart)}
                          >
                          Edit
                        </button>
                            </Link>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Read;
