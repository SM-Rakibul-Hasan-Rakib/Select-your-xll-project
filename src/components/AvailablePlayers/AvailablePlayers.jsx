import React, { use } from "react";
import PlayerCard from "../PlayerCard.jsx/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
}) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {playerData.map((player, index) => (
        // key={index} এখানেই থাকবে
        <PlayerCard
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
          key={index}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
