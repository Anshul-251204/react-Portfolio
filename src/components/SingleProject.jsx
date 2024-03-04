import React from 'react';
import "../styles/signleProject.scss"

const SingleProject = ({title,url}) => {
  return (
    <div className='singleProject'>
        <h1>{title}</h1>
        <img src={url} alt="" />
    </div>

  )
}

export default SingleProject