import React from 'react';
import haji from "../assets/haji_image.jpg";

const Detail = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-6 bg-gray-100 mt-5 gap-10 rounded-lg shadow-xl">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Details</h2>
        <p className="text-lg sm:text-xl mb-2"><strong>Name:</strong> Haji Sarwar Shaikh</p>
        <p className="text-lg sm:text-xl mb-2"><strong>College:</strong> M.A. Rangoon Wala Institute of Hotel Management And Research, Pune</p>
        <p className="text-lg sm:text-xl mb-2"><strong>Class:</strong> T.Y.B.SC. HS</p>
        <p className="text-lg sm:text-xl mb-6"><strong>Subject:</strong> HS 610 Tourism Operations Tutorial</p>
      </div>

      {/* Image */}
      <div className="flex justify-center sm:justify-start">
        <img
          src={haji}
          alt="Profile"
          className="rounded-full mt-4 h-36 w-36 sm:h-48 sm:w-48 transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Detail;
