import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "cart",
   initialState: {
      cartItem: localStorage.getItem("obj") ? JSON.parse(localStorage.getItem("obj")) : [],
      // cartItem: [],
      subTotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
   },
   reducers: {
      addToCartAction(state, action) {
         const item = action.payload;
         const isItemExist = state.cartItem.find(value => value.id === item.id);

         if (isItemExist) {
            state.cartItem.forEach((value) => {
               if (value.id === item.id) value.quantity++;
            });
         } else {
            state.cartItem.push(item);
         }
         localStorage.setItem("obj", JSON.stringify(state.cartItem));

      },
      decrementAction(state, action) {
         // here we are getting only one id, now we have find that exact object that which matchs will the given id

         // ############### 1 way ##############
         // const item = state.cartItem.find((value) => value.id === action.payload);
         // if (item.quantity > 1) {
         //    state.cartItem.forEach((value) => {
         //       if (value.id == item.id) value.quantity--;
         //    });
         // }

         // ############### 2 way ##############
         state.cartItem.forEach((value) => {
            if (value.id === action.payload) {
               if (value.quantity > 1) value.quantity--;
            };
         });
         localStorage.setItem("obj", JSON.stringify(state.cartItem));

      },
      // arrow funtion
      deleteHandlerAction: (state, action) => {
         // give all the object form cateItem expect the obj.id i have given
         state.cartItem = state.cartItem.filter((value) => value.id !== action.payload);
         localStorage.setItem("obj", JSON.stringify(state.cartItem));

      },
      calculate: (state, action) => {
         let sum = 0;
         state.cartItem.forEach((value) => sum += value.price * value.quantity);
         state.subTotal = sum;
         state.cartItem.length > 0 ? state.shipping = 200 : state.shipping = 0;
         state.tax = +(state.subTotal * 0.18).toFixed();
         state.total = state.subTotal + state.shipping + state.tax;
      }
   }
});

// console.log(cartSlice.actions);

export default cartSlice;
export const { addToCartAction, decrementAction, deleteHandlerAction, calculate } = cartSlice.actions;

