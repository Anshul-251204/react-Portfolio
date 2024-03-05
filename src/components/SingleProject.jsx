import React from 'react';
import "../styles/signleProject.scss"
import { Link } from 'react-router-dom';

const SingleProject = ({title,url}) => {
  return (
		<Link to={"/projects"} className="singleProject">
			<h1>{title}</h1>
			<img src={url} alt="" />
		</Link>
  );
}

export default SingleProject