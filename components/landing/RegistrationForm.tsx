"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Request failed");

      alert("Message sent successfully");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#050B1E] text-white py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-[#FE0241] mb-4">
            CONTACT US
          </p>

          <h2 className="text-4xl md:text-5xl font-[outfit] leading-tight mb-6">
            Let’s Take Flight Together
          </h2>

          <p className="text-white/80 mb-10 max-w-md">
            Ready to elevate your aviation operations? Reach out today, and let’s discuss how Aerotech can assist you in achieving your aviation goals. 
          </p>

          <div className="space-y-5 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#FE0241]" />
              contact@jetlineaviator.com
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#FE0241]" />
              +91 XXXXX XXXXX
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#FE0241]" />
              Global Operations • India & International
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 shadow-xl backdrop-blur"
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-white/70">First Name</label>
            <input
              name="firstName"
              type="text"
              required
              disabled={loading}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-[#FE0241] transition disabled:opacity-60"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-white/70">Last Name</label>
            <input
              name="lastName"
              type="text"
              required
              disabled={loading}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-[#FE0241] transition disabled:opacity-60"
              placeholder="Doe"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-white/70">Email</label>
            <input
              name="email"
              type="email"
              required
              disabled={loading}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-[#FE0241] transition disabled:opacity-60"
              placeholder="john@example.com"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-white/70">Subject</label>
            <input
              name="subject"
              type="text"
              required
              disabled={loading}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-[#FE0241] transition disabled:opacity-60"
              placeholder="Consulting Inquiry"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-sm text-white/70">Message</label>
            <textarea
              name="message"
              required
              disabled={loading}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-[#FE0241] transition min-h-[120px] resize-y disabled:opacity-60"
              placeholder="Tell us about your requirements..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#FE0241] text-white font-semibold transition
                         hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default RegistrationForm;
