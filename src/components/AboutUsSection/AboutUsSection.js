import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsSection = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <div className='max-w-7xl mx-auto my-5'>
            <div data-aos="fade-up-right" className="">
                <h1 style={{ color: "#BED62F" }} className='text-3xl md:text-7xl'>Who We Are And <br /> What Makes Us <br />
                    <span className='font-semibold' style={{ color: "#00A950" }}>Awesome</span>
                </h1>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                <div data-aos="zoom-in-down" className="">
                    <img className='h-72' src="https://cdn.pixabay.com/photo/2015/03/03/07/21/fabric-657038_640.jpg" alt="" />
                </div>
                <div className="">
                    <p>Lumen International Sourcing is the unique international one stop service center for textile raw material, footwear raw material sourcing and textile & footwear machineries. Lumen International Sourcing is chastely a service company offering all types of required raw materials and machineries at competitive price, within required stipulated lead time and guaranteed quality assurance, sustainable innovative products and providing a complete solution for supply chain management in textile industry and footwear industry.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection;
