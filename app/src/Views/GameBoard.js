import { Link } from "react-router-dom";
import "./gameBoard.css";
import Card from "../Components/Card";
import { useState } from "react";

function GameBoard() {
  /*
  const cardss = [
    {
      img: "https://www.memozor.com/jeux/jquery/emoji_1/image7.png",
      selected: false,
      found: false,
    },
    {
      img: "https://www.memozor.com/jeux/jquery/emoji_1/image10.png",
      selected: false,
      found: false,
    },
    {
      img: "https://i.pinimg.com/564x/c1/dc/42/c1dc42a15bb6611410acedc8a0716a1a--happy-smiley-face-smiley-faces.jpg",
      selected: false,
      found: false,
    },
    {
      img: "https://www.memozor.com/jeux/jquery/emoji_1/image7.png",
      selected: false,
      found: false,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1VNE4wucEZZNUqEycTxGdTJthyJ_IOhHJnafJtJjLVLWLO6Ko9UQnRN0W6WbzgNCXb4&usqp=CAU",
      selected: false,
      found: false,
    },
    {
      img: "https://as1.ftcdn.net/v2/jpg/02/15/08/80/1000_F_215088044_Ow0pypSekAamu3jZJnkRtfAyKj6KVlKj.jpg",
      selected: false,
      found: false,
    },
    {
      img: "https://i.pinimg.com/564x/c1/dc/42/c1dc42a15bb6611410acedc8a0716a1a--happy-smiley-face-smiley-faces.jpg",
      selected: false,
      found: false,
    },
    {
      img: "https://pbs.twimg.com/media/CxjE1eOUoAAwBbk.jpg",
      selected: false,
      found: false,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1VNE4wucEZZNUqEycTxGdTJthyJ_IOhHJnafJtJjLVLWLO6Ko9UQnRN0W6WbzgNCXb4&usqp=CAU",
      selected: false,
      found: false,
    },
    {
      img: "https://www.memozor.com/jeux/jquery/emoji_1/image10.png",
      selected: false,
      found: false,
    },
    {
      img: "https://pbs.twimg.com/media/CxjE1eOUoAAwBbk.jpg",
      selected: false,
      found: false,
    },
    {
      img: "https://as1.ftcdn.net/v2/jpg/02/15/08/80/1000_F_215088044_Ow0pypSekAamu3jZJnkRtfAyKj6KVlKj.jpg",
      selected: false,
      found: false,
    },
  ];
  */

  // Motive für die Karten 12 Bilder , 6 verschiedene Links(pärchen)
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

  //Die ausgewählten Karten, wir erstellen 2 Variablen [selected, setselected] die aus die Funktion useState zurückbekommen, die variabel selected ist unsere state und die Funktion setSelected kann den State verändern.
  //An die Funktion useState übergeben wir den Standardwert.
  //Für jede Karte gibt es einen Boolean in diesem Array.

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
  ]);

  // Zähler - Mit jeder Klick zählt ein Höher
  const [clicks, setClicks] = useState(0);

  // wenn ein pärchen gefunden würde , werden in State die beiden Karten mit true markiert.
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
    // beinhaltet alle Positionen der ausgewälten Karten.
    //In selectedCards soll alle index, die ausgwälten Karten gespeichert werden.
    const selectedCards = [];
    // console.log(clicks);
    selected.forEach((card, index) => {
      // console.log(card, index);
      // wenn die Karte ausgewält wurde, füge den index zu selectedCards hinzu.
      if (card) selectedCards.push(index);
    });

    // vergleiche die ausgewälten Karten , da immer 2 Karten ausgewält würden, können wir das erste und zweite Element in selectedCards vergleichen.
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
  // erstelle in jede Karte in Cards eine Komponente card und speichere sie als Array in cardComponents
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
