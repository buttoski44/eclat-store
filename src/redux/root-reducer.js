import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import dataReducer from "./user/data.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
