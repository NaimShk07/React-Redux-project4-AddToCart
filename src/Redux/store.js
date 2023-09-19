import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice';
// import { cartReducer } from './reducers';


const store = configureStore({
   reducer: {
      // cart: cartReducer
      cart: cartSlice.reducer,
   }
});

export default store;