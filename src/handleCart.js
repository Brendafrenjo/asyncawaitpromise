let cart = [];

function handleCart(state = cart, action) {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      //find if product exists//
      const productExist = state.find((x) => x.id === product.id);
      if (productExist) {
        //if product exist increase quantity
        const updateState = state.map((x) =>
          x.id === product.id ? { ...state, qty: x.qty + 1 } : x
        );
      } else {
        // Create a new state array by spreading the existing items
        // and adding a new item with quantity 1
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETE_ITEM":
      //find if product to be deleted exists
      const productToDeleteExists = state.find((x) => x.id === product.id);
      //if product to be deleted is one in quantity, remove the product from state
      if (productToDeleteExists.qty === 1) {
        return state.filter((x) => x.id !== productToDeleteExists.id);
      } else {
        //If the quantity is greater than 1, decrement the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
  }
}
