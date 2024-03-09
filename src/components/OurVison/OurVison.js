import React from 'react'

const OurVison = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10 justify-center items-center">

                <div data-aos="zoom-in-right" className="">
                    <img className='w-3/4 mx-auto' src="https://cdn.pixabay.com/photo/2019/10/29/16/43/rope-4587474_640.jpg" alt="" />
                </div>

                <div className="text-center">
                    <h1 data-aos="zoom-in" style={{ color: '#BED62F' }} className='text-3xl md:text-5xl font-extrabold'>Our Vision</h1>
                    <p className='mt-5 text-justify'>
                        To support and to service Bangladeshi textiles and footwear industry with necessary equipment and knowledge to ensure the sectors become competitive globally.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default OurVison