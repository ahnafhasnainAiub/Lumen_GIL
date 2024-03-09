import React, { useEffect } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { RiGlobalFill } from 'react-icons/ri';
import { FaPeopleGroup } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureCard = ({ icon, title, description }) => (
    <div className="card bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">{icon}</figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
        </div>
    </div>
);

const features = [
    {
        icon: <FaBuilding className="w-16 h-16" />,
        title: 'OUR COMPANY',
        description: 'If a dog chews shoes whose shoes does he choose?',
    },
    {
        icon: <RiGlobalFill className="w-16 h-16" />,
        title: 'OUR NUMBERS',
        description: 'If a dog chews shoes whose shoes does he choose?',
    },
    {
        icon: <FaPeopleGroup className="w-16 h-16" />,
        title: 'OUR ADVANTAGE',
        description: 'If a dog chews shoes whose shoes does he choose?',
    },
];

const WhoWeAre = () => {
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
        <div className="max-w-7xl mx-auto">
            <div className="mt-5">
                <h1 data-aos="fade-down"
                    data-aos-duration="3000" style={{ color: '#BED62F' }} className="text-center text-3xl md:text-5xl font-semibold">
                    Who We Are
                </h1>
            </div>
            <div data-aos="flip-up" className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 w-full md:max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default WhoWeAre;
