import React from "react";

const About = () => {
  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
      <section className="flex flex-col md:flex-row justify-between items-center text-justify space-y-8 md:space-y-0 md:gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="home.jpg" // Your actual image path
            alt="LocomotiveX"
            className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            We are LocomotiveX
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to LocomotiveX, the ultimate solution for train travel
            enthusiasts! Our website was created with the aim of providing a
            convenient and hassle-free experience for people who love to explore
            new places by train.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            We understand the importance of efficient travel planning,
            especially when it comes to exploring tourist destinations via
            train. That's why we offer a comprehensive search engine that allows
            you to search for train routes and schedules between any two
            stations in the country, and even find tourist destinations along
            the way.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Our team of developers, designers, and travel experts have worked
            hard to create a user-friendly platform that caters to the needs of
            all travelers, from college students to seasoned adventurers. We
            believe that everyone deserves to have access to reliable and
            accurate information when planning their train journeys, which is
            why we strive to provide the most up-to-date information possible.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            At LocomotiveX, we are passionate about train travel and we want to
            share our enthusiasm with you. Whether you're looking to explore new
            places or simply want to plan a comfortable and convenient journey,
            we are here to help you every step of the way.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Thank you for choosing LocomotiveX for all your train travel needs.
            We hope you have a fantastic journey!
          </p>
        </div>
      </section>

      <section className="mt-12 text-justify">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why LocomotiveX?
        </h2>
        <p className="text-lg text-gray-600">
          Our website, LocomotiveX, established in 2025, is a section of your
          larger website project focused on providing a convenient and
          user-friendly way for travelers to search for trains between stations
          and tourist destinations. As a college student, I have identified a
          gap in the market for a website that specifically caters to train
          travel and tourism, and have created a platform that addresses this
          need.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          LocomotiveX offers a unique service that combines train travel and
          tourism, providing users with the ability to search for trains that
          connect them to popular tourist destinations. This feature is
          particularly useful for travelers who are looking to plan their
          itinerary and want to include train travel as part of their journey.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          By using LocomotiveX, travelers can search for trains between stations
          and tourist destinations, making it easier for them to plan their trip
          and find the most convenient and cost-effective way to travel. The
          website's search functionality is designed to be easy to use, with
          clear and concise information provided to help users make informed
          decisions about their travel plans.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Overall, LocomotiveX is an innovative and practical addition to your
          larger website project, offering a valuable service to travelers who
          are looking for a convenient way to plan their train travel and
          tourism itinerary.
        </p>
      </section>
    </div>
  );
};

export default About;
