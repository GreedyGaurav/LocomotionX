import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [dateOfJourney, setDateOfJourney] = useState("");
  const [trainData, setTrainData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading status
  const navigate = useNavigate(); // Navigate hook to redirect to train list page

  const fetchTrainData = async () => {
    setError("");
    setLoading(true); // Set loading state to true when fetching data
    try {
      const response = await axios.get(
        "https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations",
        {
          params: {
            fromStationCode: fromStation,
            toStationCode: toStation,
            dateOfJourney,
          },
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
            "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
          },
        }
      );
      console.log(response.data); // Log to verify API response structure
      setTrainData(response.data.data || []);
      setLoading(false); // Set loading state to false once data is received
      navigate("/trainlist", { state: { trains: response.data.data || [] } }); // Pass the data via state
    } catch (err) {
      console.error(err); // Log error for debugging
      setLoading(false); // Set loading state to false in case of an error
      setError("Failed to fetch train data. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromStation, toStation, dateOfJourney); // Log form data
    if (fromStation && toStation && dateOfJourney) {
      fetchTrainData();
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Search Trains
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="fromStation"
                className="block text-sm font-medium text-gray-700"
              >
                From Station
              </label>
              <input
                type="text"
                id="fromStation"
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
                placeholder="Enter departure station"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="toStation"
                className="block text-sm font-medium text-gray-700"
              >
                To Station
              </label>
              <input
                type="text"
                id="toStation"
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
                placeholder="Enter destination station"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Journey
              </label>
              <input
                type="date"
                id="date"
                value={dateOfJourney}
                onChange={(e) => setDateOfJourney(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Search
              </button>
            </div>
          </form>

          {loading && (
            <div className="flex justify-center mt-4">
              <div className="w-16 h-16 border-4 border-t-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
