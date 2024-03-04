import React from "react";
import "../styles/about.scss";
import logo from "../assets/About.png";
const About = () => {
	return (
		<div className="about" id="about">
			<h1>
				<span>HELLo👋</span>
			</h1>
			<div className="about-main">
				<div>
					<p>
						I am <span>Anshul Choure,</span> a dedicated student
						currently pursuing a Bachelor's{" "}
						<span>
							{" "}
							B.Tect in Computer Science at Sage University
						</span>{" "}
						in Indore. My passion lies in the realm of web
						development, particularly focusing on crafting
						innovative web applications and designing compelling
						user interfaces. I have a strong foundation in key
						technologies such as{" "}
						<span>
							HTML, CSS, JavaScript, TypeScript, React.js,
							Express.js, Node.js, and MongoDB.
						</span>{" "}
						Eager to explore and contribute to the dynamic world of
						web technologies, I am committed to honing my skills and
						staying updated with the latest advancements in the
						field.
					</p>
				</div>
				<div className="img-div">
					<img className="about-img" src={logo} alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;
