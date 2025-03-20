type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type Action =
  | { type: "Add"; payload: CartItem }
  | { type: "Remove"; payload: number } // Remove by id
  | { type: "Increase"; payload: number } // Increase quantity by id
  | { type: "Decrease"; payload: number }; // Decrease quantity by id

const contextReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case "Add": {
      // Prevent duplicate items
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state; // Return unchanged state if item exists
      }
      return [...state, action.payload]; // Add new item
    }

    case "Remove":
      return state.filter((item) => item.id !== action.payload);

    case "Increase":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "Decrease":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state; // Return the current state instead of `state;`
  }
};

export default contextReducer;
