import { useState } from "react";
import DetailsModel from "./DetailsModel";

const Card = ({movie}) => {
  const [click, setClick] = useState(false);

  return (
    <div className="w-[30%] p-3 border-2 border-white rounded-lg">
      <img src={movie.image.original} alt={movie.name} className="w-full h-[75%] bg-purple-500" />
      <div className="mt-5 px-4">
        <h3 className="text-lg font-semibold text-white truncate">
          {movie.name}
        </h3>
        <div className="mt-4 mb-8 flex justify-between items-center">
          <p className="text-base font-medium text-white">
            Rating: {movie.rating.average}
          </p>
          <span className="text-white">.</span>
          <p className="text-base font-medium text-white">
            {movie.premiered}
          </p>
        </div>
        <div className="mb-3 flex justify-center items-center">
          <button
            type="button"
            onClick={() => setClick(true)}
            className="bg-purple-600 py-2 px-12 rounded-lg text-lg font-medium text-white cursor-pointer"
          >
            See Details
          </button>
        </div>
        {click && <DetailsModel movie={movie} onClose={() => setClick(false)} />}
      </div>
    </div>
  );
};

export default Card;
