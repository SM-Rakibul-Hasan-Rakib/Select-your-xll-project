import React, { useState } from "react";
import grpImg from "../../assets/group.png";
import flagImg from "../../assets/Vector.png";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasesPlayers,
  setPurchasesPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("USD").join("").split(",").join(""),
    );
    if (availableBalance < playerPrice) {
      toast("Not Enough Balance!");
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasesPlayers([...purchasesPlayers, playerData]);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      {/* এখান থেকে key={index} রিমুভ করা হয়েছে এবং w-96 এর বদলে w-full দেওয়া হয়েছে যেন গ্রিডে সুন্দরভাবে বসে */}
      <div className="card bg-base-100 w-full shadow-sm p-4">
        <figure>
          <img
            className=" object-cover"
            src={player["player-image"]}
            alt="Player"
          />
        </figure>
        <div className="card-body mt-4 p-0">
          <div className="flex">
            <img src={grpImg} alt="Group" />
            <h2 className="card-title ml-2">{player["player-name"]}</h2>
          </div>

          <div className="flex justify-between items-center mt-4 gap-2 border-b-2 border-gray-400 pb-4">
            <div className="flex items-center gap-2">
              <img className="w-[20px] h-[20px]" src={flagImg} alt="Flag" />
              <span className="ml-2">{player["player-country"]}</span>
            </div>
            <button className="btn btn-sm">{player["player-role"]}</button>
          </div>

          <div className="flex justify-between font-bold mt-2">
            <span>Rating</span>
            <span>{player["rating"]}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="font-bold">{player["rating-style"]}</span>
            <span>{player["bowling-style"]}</span>
          </div>

          <div className="card-actions mt-4 flex justify-between items-center">
            <p className="font-bold">Price : ${player.price}</p>
            <button
              className={`btn btn-sm ${isSelected ? "bg-amber-400" : "bg-base-100"}`}
              disabled={isSelected}
              onClick={() => {
                handleSelected(player);
                // const price = Number(
                //   player.price.replace("$", "").replaceAll(",", ""),
                // );
              }}
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
