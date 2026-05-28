import { Link } from "react-router-dom";

const CharacterItem = (props) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to={`/characters/${props.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} width="200" />
        <p><strong>Raza:</strong> {props.race}</p>
      </Link>
    </div>
  );
};

export default CharacterItem;


