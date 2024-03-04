import React from "react";
import "../styles/home.scss";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
	return (
		<div className="home">
			<div>
				<h1>WEB</h1>
				<h1>
					DEVEL<span>O</span>PER
				</h1>
			</div>

			<div className="social-icons">
				<div className="icons">
					<FaLinkedin size={"1.5rem"} />
				</div>
				<div className="icons">
					<RiInstagramFill size={"1.5rem"} />
				</div>
				<div className="icons">
					<FaGithub size={"1.5rem"} />
				</div>
			</div>
		</div>
	);
};

export default Home;
