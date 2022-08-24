import React from "react";
// interface Iprops {
//     name: string,
//     images: string
//     details: string,
//     status: string,
//     launches: string

// }
import { Link } from "react-router-dom";
const Card = ({ name, images, details, status, launches }) => {
  return (
    <div className="lg:w-1/4 md:w-1/3 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block hover:scale-105
          transform transition duration-300 ease-out"
          src={images.large}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {status}
          </h3>
        </div>
        <p className="mt-1 text-xs">{details.substr(0, 110)}</p>
        <div className="flex-col mt-2">
          {launches.length === 0 ? (
            "No Launch Available"
          ) : (
            <>
              <Link to={`/launch/${launches[0]}`}>
                <h1 className="text-indigo-400 text-sm hover:text-indigo-800">
                  {launches[0]}
                </h1>
              </Link>
              <Link to={`/launch/${launches[1]}`}>
                <h1 className="text-indigo-400 text-sm hover:text-indigo-800">
                  {launches[1]}
                </h1>
              </Link>
              <Link to={`/launch/${launches[2]}`}>
                <h1 className="text-indigo-400 text-sm hover:text-indigo-800">
                  {launches[3]}
                </h1>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
