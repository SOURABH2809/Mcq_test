import React from 'react'
import "./Navbar.css"
import { useEffect, useState } from 'react'


const Navbar = () => {
 
   const [sticky, setSticky] = useState(false);

   useEffect(()=>{window.addEventListener("scroll",()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);

   })
  },[]);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MCQ TEST PLATFORM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Select Topic</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>   
  )
}

export default Navbar