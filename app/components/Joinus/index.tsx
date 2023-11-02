"use client";

import React, { useState } from 'react';
import { db } from '../firebase/config';
const Join = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    
    const handleSubscribe = async (e: any) => {
        e.preventDefault();
      
        // Validate form inputs
        if (!name || !email || !contact) {
          setError('All fields are required');
          return;
        }
      
        try {
          await db.collection('arraygraphs_email_notify').add({ name, email, contact });
          setName('');
          setEmail('');
          setContact('');
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
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Uplift Your Business To <br /> A New Level</h2>
                    <p className="text-lightblack text-base font-normal">Our sales team will get back to you as soon as possible.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                <form className="" onSubmit={handleSubscribe}>
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input 
                            type="name"
                            className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                            placeholder="Your name" 
                            autoComplete="off" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="email" 
                            className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                             placeholder="Your email" 
                             autoComplete="off" 
                             value={email}
                             onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <input type="tel" 
                            className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" 
                            placeholder="Your contact no." 
                            autoComplete="off" 
                            value={contact}
                            onChange={e => setContact(e.target.value)}/>
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                                Join!
                            </button>
                        </div>
                    </div>
                    <p className="text-center lg:text-center mt-2 opacity-300 text-sm">{message}</p>
      {error && <p className="text-red-500">{error}</p>}
                </form>
                </div>

            </div>
        </div>
    )
}

export default Join;
