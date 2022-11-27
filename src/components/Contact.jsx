import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/7c17eb9e-9bf3-46d2-a07b-d1ecdaf39c44"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="What's Your Name?"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Can I have your Email?"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <input
            type="text"
            name="book"
            placeholder="Suggest me your favourite book!"
            className="mb-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Any Message you want to send me!"
            rows="10"
            className=" p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Send Me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
