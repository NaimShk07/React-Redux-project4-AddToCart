import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
	const { cartItem } = useSelector((state) => state.cart);

	return (
		<nav>
			<h2>Logo Here</h2>
			<div>
				<Link to={"/"}>Home</Link>
				<Link to={"/cart"}>
					<FiShoppingBag />
					{cartItem < 1 ? <></> : <p>{cartItem.length}</p>}
				</Link>
			</div>
		</nav>
	);
};

export default Header;
