import Image from 'next/image';
import React from 'react';
const Navbar = () => {
    return (
        <div className="h-[100px] px-[50px] bg-red-500 flex items-center justify-between sticky top-0">
            <div className="flex-1">
                <div className="bg-white rounded-[50%] p-[10px] h-[50px] w-[50px]">
                    <Image
                        className=""
                        src="/img/telephone.png"
                        alt=""
                        width={32}
                        height={32}
                    />
                </div>
                <div className="ml-[20px] text-white">
                    <div className="text-xs font-medium">ORDER NOW</div>
                    <div className="text-[20px] font-bold">702-208-9123</div>
                </div>
            </div>
            <div className="flex-3">
                <ul className="list">
                    <li className="list-item">Home</li>
                    <li className="list-item">Products</li>
                    <li className="list-item">Menu</li>
                    <Image
                        src="/img/logo.png"
                        alt=""
                        height="69px"
                        width="160px"
                    />
                    <li className="list-item">Events</li>
                    <li className="list-item">Blog</li>
                    <li className="list-item">Contact</li>
                </ul>
            </div>
            <div className="flex-1 relative">
                <div className="">
                    <Image
                        className=""
                        src="/img/cart.png"
                        alt=""
                        height="30px"
                        width="30px"
                    />
                    <div
                        className="absolute bottom-8 left-7 w-5 h-5 
                    rounded-full bg-white flex items-center justify-center
                    font-semibold text-red-500"
                    >
                        2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
