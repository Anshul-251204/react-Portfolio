import React from "react";
import Home from "./components/Home";
import "./styles/main.scss";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from "./components/Skill";
import Project from "./components/Project";
import About from "./components/About";
const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Home />
			<Skill />
			<Project/>
			<About/>
		</BrowserRouter>
	);
};

export default App;
