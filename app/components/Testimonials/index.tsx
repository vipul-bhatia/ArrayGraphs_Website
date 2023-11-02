"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Vipul Bhatia",
        profession: 'CEO, AIProStack Solutions',
        comment: 'I want to express my gratitude to ArrayGraphs for their exceptional support in helping us achieve our goals. They are a valuable partner.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Priyam Sekra",
        profession: 'CEO, AIProStack Solutions',
        comment: 'ArrayGraphs has been instrumental in our success. Their dedication to delivering high-quality marketing is commendable.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Shivam Vijayvargia",
        profession: 'Software Engineer',
        comment: 'I appreciate the innovative solutions provided by ArrayGraphs. Their expertise in designing & marketing is outstanding.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Deepak Kumar",
        profession: 'Lead Architect',
        comment: 'ArrayGraphs has consistently met our design needs, contributing to the quality of our products.Their expertise is unbeatable.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Radhe Thakur",
        profession: 'CEO, Raff Works',
        comment: 'Candidly, working with Array Graphs was an absolute game-changer for our project.Their artistic finesse and attention to detail in 3D modeling left us in awe.',
        imgSrc: '/images/testimonial/user1.svg',
    },
];


// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]

        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white rounded-3xl shadow-lg m-3 p-10 my-20 hover:bg-darkblue hover:text-white'>
                                    {/* <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" /> */}
                                    <h4 className='text-base font-medium '>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
