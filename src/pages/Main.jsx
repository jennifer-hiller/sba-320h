import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const location = useLocation(); // Use useLocation to get the current location
  const queryParams = new URLSearchParams(location.search);
  const currentSearch = queryParams.get("currentSearch");

  useEffect(() => {
    async function getPokemon() {
      const url = currentSearch
        ? currentSearch
        : "https://pokeapi.co/api/v2/pokemon/";
      const call = await fetch(url);
      const data = await call.json();
      setPokemon(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    }
    getPokemon();
  }, [currentSearch, location.search]);
  return (
    <>
      <h1>Pokedex</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>
            <Link to={`detail?url=${p.url}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {previous && (
          <Link to={`/?currentSearch=${encodeURIComponent(previous)}`}>
            Previous
          </Link>
        )}
        {next && (
          <Link to={`/?currentSearch=${encodeURIComponent(next)}`}>Next</Link>
        )}
      </div>
    </>
  );
}
