import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({props}) {

  return (
    <div>
        
      <div className="card m-2" style={{width: "18rem"}}>
        <img  src={props.image} className="card-img-top bg-success p-2 text-dark bg-opacity-10" alt="..." />
        <div className="card-body">
        <Link to={`/${props.id}`} style={{textDecoration: 'none'}} className="card-link">
        <h5 className="card-title">{props.firstName} {props.maidenName} {props.lastName}</h5>
          </Link>
          
          <p className="card-text">
            Address: {props.address.address},{props.address.city},{props.address.state}
          </p>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Blood Group: {props.bloodGroup}</li>
          <li className="list-group-item">Email: {props.email}</li>
          <li className="list-group-item">Phone: {props.phone}</li>
          <li className="list-group-item">Company: {props.company.name}</li>
        </ul>
        <div className="card-body">
          <Link to={`/${props.id}`} className="card-link">
            Details
          </Link>
          
        </div>
      </div>
    </div>
  );
}
