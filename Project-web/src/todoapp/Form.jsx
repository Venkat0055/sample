// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Form = () => {
//   const [name, setname] = useState("");
//   const [email_id, setemail_id] = useState("");
//   const [mobile_number, setmobile_number] = useState("");

//   const nav = useNavigate()

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const userDetails = {
//       name: name,
//       email_id: email_id,
//       mobile_number: mobile_number,
//     };
//     try {
//       axios.post(
//         "https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users",
//         userDetails
//       ).then((resp)=>alert("user Created"))
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleBack = () =>{
//     nav('/user')
//   }

//   return (
//     <>
//       <h1>Create User</h1>
//       <div>
//         <form onSubmit={handleCreate}>
//           <label>Name : </label>
//           <input
//             name="name"
//             id="name"
//             value={name}
//             onChange={(e) => setname(e.target.value)}
//             type="text"
//             required
//           />

//           <br />
//           <br />
//           <label>Email : </label>
//           <input
//             name="email"
//             id="email"
//             required
//             value={email_id}
//             onChange={(e) => setemail_id(e.target.value)}
//             type="email"
//           />
//           <br />
//           <br />
//           <label>Mobile : </label>
//           <input
//             name="mobile_number"
//             id="mobile_number"
//             required
//             value={mobile_number}
//             onChange={(e) => setmobile_number(e.target.value)}
//             type="tel"
//           />
//           <br />
//           <br />
//           <button>Create</button>
//         </form>
//         <button onClick={handleBack}>Back to Userpage</button>
//       </div>
//     </>
//   );
// };

// export default Form;




import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const userDetails = {
      name: name,
      email: email,
      mobile_number: mobileNumber,
    };
    try {
      await axios.post(
        "https://65f263ad034bdbecc764ad58.mockapi.io/userdata",
        userDetails
      );
      alert("User Created");
      setName("");
      setEmail("");
      setMobileNumber("");
    } catch (error) {
      setErrorMessage("Error creating user. Please try again.");
    }
  };

  const handleBack = () => {
    nav('/user');
  };

  return (
    <>
      <h1>Create User</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        <form onSubmit={handleCreate}>
          <label>Name : </label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
          <br />
          <br />
          <label>Email : </label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <br />
          <br />
          <label>Mobile : </label>
          <input
            name="mobileNumber"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            type="tel"
            required
          />
          <br />
          <br />
          <button type="submit">Create</button>
        </form>
        <button onClick={handleBack}>Back to User Page</button>
      </div>
    </>
  );
};

export default Form;
