'use client'; // Enables Client Component behavior

import React, { useContext, useEffect, useState } from 'react';
import { Createcontext } from '@/context/contextprovider';

const Cathobject = ({ id , projectss }: any) => {
    const { cart , dispatch } = useContext(Createcontext);
    // console.log("projectss",projectss)
  
    const project = cart.find((p) => p.id === Number(id)); 
    console.log("project", project);
  
        const [quantity, setQuantity] =useState(project?.quantity ?? 1)
        
    
        useEffect(() => {
            if (project?.quantity !== undefined) {
                setQuantity(project.quantity);
            }
        }, [project]);
 
        const handleIncrease = () => {
            setQuantity(prevQuantity => prevQuantity + 1);
          
            // Dispatch an "Increase" action with the item's id
            dispatch({
                type: "Increase",
                payload: id, // We just need the item id to increase quantity
            });
        };
        


        const handleDecrease = (id: number) => {
            setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
            dispatch({
                type: "Decrease",
                payload: id,
            });
        };
        

           // Dispatch the updated quantity when it changes
           useEffect(() => {
            if (project?.quantity !== undefined) {
                setQuantity(project.quantity);
            }
        }, [project]);



    const handleAddToCart = (projectss:any) => {
        // Check if the product is already in the cart
        const isInCart = cart.some(item => item.id === projectss.id);
        
        if (isInCart) {
            alert("This item is already in your cart!");
            return;
        }
    
        // Dispatch action to add product to cart
        dispatch({
            type: "Add",
            payload: {
                id: projectss.id,
                name: projectss.title,
                image: projectss.image,
                price: projectss.price,
                quantity: quantity, // Use the current value of quantity
            },
        });
    };
    
  

    return (
        <div>
            <div className="flex items-center">
                        <button
                          onClick={()=>handleDecrease(projectss.id)}
                          className="p-2 bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="px-4">{ quantity  } </span>
                        <button
                          onClick={handleIncrease}
                          className="p-2 bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                       {/* Add to Cart Button */}
                  <button
                 onClick={()=>handleAddToCart(projectss)}
                className="mt-5 cursor-pointer bg-black text-white px-9 py-3 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
                  >
               Add to Cart
              </button>
        </div>
    );
};

export default Cathobject;