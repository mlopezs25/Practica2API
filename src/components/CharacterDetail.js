import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dragonball-api.com/api/characters/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} width="250" />

      <p><strong>Raza:</strong> {character.race}</p>
      <p><strong>Ki máximo:</strong> {character.ki}</p>
      <p><strong>Descripción:</strong> {character.description}</p>

      <h2>Transformaciones</h2>

      {character.transformations?.map((t) => (
        <div key={t.id} style={{ marginBottom: "20px" }}>
          <h3>{t.name}</h3>
          <img src={t.image} alt={t.name} width="200" />
          <p><strong>Ki:</strong> {t.ki}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterDetail;
