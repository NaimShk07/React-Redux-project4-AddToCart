import React from "react";
import "./Styles/App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Header from "./Components/Header";

const App = () => {
	return (
		<Router>
			<Header />
			<Toaster />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
