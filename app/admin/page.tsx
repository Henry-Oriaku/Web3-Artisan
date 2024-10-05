import React from 'react';

export default function LoginPage() {
    return (
        <div>
            <div className="flex  justify-items-center align-middle flex-col h-screen">

                {/* Right Form Section */}
                    <div className="mx-auto mt-20 flex border-2 border-gray-300 rounded-lg shadow-lg p-8 sm:w-2/4 w-full ">
                        {/* <div className="hidden sm:flex flex-1 items-center justify-center bg">
                            <h1 className="text-white text-4xl font-bold">Welcome Back!</h1>
                        </div> */}
                        <div className='flex-1'>

                            <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>

                            <input
                                placeholder="Enter Email"
                                className="p-3 mb-4 border-gray-300 rounded-lg w-full"
                            />
                            <input
                                placeholder="Enter Password"
                                type="password"
                                className="p-3 mb-6 border-gray-300 rounded-lg w-full"
                            />

                            <button className="w-full bg-stone-700 text-white py-2 rounded-lg active:border-2 transition duration-300">
                                Login
                            </button>

                        </div>
                    </div>
            </div>
        </div>
    );
}
