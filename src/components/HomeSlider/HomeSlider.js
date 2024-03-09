import React from 'react';

const Slide = ({ id, imageUrl, prevSlide, nextSlide }) => (
    <div id={id} className="carousel-item relative w-full h-screen">
        <div className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 data-aos="zoom-in-down" className="mb-5 text-5xl font-bold" style={{ color: "#BED62F" }}>
                        Lumen International Sourcing
                    </h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary ">About Us</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={prevSlide} className="btn btn-circle">❮</a>
            <a href={nextSlide} className="btn btn-circle">❯</a>
        </div>
    </div>
);

const HomeSlider = () => {
    return (
        <div>
            <div className="carousel w-full max-h-screen z-40">
                <Slide id="slide1" imageUrl="https://cdn.pixabay.com/photo/2015/07/31/15/02/knit-869221_640.jpg" prevSlide="#slide4" nextSlide="#slide2" />
                <Slide id="slide2" imageUrl="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg" prevSlide="#slide1" nextSlide="#slide3" />
                <Slide id="slide3" imageUrl="https://cdn.pixabay.com/photo/2017/08/02/11/53/weaving-loom-2571179_1280.jpg" prevSlide="#slide2" nextSlide="#slide4" />
                <Slide id="slide4" imageUrl="https://cdn.pixabay.com/photo/2023/10/19/09/05/yarn-8325945_640.jpg" prevSlide="#slide3" nextSlide="#slide1" />
            </div>
        </div>
    );
};

export default HomeSlider;
