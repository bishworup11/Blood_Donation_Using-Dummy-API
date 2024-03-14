import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      let url = `https://dummyjson.com/users/${id}`;

      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();

      setUser(data); // Assuming the array of users is under the key 'users'
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    user && (
      <div>
        <div className="container">
          <div className="main-body">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="main-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav>
            {/* /Breadcrumb */}

            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={user.image}
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>
                          {user.firstName} {user.lastName}
                        </h4>
                        <p className="text-secondary mb-1">
                          {user.company && user.company.title}
                        </p>
                        <p className="text-muted font-size-sm">
                          {user.company && user.company.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.firstName} {user.maidenName} {user.lastName}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">bloodGroup</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.bloodGroup}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.email}
                      </div>
                    </div>
    
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.phone}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">University</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.university}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.address && user.address.address},
                        {user.address && user.address.city},
                        {user.address && user.address.state}
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
