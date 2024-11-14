import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Detail() {
  const [pokemon, setPokemon] = useState({});
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const url = queryParams.get("url");
  useEffect(() => {
    async function getPokemon() {
      const call = await fetch(url);
      const data = await call.json();
      setPokemon(data);
    }
    getPokemon();
  }, [url]);
  return (
    <>
      <h3>
        <Link to="/">&lt; Back to Index</Link>
      </h3>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <dl>
        <dt>Height:</dt>
        <dd>{pokemon.height}</dd>
        <dt>Weight:</dt>
        <dd>{pokemon.weight}</dd>
        <dt>Abilities:</dt>
        <dd>
          <ul>
            {pokemon.abilities?.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </dd>
      </dl>
    </>
  );
}
