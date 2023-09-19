import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, calculate } from "../Redux/slice";

const Home = () => {
	const productList = [
		{
			id: 1,
			title: "Macbook Air",
			price: 500,
			imglink:
				"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-gallery1-20220606?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1653668113964",
		},
		{
			id: 2,
			title: "Macbook Pro",
			price: 900,
			imglink:
				"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-gallery1-202306?wid=2000&hei=1537&fmt=jpeg&qlt=95&.v=1684193994222",
		},
	];

	const dispatch = useDispatch();
	const { cartItem } = useSelector((state) => state.cart);

	const addToCartHandler = (options) => {
		dispatch(addToCartAction(options));
		dispatch(calculate());
		toast.success("Added to Cart");
	};

	return (
		<div className="home">
			{productList.map((value, index) => (
				<Product
					key={index}
					id={value.id}
					imglink={value.imglink}
					title={value.title}
					price={value.price}
					handler={addToCartHandler}
				/>
			))}
		</div>
	);
};

const Product = ({ imglink, title, price, id, handler }) => (
	<div className="product">
		<img src={imglink} height={"150px"} alt="" />
		<p>{title}</p>
		<h4>${price}</h4>
		<button onClick={() => handler({ title, price, imglink, id, quantity: 1 })}>
			Add to Cart
		</button>
	</div>
);

export default Home;
