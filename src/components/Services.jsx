import React from "react";

const Services = () => {
  return (
    <div className="px-4 py-6 max-w-screen-lg mx-auto bg-gray-100">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-6">
          Our Services
        </h1>
        <p className="text-lg text-gray-700">
          LocomotionX offers a variety of services designed to make your train
          travel experience seamless and enjoyable. We provide up-to-date train
          schedules and help you explore exciting travel destinations along the
          way.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1: Train Schedules */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Train Schedules
          </h2>
          <p className="text-lg text-gray-600">
            We provide an extensive and accurate train schedule database to help
            you plan your journey. Search for trains between any two stations
            across the country and stay informed with real-time updates.
          </p>
        </div>

        {/* Service 2: Travel Destinations */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Travel Destinations
          </h2>
          <p className="text-lg text-gray-600">
            We offer a unique feature that allows you to discover popular
            tourist destinations along your train journey. Plan your trip around
            exciting attractions and scenic routes to enhance your travel
            experience.
          </p>
        </div>

        {/* Service 3: User-Friendly Interface */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            User-Friendly Interface
          </h2>
          <p className="text-lg text-gray-600">
            Our platform is designed to be intuitive and easy to use. Whether
            you're a first-time traveler or a seasoned explorer, LocomotionX
            makes it easy to search, plan, and book your train journeys and
            discover travel destinations.
          </p>
        </div>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-3xl font-extrabold text-indigo-600 mb-6">
          Why Choose LocomotionX?
        </h2>
        <p className="text-lg text-gray-700">
          At LocomotionX, we are committed to making your train travel
          experience smooth and enjoyable. With accurate schedules, a vast
          collection of tourist destinations, and a user-friendly interface, we
          make it easy to explore the country by train. Join us and discover the
          best of train travel!!
        </p>
      </section>
    </div>
  );
};

export default Services;
