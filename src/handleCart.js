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
        const updatedState = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
  }
}
