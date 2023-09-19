import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCartAction,
	calculate,
	decrementAction,
	deleteHandlerAction,
} from "../Redux/slice";

const Cart = () => {
	const { cartItem, subTotal, shipping, tax, total } = useSelector(
		(state) => state.cart
	);

	const dispatch = useDispatch();

	const increment = (id) => {
		dispatch(addToCartAction({ id }));
		dispatch(calculate());

		// sending single data(id) in the form of object, because this function accept only object
	};

	const decrement = (id) => {
		dispatch(decrementAction(id)); // we can send single data here because funtion accept single data
		dispatch(calculate());
	};

	const deleteHandler = (id) => {
		dispatch(deleteHandlerAction(id));
		dispatch(calculate());
	};

	return (
		<div className="cart">
			<main>
				{cartItem.length > 0 ? (
					cartItem.map((value) => (
						<CartItem
							imgLink={value.imglink}
							title={value.title}
							price={value.price}
							qty={value.quantity}
							id={value.id}
							key={value.id}
							increment={increment}
							decrement={decrement}
							deleteHandler={deleteHandler}
						/>
					))
				) : (
					<h1>No Item Yet</h1>
				)}
			</main>
			<aside>
				<h2>Subtotal: ${subTotal}</h2>
				<h2>Shipping: ${shipping}</h2>
				<h2>Tax: ${tax}</h2>
				<h2>Total: ${total}</h2>
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
			<button onClick={() => decrement(id)} >-</button>
			<p>{qty}</p>
			<button onClick={() => increment(id)}>+</button>
		</div>

		<AiFillDelete onClick={() => deleteHandler(id)} />
	</div>
);

export default Cart;
