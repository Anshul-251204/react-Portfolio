import React from "react";
import Home from "./components/Home";
import "./styles/main.scss";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from "./components/Skill";
const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/skill" element={<Skill />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
