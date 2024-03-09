import React from 'react'

const CertificateGallery = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800">
                <div data-aos="zoom-out" className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CertificateGallery