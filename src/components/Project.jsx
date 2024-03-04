import React from "react";
import "../styles/project.scss";
import SingleProject from "./SingleProject";
const Project = () => {
	return (
		<div className="project" id="project">
			<h1>
				<span>Project</span> I Made
			</h1>

			<SingleProject
				title="Clone"
				url="https://images.unsplash.com/photo-1564048171305-0dce5c555dbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvbmV8ZW58MHx8MHx8fDA%3D"
			/>

			<SingleProject
				title={"static"}
				url={
					"https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXRpYyUyMHNpdGV8ZW58MHx8MHx8fDA%3D"
				}
			/>
		</div>
	);
};

export default Project;
