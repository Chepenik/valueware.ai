"use client"

import React, { useState } from 'react';
import Head from 'next/head';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submit form data to FormSubmit API
    fetch("https://formsubmit.co/ajax/valueware@proton.me", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify({
        email,
        phone,
        message  
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log("Submission successful");
        setShowModal(true);
      })
      .catch(error => console.log(error));

    // Reset form fields  
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact form for getting in touch with us." /> 
      </Head>

      <section className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-blue-400">
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label htmlFor="email" className="text-lg mb-2">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email" 
            required
          />
        
          <label htmlFor="phone" className="text-lg mb-2 mt-4">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone"
            required
          />
        
          <label htmlFor="message" className="text-lg mb-2 mt-4">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 h-24 resize-none focus:outline-none focus:border-blue-500"
            placeholder="Enter your message"
            required  
          ></textarea>
        
          <button 
            type="submit" 
            className="mt-4  bg-blue-300 hover:bg-green-400 text-white py-2 px-6 rounded-full focus:outline-none"
          >
            Send
          </button>
        </form>
      </section>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Your info has been submitted. We will be in touch!</h3>
            <button 
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-300 hover:bg-green-400 text-white py-2 px-4 rounded-full focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;