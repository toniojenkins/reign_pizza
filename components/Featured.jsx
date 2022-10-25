import Image from 'next/image';
import React, { useState } from 'react';
const Featured = () => {
    const [index, setIndex] = useState(0);
    const handleArrow = (direction) => {
        if (direction === 'l') {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === 'r') {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };
    console.log(index);
    const images = ['/img/pizza.png', '/img/pizza.png', '/img/pizza.png'];
    return (
        <div className="featured-container">
            <div
                className="arrow-container left-0"
                onClick={() => handleArrow('l')}
            >
                <Image
                    src="/img/arrowl.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <div className="w-[300vw] h-[100%] flex">
                {images?.map((img, i) => (
                    <div className="w-[100vw] h-[100%] relative" key={i}>
                        <Image
                            src={img}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>

            <div
                className="arrow-container right-0"
                onClick={() => handleArrow('r')}
            >
                <Image
                    src="/img/arrowr.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};

export default Featured;
