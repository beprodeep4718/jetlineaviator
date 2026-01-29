"use client";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return; // extra safety

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
      form.reset(); // ✅ clear fields after success
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-6xl flex items-center justify-center flex-col py-10">
        <h1 className="text-4xl text-center font-[outfit-bold]">
          Let&apos;s Fly High Together
        </h1>
        <p className="font-[outfit] my-6 text-center text-muted-foreground max-w-4xl">
          At Jetlineaviator, we are passionate about connecting the world
          through exceptional aviation services. Whether you&apos;re looking to
          expand your reach, enhance your operations, or explore new
          opportunities in the aviation sector, we&apos;re here to help you soar
          to new heights. Join us on this exciting journey and experience the
          difference that expertise, innovation, and dedication can make.
        </p>
      </div>

      {/* ===== FORM ===== */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-background border border-[#494948] rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-16 shadow-lg"
      >
        {/* First Name */}
        <div className="flex flex-col">
          <label className="mb-2 font-[outfit] text-sm text-[#FE0241]">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            required
            disabled={loading}
            className="w-full px-4 py-2 rounded-md border border-[#d1d5db] bg-transparent outline-none focus:border-[#494948] transition disabled:opacity-60"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="mb-2 font-[outfit] text-sm text-[#FE0241]">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            required
            disabled={loading}
            className="w-full px-4 py-2 rounded-md border border-[#d1d5db] bg-transparent outline-none focus:border-[#494948] transition disabled:opacity-60"
            placeholder="Enter your last name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 font-[outfit] text-sm text-[#FE0241]">
            Email ID
          </label>
          <input
            name="email"
            type="email"
            required
            disabled={loading}
            className="w-full px-4 py-2 rounded-md border border-[#d1d5db] bg-transparent outline-none focus:border-[#494948] transition disabled:opacity-60"
            placeholder="your@email.com"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label className="mb-2 font-[outfit] text-sm text-[#FE0241]">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            required
            disabled={loading}
            className="w-full px-4 py-2 rounded-md border border-[#d1d5db] bg-transparent outline-none focus:border-[#494948] transition disabled:opacity-60"
            placeholder="Subject"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-[outfit] text-sm text-[#FE0241]">
            Message
          </label>
          <textarea
            name="message"
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-md border border-[#d1d5db] bg-transparent outline-none focus:border-[#494948] transition min-h-30 resize-y disabled:opacity-60"
            placeholder="Type your message here..."
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-10 py-3 rounded-full bg-[#FE0241] text-foreground font-[outfit-bold] transition flex items-center gap-2
                       disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
