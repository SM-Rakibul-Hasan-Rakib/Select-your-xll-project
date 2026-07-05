import React, { use } from "react";
import grpImg from "../../assets/group.png";
import flagImg from "../../assets/Vector.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {playerData.map((player, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img
              // className="w-full h-[300px] object-cover"
              src={player["player-image"]}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mt-4">
            <div className="flex">
              <img src={grpImg} alt="Group" />
              <h2 className="card-title ml-2">
                Players Name : {player["player-name"]}
              </h2>
            </div>

            <div className="flex justify-between items-center mt-4 gap-2 border-b-2 border-gray-400 pb-4">
              <div className="flex items-center gap-2">
                <img className="w-[20px] h-[20px]" src={flagImg} alt="Flag" />
                <span className="ml-2">{player["player-country"]}</span>
              </div>
              <button className="btn"> All Rounded</button>
            </div>

            <div className="flex justify-between font-bold">
              <span>Rating</span>
              <span>{player["rating"]}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold">{player["rating-style"]}</span>
              <span>{player["bowling-style"]}</span>
            </div>

            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="font-bold">Price : {player["price"]}</p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
