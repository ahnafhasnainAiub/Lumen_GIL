import React from 'react'

const OurMisson = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10 justify-center items-center">

                <div className="text-center">
                    <h1 data-aos="zoom-in" style={{ color: '#BED62F' }} className='text-3xl md:text-5xl font-extrabold'>Our Mission</h1>
                    <p className='mt-5 text-justify'>
                        To be the best and most influential service company for one stop complete sourcing solution for textile and footwear industries through continual market research and product development.
                    </p>
                </div>

                <div data-aos="zoom-in-left" className="">
                    <img className='w-3/4 mx-auto' src="https://cdn.pixabay.com/photo/2023/10/14/12/50/jeans-8314814_1280.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default OurMisson