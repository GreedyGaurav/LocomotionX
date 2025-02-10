import React from "react";
import TrainCard from "./TrainCard";
import { useLocation } from "react-router-dom"; // import to get location data

const TrainList = () => {
  const location = useLocation();
  const trains = location.state?.trains || []; // Get trains from the location state

  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Available Trains
      </h3>
      {trains.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {trains.map((train, index) => (
            <TrainCard key={index} train={train} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          No trains found. Try a different search.
        </p>
      )}
    </div>
  );
};

export default TrainList;
