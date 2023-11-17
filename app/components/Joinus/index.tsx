"use client";

import React, { useState } from 'react';
import { db } from '../firebase/config';

const Join = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [work, setWork] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form inputs
        if (!name || !email || !contact || !work) {
            setError('All fields are required');
            return;
        }

        try {
            await db.collection('DD_email_notify').add({ name, email, contact, work });
            setName('');
            setEmail('');
            setContact('');
            setWork('');
            setMessage('Thanks for subscribing!');
            setError(''); // Clear the error message on success
        } catch (error) {
            console.error('Error adding email: ', error);
            setMessage('Failed to subscribe. Try again later.');
        }
    };

    return (
        <div className="bg-joinus my-32" id="joinus">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">JOIN US</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> UPLIFT YOUR BUSINESS TO<br /> A NEW LEVEL</h2>
                    <p className="text-lightblack text-base font-normal">Our sales team will get back to you as soon as possible.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <form className="" onSubmit={handleSubscribe}>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="grid grid-cols-1 gap-6">
                                <label htmlFor="name" className="sr-only">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="my-4 py-4 sm:text-xl text-black rounded-full bg-lightgrey pl-4 focus:outline-none bg-emailbg focus:text-black"
                                    placeholder="Name"
                                    autoComplete="off"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {/* Repeat this structure for other form inputs */}
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <label htmlFor="email" className="sr-only">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="my-4 py-4 sm:text-xl text-black rounded-full bg-lightgrey pl-4 focus:outline-none bg-emailbg focus:text-black"
                                    placeholder="Email"
                                    autoComplete="off"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <label htmlFor="contact" className="sr-only">Contact No.:</label>
                                <input
                                    type="tel"
                                    id="contact"
                                    className="my-4 py-4 sm:text-xl text-black rounded-full bg-lightgrey pl-4 focus:outline-none bg-emailbg focus:text-black"
                                    placeholder="Contact No."
                                    autoComplete="off"
                                    required
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="options" className="sr-only">Choose an option:</label>
                                <div className='relative'>
                                <select
            id="options"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className="my-4 py-4 sm:text-xl text-black rounded-full bg-lightgrey pl-4 pr-8 appearance-none focus:outline-none bg-emailbg focus:text-black border-none w-full"
        >
                                    <option value="" disabled>Why do you want to contact us?</option>
                                    <option value="option1">Marketing Campaign</option>
                                    <option value="option2">Media Production</option>
                                    <option value="option3">Website Development</option>
                                    <option value="option4">Other</option>
                                </select>
                                
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="joinButton w-full text-xl text-white font-semibold text-center rounded-full bg-blue hover:bg-btnblue py-4"
                            >
                                Join!
                            </button>
                        </div>
                        <p className="text-center mt-2 opacity-300 text-sm">{message}</p>
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Join;
