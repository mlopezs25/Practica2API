const CharacterItem = (props) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} width="200" />
      <p><strong>Raza:</strong> {props.race}</p>
    </div>
  );
};

export default CharacterItem;

