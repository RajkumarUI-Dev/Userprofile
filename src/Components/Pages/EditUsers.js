import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
const url="http://localhost:3000/artists";
const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name:'',
    bio:'',
    genre:'',
    Contact:''
  });

  const { name, bio, genre, Contact} = user;
  const HandleInputChnage = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    fetch(`${url}/${id}`,{
        method:'PUT',
        headers:{
            'Accept':'Application/json',
            'Content-Type':'Application/json'
        },
        body:JSON.stringify(user)
    })
    history.push("/");
  };

  const loadUser = async () => {
    fetch(`${url}/${id}`,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            setUser(data)
        })
  };
  return (
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  Edit User
                </div>
                <form onSubmit={e => handleSubmit(e)}>
                <div className="panel-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"
                           name="name"
                           value={name}
                           onChange={e => HandleInputChnage(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Bio Graphy</label>
                        <input type="text" className="form-control"
                           name="bio"
                           value={bio}
                           onChange={e => HandleInputChnage(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input type="text" className="form-control"
                         name="genre"
                         value={genre}
                         onChange={e => HandleInputChnage(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control"
                           name="Contact"
                           value={Contact}
                           onChange={e => HandleInputChnage(e)}
                        />
                    </div>
                    <button className="btn btn-success">
                         Submit
                    </button>
                    <span></span>
                    </div>
                </form>
                </div>
                <Link className="btn btn-primary" to="/">
                       back to Home
                </Link>
        </div>
    )
};

export default EditUser;
