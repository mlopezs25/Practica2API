import { useEffect, useState } from "react";
import axios from "axios";
import CharacterItem from "./CharacterItem";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [links, setLinks] = useState({});
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
  axios
    .get(`https://dragonball-api.com/api/characters?page=${page}&search=${busqueda}`)
    .then((res) => {
      setCharacters(res.data.items || []);
      setLinks(res.data.links || {});
    })
    .catch((err) => console.error(err));
}, [page, busqueda]);


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setPage(1); 
  };

  return (
    <div>
      <h1>Personajes</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <input type="submit" value="Buscar" />
      </form>

      {characters.map((char) => (
        <CharacterItem
          key={char.id}
          name={char.name}
          image={char.image}
          race={char.race}
        />
      ))}

      <div style={{ marginTop: "20px" }}>
        {links?.previous && (
  <button onClick={() => setPage(page - 1)}>
    Página anterior
  </button>
)}

{links?.next && (
  <button onClick={() => setPage(page + 1)} style={{ marginLeft: "10px" }}>
    Página siguiente
  </button>
)}

      </div>
    </div>
  );
};

export default Characters;

