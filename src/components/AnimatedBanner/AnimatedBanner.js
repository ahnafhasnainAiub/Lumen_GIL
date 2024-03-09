import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedBanner = () => {
    const backgroundUrl = 'https://cdn.pixabay.com/photo/2012/07/29/21/42/dresses-53319_640.jpg';

    const animationSequence = [
        'Want to Buy YARN',
        1000,
        'Want to Buy Fabric',
        1000,
        'Want to Buy Garment',
        1000,
    ];

    const animationStyle = {
        fontSize: '3rem',
        color: '#BED62F',
    };

    return (
        <div className="w-full">
            <div className="hero min-h-fit" style={{ backgroundImage: `url(${backgroundUrl})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1>
                            <TypeAnimation sequence={animationSequence} speed={50} style={animationStyle} repeat={Infinity} />
                        </h1>
                        <button className="btn btn-primary my-5">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedBanner;
