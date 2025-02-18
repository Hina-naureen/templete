import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
        <div>
            {/* New Section: New Arrivals */}
            <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-16 bg-[#FFF9E5]">
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <Image 
                        src="/Asgaard sofa 1.png" 
                        alt="New Arrival" 
                        width={900} 
                        height={799} 
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="flex flex-col items-center text-center mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
                    <h2 className="text-lg font-medium text-gray-500">New Arrivals</h2>
                    <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">Asgaard sofa</h1>
                    <Link
                        href={`/orderNow/${'Asgaard sofa'.toLowerCase().replace(/\s+/g, '-')}`}
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                          🛒
                    
                        Order Now
                    </Link>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Blogs</h2>
                <p className="text-lg text-center mb-12">Find a bright ideal to suit your taste with our great selection</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="rounded-lg shadow-md w-full max-w-xs">
                                <Image 
                                    src={`/Going all-with milenial design${item}.png`} 
                                    alt={`Blog Image ${item}`} 
                                    width={320} 
                                    height={240} 
                                    className="w-full h-60 object-cover rounded-lg"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold mb-2">Going all-in with millennial design</h3>
                                <Link href="#" className="text-black font-semibold hover:underline mb-2 block">
                                    Read More
                                </Link>
                                <div className="text-sm text-gray-600 flex items-center justify-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        5 min
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M3 10h18M4 21h16a2 2 0 002-2V10a2 2 0 00-2-2H4a2 2 0 00-2 2v9a2 2 0 002 2z" />
                                        </svg>
                                        12th Oct 2022
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <Link href="/blogs" className="text-lg font-semibold text-black hover:underline">
                        View All
                    </Link>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="relative w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/instagram.png')" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-[24px] md:text-[36px] font-bold text-white">Our Instagram</h1>
                    <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 text-white">
                        Follow our store on Instagram
                    </p>
                    <button className="mt-7 px-6 py-3 md:px-[50px] md:py-[20px] rounded-full shadow-2xl bg-[#FAFAFA] text-black font-semibold">
                        Follow Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
