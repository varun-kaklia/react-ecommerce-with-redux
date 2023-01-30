import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./reducer/cartReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  
  const rootReducer = combineReducers({
    cartReducer:cartReducer
  });

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
