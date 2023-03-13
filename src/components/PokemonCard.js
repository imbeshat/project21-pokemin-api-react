import React from "react";
import "react-toastify/dist/ReactToastify.css";

const PokemonCard = ({ data }) => {
	return (
		<>
			{!data
				? "Not Found"
				: data.map((pokemon) => {
						return (
							<div key={pokemon.id} className="mx-auto rounded-2xl bg-slate-800 p-2 flex flex-col items-center">
								<div className="flex flex-col my-3">
									<h1 className="text-white text-5xl mb-2">{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h1>
									<h3 className="text-2xl">
										Type: {pokemon.types[0]?.type.name[0].toUpperCase() + pokemon.types[0]?.type.name.slice(1).toLowerCase()}
									</h3>
								</div>
								<hr className="w-[80%] my-3" />
								<div className="w-[60%] flex flex-col md:flex-row items-center justify-between my-4">
									<img className="w-[180px] md:w-[300px]" src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
									<div className="text-left">
										<h2 className="text-2xl my-3">Pokemon Stats: </h2>
										<h3>Base Experience: {pokemon.base_experience}</h3>
										<h3>Ability: {pokemon.abilities[0].ability.name}</h3>
										<h3>Hidden Ability: {pokemon.abilities[1].ability.name}</h3>
										<h3>
											Height: {pokemon.height / 10} <em>m</em>
										</h3>
										<h3>
											Weight: {pokemon.weight / 10} <em>kg</em>
										</h3>
										<h3>Speed: {pokemon.stats[5].base_stat}</h3>
										<h3>HP: {pokemon.stats[0].base_stat}</h3>
										<h3>Attack: {pokemon.stats[1].base_stat}</h3>
										<h3>Defense: {pokemon.stats[2].base_stat}</h3>
										<h3>Special-Attack: {pokemon.stats[3].base_stat}</h3>
										<h3>Special-Defense: {pokemon.stats[4].base_stat}</h3>
									</div>
								</div>
							</div>
						);
				  })}
		</>
	);
};

export default PokemonCard;
