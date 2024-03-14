

import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [userDetails, setUserDetails] = useState({
    Name: "",
    EmailId: "",
    MobileNumber: "",
  });

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    if (editIndex > -1) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = userDetails;
      setUsers(updatedUsers);
      setEditIndex(-1);
    } else {
      setUsers([...users, userDetails]);
    }
    setUserDetails({ Name: "", EmailId: "", MobileNumber: "" });
  };

  const handleEditUser = (index) => {
    setUserDetails(users[index]);
    setEditIndex(index);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <div className="input-container">
        <h2>TODO</h2>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={userDetails.Name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="EmailId"
          placeholder="Email"
          value={userDetails.EmailId}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="MobileNumber"
          placeholder="Mobile Number"
          value={userDetails.MobileNumber}
          onChange={handleChange}
        />
        <button onClick={handleAddUser}>
          {editIndex > -1 ? "Update User" : "Add User"}
        </button>
      </div>

      <div className="user-details-container">
        <h2>User Details</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.EmailId}</td>
                <td>{user.MobileNumber}</td>
                <td>
                  <button onClick={() => handleEditUser(index)}>Edit</button>
                  <button onClick={() => handleDeleteUser(index)}>
                    Delete
                  </button>
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
