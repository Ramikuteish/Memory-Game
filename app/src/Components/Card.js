// props
// img : beinhaltet die Vorderseite der Karte
// selected : gibt an ob die Karte ausgewählt würde
// Found : gibt an ob die Karte gefunden würde
// click: ist die Funktion die bei einem Klick auf der Karte ausgefürt werden soll

function Card(props) {
  // die Rückseite der Karte, die Variable ist nicht über props veränderbar
  const backgroundImg =
    "https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg";

  return (
    <>
      <img
        className="gameBoard__img"
        // würde die Karte beriets gefunden oder ist sie ausgewält, zeige die Vorderseite der Karte , ansonsten zeige die Rückseite
        src={props.found || props.selected ? props.img : backgroundImg}
        alt="gameBoard__img"
        // wenn die Karte angeklickt wird, prüfe ob die Karte berites gefunden würde. Wenn nicht führe die Funktion click aus
        onClick={() => {
          // setSelected(!selected); // !false=true  ... !true=false
          if (props.found === false) {
            props.click();
          }
          // if (selected === true) {
          //   setSelected(false);
          // } else {
          //   setSelected(true);
          // }
        }}
      />
    </>
  );
}
export default Card;
