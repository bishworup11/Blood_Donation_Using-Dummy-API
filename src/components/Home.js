import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

export default function Home({ searchText }) {
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState("https://dummyjson.com/users");

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      let data = await response.json();
      let filteredUsers = data.users; //  set users to all data
      if (searchText !== undefined && searchText.trim() !== "") {
       

        const regex = new RegExp(searchText, 'i'); // 'i' for case-insensitive search
        
        // partial name match
        filteredUsers = data.users.filter(user => {
          let fullName = user.firstName + (user.maidenName || '') + user.lastName;
          let city=user.address.city;
          return regex.test(city);
        });

        filteredUsers = filteredUsers.sort((a, b) => {
          let fullNameA = a.firstName + (a.maidenName || '') + a.lastName;
          let fullNameB = b.firstName + (b.maidenName || '') + b.lastName;
          if (fullNameA !== fullNameB) {
            return fullNameA.localeCompare(fullNameB); 
          } else {
            return a.email.localeCompare(b.email); 
          }
        });

      }
      
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  
  useEffect(() => {
   
    fetchData();
  }, [searchText]); 

  return (
    <>
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
          </ol>
        </nav>
        {/* /Breadcrumb */}
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
          {users && users.map((element) => (
            <div className="col" key={element.id}>
              <UserCard props={element} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
