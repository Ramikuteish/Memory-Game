// props
// img : beinhaltet die vorderseite der Karte
// selected : gibt an ob die Karte ausgewählt würde
// Found : gibt an ob die Karte gefunden würde
// click: ist die Funktion die bei einem Klick auf der Karte ausgefürt werden soll

function Card(props) {
  // die rückseite der Karte, die Variable ist nicht über props verändebar
  const backgroundImg =
    "https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg";

  return (
    <>
      <img
        className="gameBoard__img"
        // würde die Karte beriets gefunden oder ist sie ausgewält, zeige die vorderseite der Karte , ansonsten zeige die rückseite
        src={props.found || props.selected ? props.img : backgroundImg}
        alt="gameBoard__img"
        // wenn die Karte angeklickt wird, prüfe ob die Karte berites gefunden würde.wenn nicht führe die Function click aus
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
