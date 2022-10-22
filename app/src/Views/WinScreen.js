import { Link, useLocation } from "react-router-dom";
import "./winScreen.css";

function WinScreen() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <img
        className="winScreen__img"
        src="https://media.istockphoto.com/vectors/winner-message-word-bubble-in-retro-pop-art-style-on-blue-background-vector-id1135369578?k=20&m=1135369578&s=612x612&w=0&h=nPrM4y7U8H6WTh-I5xjIy1tAHzbC9YOPVl9jsNuOTmo="
        alt="winScreen__img"
      />

      <section className="winScreen__section">
        <span className="spanY">Y</span>
        <span className="spanO">O</span>
        <span className="spanU">U</span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span className="spanW">W</span>
        <span className="spanO2">O</span>
        <span className="spanN">N</span>
        <br />
        <br />
        <p className="winScreen__p">
          You got {location.state.clicks} moves!
          <br />
        </p>
        <div className="winScreen__div">
          Your time was {location.state.timer} second
        </div>
      </section>

      <Link className="winScreen__a" to="/">
        play again
      </Link>
    </>
  );
}

export default WinScreen;
