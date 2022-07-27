import { Link } from "react-router-dom";
import "./gameBoard.css";
import Card from "../Components/Card";
import { useState } from "react";

function GameBoard() {
  const cards = [
    "https://www.memozor.com/jeux/jquery/emoji_1/image7.png",
    "https://www.memozor.com/jeux/jquery/emoji_1/image10.png",

    "https://i.pinimg.com/564x/c1/dc/42/c1dc42a15bb6611410acedc8a0716a1a--happy-smiley-face-smiley-faces.jpg",

    "https://www.memozor.com/jeux/jquery/emoji_1/image7.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1VNE4wucEZZNUqEycTxGdTJthyJ_IOhHJnafJtJjLVLWLO6Ko9UQnRN0W6WbzgNCXb4&usqp=CAU",
    "https://as1.ftcdn.net/v2/jpg/02/15/08/80/1000_F_215088044_Ow0pypSekAamu3jZJnkRtfAyKj6KVlKj.jpg",
    "https://i.pinimg.com/564x/c1/dc/42/c1dc42a15bb6611410acedc8a0716a1a--happy-smiley-face-smiley-faces.jpg",
    "https://pbs.twimg.com/media/CxjE1eOUoAAwBbk.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1VNE4wucEZZNUqEycTxGdTJthyJ_IOhHJnafJtJjLVLWLO6Ko9UQnRN0W6WbzgNCXb4&usqp=CAU",
    "https://www.memozor.com/jeux/jquery/emoji_1/image10.png",
    "https://pbs.twimg.com/media/CxjE1eOUoAAwBbk.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/15/08/80/1000_F_215088044_Ow0pypSekAamu3jZJnkRtfAyKj6KVlKj.jpg",
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
