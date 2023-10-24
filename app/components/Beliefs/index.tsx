'use client'

import React, { useRef, useEffect, useState } from 'react';

const Beliefs = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly specify the type of videoRef

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play();
                } else if (videoRef.current) {
                    videoRef.current.pause();
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <div className="video-container">
                        <video
                            ref={videoRef}
                            className="video"
                            autoPlay
                            muted
                            loop
                            style={{ height: '500px', width: '500px' }} 
                        >
                            <source src="/images/beliefs/Durga.MP4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Sample<span className="text-grey">Work</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Durga Maa Special Video.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <div className="video-container">
                        <video
                            ref={videoRef}
                            className="video"
                            autoPlay
                            muted
                            loop
                            style={{ height: '500px', width: '500px' }} 
                        >
                            <source src="/images/beliefs/logo4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Sample<span className="text-grey">Work</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Durga Maa Special Video.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>
                {/* COLUMN-2 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <div className="video-container">
                        <video
                            ref={videoRef}
                            className="video"
                            autoPlay
                            muted
                            loop
                            style={{ height: '500px', width: '500px' }} 
                        >
                            <source src="/images/beliefs/Earbuds.MP4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Sample<span className="text-grey">Work.</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Thumbs Up Introduction Video</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>
                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <div className="video-container">
                        <video
                            ref={videoRef}
                            className="video"
                            autoPlay
                            muted
                            loop
                            style={{ height: '500px', width: '500px' }} 
                        >
                            <source src="/images/beliefs/square.MP4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Sample<span className="text-grey">Work.</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Thumbs Up Introduction Video</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
