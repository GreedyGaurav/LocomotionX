import React from "react";

// Function to convert date from 'dd-mm-yyyy' to 'yyyymmdd'
const formatDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return `${year}${month}${day}`; // Returns 'yyyyMMdd' format
};

const TrainCard = ({ train }) => {
  // Dynamically format the date
  const formattedDate = formatDate(train.train_date);

  const bookingUrl = `https://www.makemytrip.com/railways/listing?classCode=CC&className=AC%20Chair%20Car&date=${formattedDate}&destStn=${encodeURIComponent(
    train.to
  )}&srcStn=${encodeURIComponent(train.from)}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 transition duration-300 ease-in-out hover:shadow-lg w-full max-w-4xl mx-auto relative">
      {/* Train Name & Number */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-800">
        <div className="text-lg sm:text-xl font-semibold">
          {train.train_name}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-0">
          #{train.train_number}
        </div>
      </div>

      {/* Run Days */}
      <div className="text-xs sm:text-sm text-green-600 font-medium mt-2">
        Departs on: {train.run_days.join(", ")}
      </div>

      {/* Train Timing & Stations */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 space-y-4 sm:space-y-0">
        {/* From Station */}
        <div className="w-full sm:w-auto text-gray-700">
          <p className="font-semibold text-gray-800">
            {train.from_station_name}
          </p>
          <p className="text-xs text-gray-500">
            {train.from_sta}, {train.from_day}
          </p>
        </div>

        {/* Duration */}
        <div className="flex flex-col items-center text-gray-500">
          <p className="text-xs sm:text-sm">{train.duration}</p>
          <div className="w-16 sm:w-20 h-[1px] bg-gray-300 my-1"></div>
        </div>

        {/* To Station */}
        <div className="w-full sm:w-auto text-gray-700 text-left sm:text-right">
          <p className="font-semibold text-gray-800">{train.to_station_name}</p>
          <p className="text-xs text-gray-500">
            {train.to_sta ? train.to_sta : "Timing not available"},{" "}
            {train.to_day}
          </p>
        </div>
      </div>

      {/* Book Ticket Button */}
      <div className="mt-8 flex justify-center sm:justify-end">
        <a
          target="_blank"
          href={bookingUrl}
          className="bg-blue-600 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out w-full sm:w-auto sm:absolute sm:bottom-4 sm:right-4"
          aria-label="Book Train Tickets"
          rel="noopener noreferrer"
        >
          Book Tickets
        </a>
      </div>
    </div>
  );
};

export default TrainCard;
