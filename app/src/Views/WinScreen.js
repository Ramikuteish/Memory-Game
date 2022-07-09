import { Link } from "react-router-dom";
import "./winScreen.css";

function WinScreen() {
  return (
    <>
      <img
        className="winScreen_img"
        src="https://media.istockphoto.com/vectors/winner-message-word-bubble-in-retro-pop-art-style-on-blue-background-vector-id1135369578?k=20&m=1135369578&s=612x612&w=0&h=nPrM4y7U8H6WTh-I5xjIy1tAHzbC9YOPVl9jsNuOTmo="
        alt=""
      />

      <section className="winScreen_section">
        <span className="spanY">Y</span>
        <span className="spanO">O</span>
        <span className="spanU">U</span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span className="spanW">W</span>
        <span className="spanI">I</span>
        <span className="spanN">N</span>
        <br />
        <br />
        <p className="winScreen_p">
          You got 10 moves!
          <br />
          You earned 2 knowledge points.
        </p>
        <div className="winScreen_div">00:00</div>
      </section>

      <Link className="winScreen_a" to="/">
        play again
      </Link>
    </>
  );
}

export default WinScreen;
