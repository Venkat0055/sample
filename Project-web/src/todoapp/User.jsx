import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [user, setuser] = useState([]);
  const nav = useNavigate();
  const fetchData = async () => {
    const userData = await axios.get(
      "https://65f263ad034bdbecc764ad58.mockapi.io/userdata"
    );
    // console.log(userData.data)
    setuser(userData.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const viewUser = (id) => {
    nav(`/user/${id}`);
  };
  const deleteUser = (id) => {

    axios.delete("https://65f263ad034bdbecc764ad58.mockapi.io/userdata"+id);
    // setuser([])
    alert("user Deleted")
    fetchData()
  };

  const handleCreate = () =>{
    nav('/form')
  }
  const updateUser = (id) =>{
    nav(`/editUser/${id}`)
  }
  return (
    <>
      <h1>userDetails</h1>
      <button onClick={handleCreate}> Create New User </button>
      <div>
        <table>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {user.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.Name}</td>
                <td>{e.EmailId}</td>
                <td>{e.MobileNumber}</td>
                <td>
                  <button onClick={() => viewUser(e.id)}>View</button>
                  <button onClick={() => updateUser(e.id)}>Update</button>
                  <button onClick={() => deleteUser(e.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;



