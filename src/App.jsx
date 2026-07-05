import { Suspense, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("player.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <div className="border border-red-500  max-w-[1200px] mx-auto flex justify-between items-center p-4 mt-4">
          <h1> Available Player</h1>

          <div>
            <button>Available</button>
            <button>
              Selected <span>0</span>
            </button>
          </div>
        </div>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
        <SelectedPlayers></SelectedPlayers>
      </div>

      {/* available players */}
    </>
  );
}

export default App;
