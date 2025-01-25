"use client"
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Let's Collaborate</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white transition-all"
                placeholder=" "
                required
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 top-3 text-[#717171] pointer-events-none transition-all"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white transition-all"
                placeholder=" "
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 top-3 text-[#717171] pointer-events-none transition-all"
              >
                Email
              </label>
            </div>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white h-40 resize-none transition-all"
              placeholder=" "
              required
            />
            <label 
              htmlFor="message" 
              className="absolute left-4 top-3 text-[#717171] pointer-events-none transition-all"
            >
              Message
            </label>
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#ED9911] hover:bg-[#ffbf69] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500 animate-fade-in">
            Message sent successfully! 🎉
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;