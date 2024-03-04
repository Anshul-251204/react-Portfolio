import React from "react";
import "../styles/home.scss";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
	return (
		<div className="home" id="home">
			<div>
				<h1>WEB</h1>
				<h1>
					DEVEL<span>O</span>PER
				</h1>
			</div>

			<div className="social-icons">
				<a
					href="https://in.linkedin.com/in/anshul25?original_referer=https%3A%2F%2Fwww.google.com%2F"
					target="blank"
					className="icons"
				>
					<FaLinkedin size={"1.5rem"} />
				</a>
				<a
					href="https://www.instagram.com/anshul._012/"
					target="blank"
					className="icons"
				>
					<RiInstagramFill size={"1.5rem"} />
				</a>
				<a
					href="https://github.com/Anshul-251204"
					target="blank"
					className="icons"
				>
					<FaGithub size={"1.5rem"} />
				</a>
			</div>
		</div>
	);
};

export default Home;
