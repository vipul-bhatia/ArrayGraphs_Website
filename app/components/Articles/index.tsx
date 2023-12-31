"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "Know More",
        heading: 'Daily social media posts!',
        heading2: 'with ArrayGraphs',
        name: "View on Linkdin",
        date: 'September 30, 2023',
        imgSrc: '/images/articles/article4.jpeg',
    },
    {
        time: "Know More",
        heading: 'Designs with ArrayGraphs',
        heading2: 'Give your premium new look!',
        name: "View on Linkdin",
        date: 'September 12, 2023',
        imgSrc: '/images/articles/article5.jpeg',
    },
    {
        time: "Know More",
        heading: 'Branding with ArrayGraphs',
        heading2: 'Give your brand a new look!',
        name: "View on Linkdin",
        date: 'August 17 , 2023',
        imgSrc: '/images/articles/article6.jpeg',
    },

]

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
                    }
                }
            ]
        };


        return (
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                    
                        <h3 className="text-4xl sm:text-6xl font-bold">OUR LATEST FEED</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <React.Fragment key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />

                                    <Link href="https://www.linkedin.com/company/arraygraphs">
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time}</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
                                    </div>

                                </div>

                            </React.Fragment>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
