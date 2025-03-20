import Image from "next/image";

export default function HeroSection() {
    return (
      <section className="relative w-full h-[50vh] md:h-[70vh] px-12 flex items-center my-2 justify-center bg-gray-100">
        {/* Background Image */}
        <div className="absolute px-2.5 md:px-12 inset-0">
          <Image
           src="/assesment.jpg"
           alt="img"
           height={320}
           width={320}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Content */}
        <div className="relative text-center px-4 md:px-10">
          <p className="text-gray-600">
            <span className="text-black font-semibold">Home</span> &gt; Shop
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-black mt-2">Shop Page</h1>
          <p className="text-lg md:text-xl text-gray-700 mt-2">
            Let&gt;s design the place you always imagined.
          </p>
        </div>
      </section>
    );
  }