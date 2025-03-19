// "use client"
// import { Createcontext } from "@/context/contextprovider";
// import { getProducts, Product } from "@/lib/fetchproduct";
// import Link from "next/link";
// import { useEffect, useState, useContext } from "react";


// const ProductCard = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   // Get dispatch from context
//   const { cart,dispatch } = useContext(Createcontext);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getProducts();
//       setProducts(data);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);


//   // Function to add item to cart
//   const handleAddToCart = (product: Product) => {
//     const isInCart = cart.some(item => item.id === product.id);
    
//     if (isInCart) {
//       alert("This item is already in your cart!");
//       return;
//     }
//     dispatch({
//       type: "Add",
//       payload: {
//         id: product.id,
//         name: product.title,
//         image: product.image,
//         price: product.price, // Include price
//         quantity: 1, // Default quantity is 1
//       },
//     });
//   }
   
 
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="grid grid-cols-1 px-16 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
//         >
//           <Link href={`/products/${product.id}`} passHref>
//             {/* Product Image */}
//             <div className="relative w-full h-48">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               <div>
//               <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//                 NEW
//               </span>
//               <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
//                 -50%
//               </span>
//               </div>
          

//             </div>

//             {/* Product Details */}
//             <div className="mt-3 flex-grow">
//               {/* Title */}
//               <h3 className="text-lg font-semibold mt-1">{product.title}</h3>

//               {/* Price */}
//               <div className="flex items-center space-x-2">
//                 <span className="text-green-600 font-bold">${product.price}</span>
//               </div>
//             </div>
//           </Link>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() => handleAddToCart(product)}
//             className="mt-4 bg-black text-white px-4 py-2 rounded-md shadow-md transition hover:bg-gray-800"
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );

// }
// export default ProductCard


"use client";
import { Createcontext } from "@/context/contextprovider";
import { getProducts, Product } from "@/lib/fetchproduct";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // Get dispatch from context
  const { cart, dispatch } = useContext(Createcontext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Function to add item to cart
  const handleAddToCart = (product: Product) => {
    const isInCart = cart.some(item => item.id === product.id);

    if (isInCart) {
      alert("This item is already in your cart!");
      return;
    }
    dispatch({
      type: "Add",
      payload: {
        id: product.id,
        name: product.title,
        image: product.image,
        price: product.price, // Include price
        quantity: 1, // Default quantity is 1
      },
    });
  };

  if (loading) {
    return <p className="text-center p-11">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 px-2.5 md:px-16 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
      >
       <Link href={`/products/${product.id}`} passHref>
          {/* Product Image */}
          <div className="relative w-full h-48 group-hover:scale-105 transition-transform duration-300">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-md"
            />
            {/* Discount Labels */}
            <div className="absolute top-2 left-2">
              <span className="bg-black text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="absolute top-12 left-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                -50%
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-3 flex-grow">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <div className="flex items-center gap-4">
            <span className="text-xl font-semibold text-green-600">
              ${product.price}
            </span>
            <span className="text-sm line-through text-gray-500">
              ${(product.price * 1.5).toFixed(2)}
            </span>
          </div>
          </div>
        </Link>

        {/* Add to Cart Button */}
        <button
          onClick={() => handleAddToCart(product)}
          className="mt-4 bg-black text-white cursor-pointer px-4 py-2 rounded-md shadow-md transition-colors duration-300 hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
    
  );
};

export default ProductCard;
