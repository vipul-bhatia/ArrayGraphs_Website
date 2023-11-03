"use client"
import React, { useRef, useEffect } from 'react';

const Index = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly specify the type of videoRef

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
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">WE SEEK EFFICIENCY <br />TO SERVE</h2>
            <div className='grid grid-cols-1 my-16'>
                <div className="video-container">
                    <video
                        ref={videoRef}
                        controls
                        autoPlay
                        muted
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <source src="/images/team/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Index;
