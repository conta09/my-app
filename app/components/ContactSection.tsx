"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(data.error || "Something went wrong");
      }
    } catch (error) {
      setSuccess("Error submitting form");
    } finally {
      setLoading(false);
    }
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
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white transition-all"
                placeholder="Name"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white transition-all"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-lg focus:ring-2 focus:ring-[#ED9911] focus:border-transparent outline-none text-white h-40 resize-none transition-all"
              placeholder="Message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#ED9911] hover:bg-[#ffbf69] text-white font-medium rounded-lg transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && (
          <p className={`mt-4 text-lg ${success.includes("success") ? "text-green-500" : "text-red-500"}`}>
            {success}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
