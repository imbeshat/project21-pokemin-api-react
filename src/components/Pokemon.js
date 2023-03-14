import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pokemon = () => {
	const [search, setSearch] = useState("");
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/pikachu");
	const [show, setShow] = useState(false);
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetch(url.toLowerCase())
			.then((res) => res.json())
			.then((data) => {
				setPokemon([data]);
				setShow(true);
			})
			.catch(() => {
				toast.error("Enter correct pokemon name or id!", {
					position: "bottom-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setShow(false);
			});
	}, [url]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (search.trim() === "") {
			toast.error("Please enter a Pokemon name or ID!", {});
		} else {
			setUrl(`https://pokeapi.co/api/v2/pokemon/${search}`);
			setSearch("");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center my-6">
			<h1 className="text-6xl">Search Pokemon</h1>
			<form className="flex flex-row items-center justify-evenly mt-4" onSubmit={handleSubmit}>
				<input
					type="search"
					value={search}
					placeholder="Enter Pokemon name or id to Search"
					className="w-[70%] md:w-[80%] text-lg rounded-md text-black pl-2"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit" onClick={handleSubmit}>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="2em"
						width="2em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
						</g>
					</svg>
				</button>
			</form>
			<div className="w-[90%] md:w-[750px] lg:w-[1000px] mx-auto mt-8 mb-6">{show ? <PokemonCard data={pokemon} /> : "Not Found"}</div>
		</div>
	);
};

export default Pokemon;
