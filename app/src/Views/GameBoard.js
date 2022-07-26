import { Link } from "react-router-dom";
import "./gameBoard.css";
import Card from "../Components/Card";
import { useState } from "react";

function GameBoard() {
  const cards = [
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
    "https://cdn.pixabay.com/photo/2022/04/29/17/48/lofoten-7164179__480.jpg",
  ];

  const [clicks, setClicks] = useState(0);
  if (clicks % 2 === 0) {
    // console.log(clicks);
  }

  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const cardComponents = cards.map((card, index) => {
    console.log(selected[index]);
    return (
      <Card
        img={card}
        key={index}
        selected={selected[index]}
        click={() => {
          setClicks(clicks + 1);
          selected[index] = !selected[index];
          setSelected(selected);
        }}
      />
    );
  });
  // console.log(cardComponents);
  return (
    <section className="section">
      <h1 className="gameBoard__titel">
        DO <br />
        YOU <br />
        REMEMBER
      </h1>
      <main className="gameBoard__main ">{cardComponents}</main>
      <footer className="gameBoard__footer">
        <div className="timer">00:00</div>
        <div className="moves">{clicks}</div>
        <Link className="gameBoard__a" to="/">
          back
        </Link>
      </footer>
    </section>
  );
}
export default GameBoard;
