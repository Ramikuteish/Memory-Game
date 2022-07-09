import { Link } from "react-router-dom";
import "./gameBoard.css";

function GameBoard() {
  return (
    <>
      <h1 className="gameBoard_titel">
        DO <br />
        YOU <br />
        REMEMBER
      </h1>
      <main className="gameBoard_main ">
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
        <img
          className="gameBoard_img"
          src="https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg"
          alt=""
        />
      </main>
      <footer className="gameBoard_footer">
        <div className="timer">00:00</div>
        <div className="points">00/00</div>
        <Link className="gameBoard_a" to="/">
          back
        </Link>
      </footer>
    </>
  );
}

export default GameBoard;
