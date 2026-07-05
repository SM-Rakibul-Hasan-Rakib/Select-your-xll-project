import { Suspense, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("player.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar availableBalance={availableBalance}></Navbar>
        <div className="border border-red-500  max-w-[1200px] mx-auto flex justify-between items-center p-4 mt-4">
          <h1 className="font-bold text-2xl"> Available Player</h1>

          <div className="font-bold">
            <button
              onClick={() => setToggle(true)}
              className={` py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""} `}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}
            >
              Selected <span>(0)</span>
            </button>
          </div>
        </div>

        {toggle === true ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AvailablePlayers
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              playersPromise={playersPromise}
            ></AvailablePlayers>
          </Suspense>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>

      {/* available players */}
    </>
  );
}

export default App;
