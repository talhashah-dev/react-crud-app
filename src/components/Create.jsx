import React from 'react'

function Create() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="p-4 text-center">
            <h1>
                Create Date
            </h1>
        </div>
        <form>
           <div className="form-group">
              <label htmlFor="nameInp">Enter Name:</label>
              <input type="text" placeholder="Name" className="form-control" id="nameInp"/>
           </div>
           <div className="form-group">
              <label htmlFor="ageInp">Enter Age:</label>
              <input type="number" placeholder="Age" className="form-control" id="ageInp"/>
           </div>
           <div className="form-group">
              <label htmlFor="emailInp">Enter Email:</label>
              <input type="email" placeholder="Email" className="form-control" id="emailInp"/>
           </div>
           <br />
           <div className="d-grid">
           <input type="submit" value="Submit" className="btn btn-primary" />
           </div>
        </form>
      </div>
    </div>
  )
}

export default Create
