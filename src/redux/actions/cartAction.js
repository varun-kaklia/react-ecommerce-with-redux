export const addToCart = (product, quantity) => (dispatch, getState) => {
    console.log("Product received in cart Actions",product)
    var cartItem = {
      product:product,
      title: product.title,
      id: product.id,
      image: product.image,
      quantity: Number(quantity),
      price: Number(product.price),
      totalPrice: product.price * quantity,
    };
    
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: product });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cartReducer.cartItems)
        );
      }
  };
  
export const deleteFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: product });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};