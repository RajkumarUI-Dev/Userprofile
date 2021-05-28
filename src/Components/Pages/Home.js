import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:3000/artists";
const Home = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      fetch(url,{method:"GET"})
      .then((res) => res.json())
      .then((data) => {
          setUser(data);
      })
     
    };
  
    const deleteUser = async id => {
      fetch(`${url}/${id}`,{method:"PUT"})
      .then((res) => res.json())
      loadUsers();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.Contact}</td>
                  <td><div>
                      <img className="img" src={`/public/images/covers/${user.cover}.jpg`}/>
                      </div>
                  </td>
                  <td>
                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Home;