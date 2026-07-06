import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasesPlayers, removePlayer }) => {
  // console.log(purchasesPlayers);
  return (
    <div>
      {purchasesPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
