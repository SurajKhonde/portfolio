import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-gray-500 text-white">
      <h1 className="text-5xl font-bold mb-8">Feel Free to Contact Us</h1>

      <form action="#" className="max-w-2xl w-full bg-white p-8 rounded-md shadow-lg mb-16">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-lg font-bold mb-2">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Suraj Khonde" className="w-full p-4 border rounded-md focus:outline-none focus:ring focus:border-black transition duration-300 text-lg  text-black"/>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="surajrkhonde@gmail.com" className="w-full p-4 border rounded-md focus:outline-none focus:ring focus:border-black transition duration-300 text-lg  text-black"/>
        </div>

        <div className="mb-6">
          <label htmlFor="purpose" className="block text-gray-700 text-lg font-bold mb-2">Purpose of Contact:</label>
          <textarea id="purpose" name="purpose" rows="4" placeholder="Write your message here..." className="w-full p-4 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300 transition duration-300 text-lg text-black"></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none text-lg">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
