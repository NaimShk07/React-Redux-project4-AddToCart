import { createReducer} from '@reduxjs/toolkit';

export const cartReducer = createReducer(
   {
      cartItem: [],
      subTotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
   }, {
   addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItem.find(value => value.id === item.id);

      if (isItemExist) {
         state.cartItem.forEach((value) => {
            if (value.id === item.id) value.quantity++;
         });
      } else {
         state.cartItem.push(item);
      }
   }
});