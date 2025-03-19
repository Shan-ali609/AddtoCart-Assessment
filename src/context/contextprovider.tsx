"use client";

import React, { createContext, useReducer, ReactNode } from "react";
import contextReducer from "./contextReducer";

// Define types
type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type ContextType = {
  cart: CartItem[];
  dispatch: React.Dispatch<
    | { type: "Add"; payload: CartItem }
    | { type: "Remove"; payload: number }
    | { type: "Increase"; payload: number }
    | { type: "Decrease"; payload: number }
  >;
};

// Create Context with default values
const Createcontext = createContext<ContextType>({
  cart: [],
  dispatch: () => {},
});


// Context Provider
const Contextprovider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(contextReducer, []);

  return (
    <Createcontext.Provider value={{ cart, dispatch }}>
      {children}
    </Createcontext.Provider>
  );
};

export { Contextprovider, Createcontext };
