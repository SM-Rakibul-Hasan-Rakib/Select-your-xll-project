import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div>
      <div className="border-2 border-gray-400 flex justify-between rounded-xl items-center p-5 mt-5">
        <div className="flex justify-between items-center  ">
          <img
            className="h-[100px] w-[100px] rounded-xl"
            src={player["player-image"]}
            alt=""
          />
          <div className=" ml-3">
            <h1 className="text-2xl font-bold">{player["player-name"]}</h1>
            <p className="text-xs">{player["player-role"]}</p>
          </div>
        </div>
        <div onClick={handleRemove}>
          <img src="https://i.ibb.co.com/1fVGXtmj/Vector-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
