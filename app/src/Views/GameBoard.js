import { Link } from "react-router-dom";
import "./gameBoard.css";
import Card from "../Components/Card";
import { useState } from "react";

function GameBoard() {
  // Motive für die Karten 12 Bilder , 6 verschidene Links(pärschen)
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
  ]; // Die cards sind aufgedeckt

  // die ausgewälten Karten , wir erstellen 2 variabeln [selected , setselected] die aus die Function usestate züruckbekommen , die Variebl Selected ist unsere state und die function setSelected kann den State verändern.
  // an die Function useState übergeben wir den standart Wert. Für Jede Karte gibt es einen Boleen in diesem Array
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
    false,
  ]); // Die cards sind verdeckt

  // Zähler - Mit jeder Click zählt ein Höher
  const [clicks, setClicks] = useState(0);

  // wenn ein pärchen gefunden würde , werden in State die beiden Karten mit true markiert
  const [found, setFound] = useState([
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
    false,
  ]);

  if (
    // clicks % 2 === 0 &&
    // clicks > 0 &&
    // zähle alle ausgewälte Karten und und mache weiter, wenn genau 2 true ausgewält sind
    selected.filter((element) => element === true).length === 2
  ) {
    // brinhaltet alle Positionen der ausgewälten Karten, in selectedcards soll alle index, die ausgwälten Karten gespeichert werden.
    const selectedCards = [];
    // console.log(clicks);
    selected.forEach((card, index) => {
      // console.log(card, index);
      // wenn die Karte ausgewält wurde, füge den index zu selectedCards hin zu
      if (card) selectedCards.push(index);
    });

    // vergleiche die ausgewälten Karten , da immer 2 Karten ausgewält würden, können wir das erste und zweire Element in selectedCards vergleichen
    if (cards[selectedCards[0]] === cards[selectedCards[1]]) {
      // wenn die Karten gleich sind, markiere sie in den gefundenen karten Found
      found[selectedCards[0]] = true;
      found[selectedCards[1]] = true;
      // spichere das neu state für Found
      setFound(found);
    }
    // gesamte setSelected auf false zurücksetzen
    // setTimeout(
    //   () =>
    setSelected([
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
      false,
    ]);
    //   1500
    // );
  } // nur 2 Cards gleichzeitig aufdecken
  console.log(found);
  // erstelle in Jede Karte in Cards eine Komponente card und speichere sie als Array in cardComponents
  const cardComponents = cards.map((card, index) => {
    // console.log(selected[index]);
    return (
      <Card
        img={card}
        key={index}
        selected={selected[index]}
        found={found[index]}
        click={() => {
          // wenn auf die Karte geklickt wird, erhöhen wir clicks um 1
          setClicks(clicks + 1);
          // wir wechseln selected auf true
          selected[index] = true;
          // und speichern den neuen State für selected
          setSelected(selected);
        }}
      />
    );
  });
  // console.log(cardComponents);
  return (
    <section className="gameBoard__section">
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
