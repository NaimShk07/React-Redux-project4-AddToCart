import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
	return (
		<div className="cart">
			<main>
				<CartItem
					imgLink={
						"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-gallery1-20220606?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1653668113964"
					}
					title={"Macbook Air"}
					price={500}
					qty={1}
					id={1}
				/>
				<CartItem
					imgLink={
						"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-gallery1-20220606?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1653668113964"
					}
					title={"Macbook Air"}
					price={500}
					qty={1}
					id={1}
				/>
				<CartItem
					imgLink={
						"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-gallery1-20220606?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1653668113964"
					}
					title={"Macbook Air"}
					price={500}
					qty={1}
					id={1}
				/>
			</main>
			<aside>
				<h2>Subtotal: ${2000}</h2>
				<h2>Shipping: ${200}</h2>
				<h2>Tax: ${20}</h2>
				<h2>Total: ${2220}</h2>
			</aside>
		</div>
	);
};

const CartItem = ({
	id,
	price,
	title,
	imgLink,
	qty,
	increment,
	decrement,
	deleteHandler,
}) => (
	<div className="cartItem">
		<img src={imgLink} alt="" />
		<article>
			<h3>{title}</h3>
			
			<p>${price}</p>
		</article>

		<div>
			<button onClick={() => decrement(id)}>-</button>
			<p>{qty}</p>
			<button onClick={() => increment(id)}>+</button>
		</div>

		<AiFillDelete onClick={() => deleteHandler(id)} />
	</div>
);

export default Cart;
