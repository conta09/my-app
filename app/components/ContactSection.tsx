"use client";
import React from "react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Let&apos;s Collaborate</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white transition-all"
                placeholder="Name"
                required
                disabled
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white transition-all"
                placeholder="Email"
                required
                disabled
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white h-40 resize-none transition-all"
              placeholder="Message"
              required
              disabled
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#ED9911] hover:bg-[#ffbf69] text-white font-medium rounded-lg transition-colors duration-300"
            disabled
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
