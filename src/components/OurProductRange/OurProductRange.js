import React from 'react'
import ProductRangeSlider from './ProductRangeSlider';


const OurProductRange = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 items-center justify-center max-w-7xl m-auto">
                <div data-aos="zoom-in" className="">
                    <h1 style={{ color: '#BED62F' }} className='text-5xl md:text-7xl text-center font-extrabold'>Our <br />Product <br /> Range</h1>
                </div>
                <div className="">
                    <ProductRangeSlider />
                </div>
            </div>
        </div>
    )
}

export default OurProductRange