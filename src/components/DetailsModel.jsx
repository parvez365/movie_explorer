import React from "react";
import { RxCross2 } from "react-icons/rx";

const DetailsModel = ({movie, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900/60">
      <div className="w-5xl h-120 p-4 bg-gray-100">
        <div className=" flex justify-end">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-400 cursor-pointer flex justify-center items-center"
          >
            <RxCross2 className="text-2xl text-white" />
          </button>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="w-2/4 h-100 bg-purple-500">
            <img src={movie.image.original} alt={movie.name}  width="100" height="40" className="w-full h-full"/>
          </div>
          <div className="w-1/2 px-4">
            <h2 className="text-2xl font-bold text-black truncate">
              {movie.name}
            </h2>
            <div className="my-5 flex items-center">
              <h3 className="text-lg font-semibold text-black">Rating: {movie.rating.average}</h3>
              <span className="mx-4 text-black">|</span>
              <h3 className="text-lg font-semibold text-black">{movie.premiered}</h3>
            </div>
            <p className="text-lg font-normal text-black line-clamp-10">{movie.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModel;
