import React from 'react'

const OurPartnarship = () => {
    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <div className="">
                <h1 style={{ color: "#BED62F" }} className='text-3xl md:text-7xl mx-auto mb-5 text-center'>Our Valued Partners</h1>
            </div>
            <div className="">
                <section className="py-6 dark:bg-gray-800">
                    <div data-aos="zoom-out" className="container flex flex-col justify-center p-4 mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                            <img className="object-cover w-48 mx-auto dark:bg-gray-500 aspect-square" src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt='img'/>
                            <img className="object-cover w-48 mx-auto dark:bg-gray-500 aspect-square" src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt='img'/>
                            <img className="object-cover w-48 mx-auto dark:bg-gray-500 aspect-square" src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt='img'/>
                            <img className="object-cover w-48 mx-auto dark:bg-gray-500 aspect-square" src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt='img'/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OurPartnarship