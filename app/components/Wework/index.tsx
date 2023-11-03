"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: '',
        name: 'Detailing Cartel',
        imgSrc: '/images/wework/avatar.jpeg',
    },
    {
        profession: '',
        name: 'Business Labs.',
        imgSrc: '/images/wework/avatar1.jpg',
    },
    {
        profession: '',
        name: 'Neelam Makeover',
        imgSrc: '/images/wework/avatar2.png',
    },
    {
        profession: '',
        name: 'The Meal Master',
        imgSrc: '/images/wework/avatar3.jpg',
    },
    {
        profession: '',
        name: 'AI Pro Stack Solutions',
        imgSrc: '/images/wework/avatar4.jpeg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,

              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,

              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,

              },
            },
          ],
        };


        return (
            <div className="bg-wework py-1">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">OUR CLIENTS</h3>

                    </div>

                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 pt-16 pl-6 shadow-xl rounded-3xl'>
                                <div className='relative w-60 h-60'>
                                    <Image src={items.imgSrc} alt="gaby" width={182} height={182} className="inline-block " />
                                    {/* <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" /> */}
                                </div>
                                {/* <h4 className='text-4xl font-bold pt-14'>{items.name}</h4> */}
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
