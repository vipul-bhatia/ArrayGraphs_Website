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

    const scrolltojoinus = () => {
        const newsletterSection = document.getElementById('joinus');
    
        if (newsletterSection) {
          newsletterSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
        <h4 className='text-center text-4xl lg:text-65xl font-bold'>Media Production</h4>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

            {/* COLUMN-1 */}
            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
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
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Matt <span className="text-grey">Painting</span></h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start"> Elevate your visuals with expert matte painting techniques, adding depth and realism to your scenes through intricate hand-painted or digital artistry.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus} className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>

            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={{ height: '500px', width: '500px' }}
                    >
                        <source src="/images/beliefs/tv.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Motion <span className="text-grey">Tracking</span></h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Seamlessly integrate computer-generated elements into live-action footage using precise motion tracking, enhancing the authenticity of your visual effects.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>

            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={{ height: '500px', width: '500px' }}
                    >
                        <source src="/images/beliefs/Earbuds.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Product <span className="text-grey">Animation</span></h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Enhance your projects with stunning visual effects that captivate your audience.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>

            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={{ height: '500px', width: '500px' }}
                    >
                        <source src="/images/beliefs/motion_graphics.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Motion <span className="text-grey">Graphics</span></h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Transform your visuals with dynamic motion graphics and animations.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>
            {/* COLUMN-2 */}
            
            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={{ height: '500px', width: '500px' }}
                    >
                        <source src="/images/beliefs/b_resized.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Graphic <span className="text-grey">Designing</span></h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Unlock the power of visual communication with our expert graphic design services.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>

            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={{ height: '500px', width: '500px' }}
                    >
                        <source src="/images/beliefs/video_editing.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Video <span className="text-grey">Editing</span></h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Polish and refine your videos with our professional video editing services.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>

            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={{ height: '500px', width: '500px' }}
                    >
                        <source src="/images/beliefs/reel.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Reels</h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Create engaging and memorable short videos with our reel production services.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>

            <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={{ height: '500px', width: '500px' }}
                    >
                        <source src="/images/beliefs/film_production.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h3 className="text-4xl sm:text-60xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Screen <span className="text-grey">Replacement</span></h3>
                <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Transform on-screen displays with flawless screen replacement, allowing for dynamic storytelling and immersive interactions in your videos and films.</h5>
                <div className="text-center sm:text-start">
                    <button onClick={scrolltojoinus}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Beliefs;
