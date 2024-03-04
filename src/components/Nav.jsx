import React from 'react'
import "../styles/nav.scss";
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='nav'>
        <p>ANSHUL😂</p>

        <ul>
            <Link to={"/"}>HOME</Link>
            <Link to={"/skill"}>SKiLLS</Link>
            <Link>PROJECTS</Link>
            <Link>ABOUT</Link>
        </ul>

        <p>CONTACT US.</p>
    </div>
  )
}

export default Nav