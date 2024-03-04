import React from 'react'
import "../styles/nav.scss";
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='nav'>
        <p>ANSHUL😂</p>

        <ul>
            <a href={"#home"}>HOME</a>
            <a href={"#skill"}>SKiLLS</a>
            <a href='#project'>PROJECTS</a>
            <a href='#about'>ABOUT</a>
        </ul>

        <p>CONTACT US.</p>
    </div>
  )
}

export default Nav