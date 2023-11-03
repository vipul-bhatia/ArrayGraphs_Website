'use client'
import Slider from "react-slick";
import React,{useState} from "react";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

interface DataType {
    heading: string;
    description: string;
    imgSrc: string;
}

const beliefsData: DataType[] = [
    {
        heading: "Matt Painting",
        description: "Elevate your visuals with expert matte painting techniques, adding depth and realism to your scenes through intricate hand-painted or digital artistry.",
        imgSrc: "/images/beliefs/Durga.MP4",
    },
    {
        heading: "Motion Tracking",
        description: "Seamlessly integrate computer-generated elements into live-action footage using precise motion tracking, enhancing the authenticity of your visual effects.",
        imgSrc: "/images/beliefs/tv.mp4",
    },
    {
        heading: "Product Animation",
        description: "Enhance your projects with stunning visual effects that captivate your audience.",
        imgSrc: "/images/beliefs/Earbuds.mp4",
    },
    {
        heading: "Motion Graphics",
        description: "Transform your visuals with dynamic motion graphics and animations.",
        imgSrc: "/images/beliefs/motion_graphics.mp4",
    },
    {
        heading: "Graphic Designing",
        description: "Unlock the power of visual communication with our expert graphic design services.",
        imgSrc: "/images/beliefs/b_resized.mp4",
    },
    {
        heading: "Video Editing",
        description: "Polish and refine your videos with our professional video editing services.",
        imgSrc: "/images/beliefs/video_editing.mp4",
    },
    {
        heading: "Reels",
        description: "Create engaging and memorable short videos with our reel production services.",
        imgSrc: "/images/beliefs/reel.mp4",
    },
    {
        heading: "Screen Replacement",
        description: "Transform on-screen displays with flawless screen replacement, allowing for dynamic storytelling and immersive interactions in your videos and films.",
        imgSrc: "/images/beliefs/film_production.mp4",
    },
];
const BeliefsCarousel = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Disable autoplay to handle it manually
        speed: 500,
        autoplaySpeed: 10000,
        cssEase: "linear",
    
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    };

    return (
        <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 bg-lightblue'>
                <div className="text-center">
                    <h3 className="text-4xl sm:text-6xl pt-10 font-bold text-black ">MEDIA PRODUCTION</h3>
                </div>
                <Slider {...settings}>
                    {beliefsData.map((item, index) => (
                        <div key={index}>
                            <div className="relative">
                                <div className='bg-darkblue rounded-3xl shadow-lg m-3 pr-5 pl-5 py-5 my-20 '>
                                    <div className="video-container">
                                        <video
                                            id={`video-${index}`} // Add an ID to the video element
                                            className="video"
                                            autoPlay
                                            muted
                                            loop
                                            style={{ height: '500px', width: '500px' }}
                                        >
                                            <source src={item.imgSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <h4 className='text-base font-medium text-white'>{item.description}</h4>
                                    <hr style={{ color: "white" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2 text-white'>{item.heading}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};


export default BeliefsCarousel;
