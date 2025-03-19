// import Cathobject from '@/components/Cathobject';
// import Timer from '@/components/Timer';
// import { Createcontext } from '@/context/contextprovider';
// import { getProducts } from '@/lib/fetchproduct';
// import { notFound } from 'next/navigation';
// import React, { useContext } from 'react';

// const page = async ({ params }: any) => {
//     const { id } = params; // Correcting from slug to id

//     const products = await getProducts();

//     const project = products.find((p) => p.id === Number(id)); // Convert id to number

//     console.log("products",products )

//     if (!project) return notFound();
    



//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-[50%_50%] h-screen gap-4 p-4">
//         {/* Left Column - Image */}
//         <div className="bg-white p-4 rounded-lg shadow-md w-2xl mx-auto ">
//           <img 
//             src={project.image} 
//             alt={project.title} 
//             className="w-full h-64 object-contain mx-auto"
//           />
//         </div>
      
//         {/* Right Column - Details */}
//         <div className="flex flex-col gap-4 p-4 w-2xl mx-auto">
//           {/* Title */}
//           <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
//            <p>{project.description}</p>
//           {/* Price */}
//           <div className="flex items-center gap-4">
//             <span className="text-xl font-semibold text-green-600">
//               ${project.price}
//             </span>
//             <span className="text-sm line-through text-gray-500">
//               ${(project.price * 1.5).toFixed(2)}
//             </span>
//           </div>
      
//          <div>
//           <Timer />
//          </div>

//           <Cathobject id={project.id} projectss={project} />
      
       
//         </div>
//       </div>
//     );
// };

// export default page;

import Cathobject from '@/components/Cathobject';
import Timer from '@/components/Timer';
import { getProducts } from '@/lib/fetchproduct';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: any) => {
    const { id } = params;
    const products = await getProducts();
    const project = products.find((p) => p.id === Number(id));

    if (!project) return notFound();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-8">
            {/* Left Column - Image */}
            <div className="bg-white p-4 rounded-lg shadow-md mx-auto max-w-xl w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    height={320}
                    width={320}
                    className="w-full h-64 object-contain"
                />
            </div>

            {/* Right Column - Details */}
            <div className="flex flex-col gap-4 p-4 mx-auto max-w-xl w-full">
                <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
                <p className="text-gray-700">{project.description}</p>

                {/* Price */}
                <div className="flex items-center gap-4">
                    <span className="text-xl font-semibold text-green-600">${project.price}</span>
                    <span className="text-sm line-through text-gray-500">${(project.price * 1.5).toFixed(2)}</span>
                </div>

                {/* Timer Component */}
                <div>
                    <Timer />
                </div>

                {/* Add to Cart Component */}
                <Cathobject id={project.id} projectss={project} />
            </div>
        </div>
    );
};

export default Page;
