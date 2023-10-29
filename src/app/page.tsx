"use client"

import Image from 'next/image';
import valuewarelogo from '../../public/valuewarelogowithouttext.png';
import chep from '../../public/ChepDaddy.png';
import kevinq from '../../public/KevinQ.png';
import React, { useState } from 'react'; 
import Header from './(components)/header';

export default function Page() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      email,
      phone,
      message
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/valueware@proton.me", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data) {
        console.log("Submission successful");
        window.location.href = '/willbeintouch';  
      }
    } catch (error) {
      console.error("Error:", error);
      window.location.href = '/error';
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-500">Your submission is being processed and you will be redirected once we confirm a successful submission.</h3>
          </div>
        </div>
      )}
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-blue-100">
        <h1 id="home" className="text-6xl font-bold mb-4 text-black">Valueware</h1>
        <section className="max-w-3xl text-center text-black">
          <h3 className="text-3xl font-bold mb-4">A Boutique Software Consultancy</h3>
          <h2 id="about" className="text-3xl font-semibold mt-6 mb-3">About Us</h2>
          <p className="text-base mb-4">We don&apos;t take businesses from zero to one; we propel them from one to a hundred.</p>
          <h4 className="text-3xl font-semibold mt-6 mb-3">So what does Valueware do, exactly?</h4>
          <p className="text-base mb-4">
            We dig deep to understand what&apos;s truly driving your revenue. We streamline those critical processes and supercharge them with automation. Helping you sell more, serve better, and scale smarter.
          </p>
          <p className="text-base mb-4">Meet the Visionaries:</p>
          <div className="flex flex-col md:flex-row">
            <a href="https://www.linkedin.com/in/kevinmichale/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image src={kevinq} alt="Kevin Quisumbing" width={200} height={200} className="h-auto rounded-lg mb-8" />
              Kevin Quisumbing, CEO: Merging tech and business strategies.
            </a>
            <br></br>
            <a href="https://www.linkedin.com/in/conorchepenik/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image src={chep} alt="Conor Chepenik" width={200} height={200} className="h-auto rounded-lg mb-8" />
              Conor Chepenik, CTO: Leading our tech innovations.
            </a>
          </div>
          <h2 className="text-3xl font-semibold mt-6 mb-3">Elevate Your Business with Automation!</h2>
          <h2 id="contact" className="text-2xl font-semibold mb-4">Contact Us</h2>
        
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
    </main>
  </>
  );
};  