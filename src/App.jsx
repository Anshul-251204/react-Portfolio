import React from "react";
import Home from "./components/Home";
import "./styles/main.scss";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from "./components/Skill";
import Project from "./components/Project";
import About from "./components/About";
import ProjectPage from "./components/ProjectPage";
const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/skill" element={<Skill />} />
				<Route path="/about" element={<About />} />
				<Route path="/project" element={<Project />} />
			</Routes>
			{/* <Skill />
			<About />
			<Project /> */}
		</BrowserRouter>
	);
};

export default App;
