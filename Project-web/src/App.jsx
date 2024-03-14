// import React, { createContext, useEffect, useState } from 'react'
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

// import Product from './Fetch Api.jsx/Product'
// import Cart from './Fetch Api.jsx/Cart'
// import Navbar from './Fetch Api.jsx/Navbar'
// import axios from 'axios'
// import Home from './Fetch Api.jsx/Home'
// const url = "https://fakestoreapi.com/products"

// export const FakeContext = createContext()

// // useContext - create , provide , useContext


// const App = () => {

//   const [data, setdata] = useState([])
//   const [cart, setcart] = useState([])
//   const [cartValue, setcartValue] = useState(0)

//   useEffect(()=>{
//     getData()
//   })

//   const getData = async () =>{
//     const response = await axios.get(url)
//     setdata(response.data)
//   }


//   return (
//     <>

      

//     <Router>
//       <FakeContext.Provider value={{data,setdata,cart,setcart,cartValue,setcartValue}}>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/products' element={<Product/>} />
//         <Route path='/cart' element={<Cart/>} />
//       </Routes>
//       </FakeContext.Provider>
//     </Router>
//     </>
//   )
// }

// export default App

import {BrowserRouter , Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from "./todoapp/Home"
import User from "./todoapp/User"
import Form from "./todoapp/Form"
import UserDetails from "./todoapp/UserDetails"
import EditUser from "./todoapp/EditUser"







function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/user'>User</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
        <Route path="/editUser/:id" element={<EditUser/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App