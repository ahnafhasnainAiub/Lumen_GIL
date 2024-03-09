import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ProductRangeSlider = () => {
    return (
        <div>
            <div className="">
                <Splide
                    aria-label="My Favorite Images"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    options={{
                        width: "100%",
                        height: "24rem"
                    }}
                >
                    <SplideSlide>
                        <img className='' src="https://cdn.pixabay.com/photo/2012/07/29/21/42/dresses-53319_640.jpg" alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src="https://cdn.pixabay.com/photo/2015/09/09/22/04/jeans-933682_640.jpg" alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src="https://cdn.pixabay.com/photo/2018/08/24/02/00/yarn-3627212_640.jpg" alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src="https://cdn.pixabay.com/photo/2022/09/19/18/45/thread-7466259_640.jpg" alt="Image 2" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default ProductRangeSlider