import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white py-12" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4" data-aos="flip-down">
          Contact Me
        </h2>
        <form className="space-y-4" data-aos="fade-right">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 rounded"></textarea>
          <button type="submit" className="px-6 py-2 bg-blue-500 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
