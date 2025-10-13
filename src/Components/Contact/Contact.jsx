import React, { useState,useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [isSubmit, setiSubmit] = useState(false);
  const [state, handleSubmit] = useForm("xwpngqwv");
   useEffect(() => {
    if (state.succeeded) {
      setiSubmit(true);
    }
  }, [state.succeeded]); 

  return (
    <div className="h-screen w-full pt-13 bg-[#080809] text-white flex flex-col items-center  md:pt-7 px-4 sm:px-0">
      <p className="text-center mb-3 text-3xl md:text-5xl font-Merriweather font-bold">Get in Touch</p>

      <div className="w-full md:w-2/5  bg-gray-900 bg-opacity-80 rounded-xl shadow-lg  p-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-1 md:space-y-1.5">
          <label htmlFor="name" className="text-lg font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="rounded-md px-4 py-2 bg-gray-800  focus:border-violet-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition"
          />

          <label htmlFor="email" className="text-lg font-medium">
            Email Address:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="rounded-md px-4 py-2 bg-gray-800  focus:border-violet-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="text-lg font-medium">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="rounded-md px-4 py-2 bg-gray-800 resize-y focus:border-violet-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-4 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold font-mono rounded-2xl py-2 ring-1 ring-violet-500 transition"
          >
            Send
          </button>
        </form>

        {isSubmit &&(
          <p className="text-white text-2xl pt-2 font-AlanSans">Thanks for joining</p>
        ) }
      </div>
    </div>
  );
}

export default Contact;
