import React from 'react'

const AboutUsBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/11/18/42/business-1817472_640.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1  data-aos="zoom-in" style={{ color: "#BED62F" }} className="mb-5 text-5xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsBanner