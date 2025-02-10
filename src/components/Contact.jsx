import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Form submitted!");
  };

  return (
    <div className="px-4 py-6 max-w-screen-lg mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have any questions or suggestions? Reach out to the LocomotiveX team,
          and we'll get back to you as soon as possible!
        </p>
      </section>

      <section>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
