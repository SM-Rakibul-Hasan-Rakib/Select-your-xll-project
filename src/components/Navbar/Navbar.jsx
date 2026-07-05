import React from "react";
import navImg from "../../assets/logo.png";
import dollerImg from "../../assets/Coin.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div>
      <div className="text-amber-50 max-w-screen-xl mx-auto">
        <div className="navbar ">
          <div className="flex-none"></div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <img src={navImg} alt="Logo" className="w-[60px] h-[60px] " />
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-1  text-black">{availableBalance}</span>
            <span className="mr-1">coins </span>
            <img src={dollerImg} alt="Doller" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
