import React from "react";
import "../styles/skill.scss";
const Skill = () => {
	return (
		<div className="skill">
			<h1>
				what I’M Good At <br /> <span>Skills</span> And{" "}
				<span>Tools.</span>
			</h1>

			<div className="skill-box">
				<h4>Languages</h4>
				<div>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/color/72/html-5--v1.png"
						alt="html-5--v1"
					/>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/color/72/css3.png"
						alt="css3"
					/>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/fluency/72/javascript.png"
						alt="javascript"
					/>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/color/72/typescript.png"
						alt="typescript"
					/>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/color/72/java-coffee-cup-logo--v1.png"
						alt="java-coffee-cup-logo--v1"
					/>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/fluency/72/python.png"
						alt="python"
					/>
				</div>
			</div>

			<div className="skill-box">
				<h4>Library, FrameWorks & other</h4>
				<div>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/color/144/react-native.png"
						alt="react-native"
					/>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/color/144/nodejs.png"
						alt="nodejs"
					/>
					<img
						width="72"
						height="72"
						src="https://img.icons8.com/color/144/mongodb.png"
						alt="mongodb"
					/>
					<img
						width="72"
						height="72"
						alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
						src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
					/>
					<img
						className="white-bg"
						width="150"
						height="72"
						alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
						src="https://spin.atomicobject.com/wp-content/uploads/gsap-logo.jpg"
					/>

					<img
						className="border-full"
						width="72"
						height="72"
                        borderRadius="50%"
						alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
						src="https://avatars.githubusercontent.com/u/124599?v=4"
					/>
				</div>
			</div>
		</div>
	);
};

export default Skill;
