function Card(props) {
  const backgroundImg =
    "https://i.pinimg.com/originals/92/40/b3/9240b39aa3a5a62fa5b621b61ea7ca70.jpg";

  return (
    <>
      <img
        className="gameBoard__img"
        src={props.found || props.selected ? props.img : backgroundImg}
        alt="gameBoard__img"
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
