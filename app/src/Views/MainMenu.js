import React from "react";
import { Link } from "react-router-dom";
import "./mainMenu.css";

function MainMenu() {
  return (
    <>
      <img
        className="mainMenu__img"
        src="https://image.api.playstation.com/vulcan/ap/rnd/202105/1919/MUZqQPvfXzVJ5WaVn4GVofvw.png"
        alt="Memory__img"
      />

      <h1 className="mainMenu__title">DO YOU REMEMBER</h1>
      <h2 className="mainMenu__secondTitle">About this game</h2>
      <p className="mainMenu__p">
        A free memory game for kids and adults. <br />
        erebral Training. set of couples. <br />
        game of correspondence Are you ready to challenge your daily memory with
        “IMG Memory Game”? <br />
        A great game for exercising your memory! <br />- Find the different
        pairs of cards...
      </p>
      <div className="mainMenu__buttons">
        <Link className="mainMenu__a" to="/game">
          12 CARDS
        </Link>
        <Link className="mainMenu__a" to="/game">
          16 CARDS
        </Link>
        <Link className="mainMenu__a" to="/game">
          20 CARDS
        </Link>
      </div>
    </>
  );
}

export default MainMenu;
