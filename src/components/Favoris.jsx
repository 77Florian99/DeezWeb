import React from 'react';
import FavService from '../FavService';
import {useState} from 'react';
import Track from './Track';

function Favoris(props) {
    
	const [ musics, setMusics ] = useState(FavService.getFavoritesFromStorage());

	function onFavorites(music) {
		FavService.toggleFavorite(music);
		setMusics(FavService.getFavoritesFromStorage());
	}
	return (
		<main className="container mt-3">
			<h1>Mes favoris</h1>
			<p>Liste de mes titres favoris</p>
			<hr />

			{musics.map((music) => (
				<Track key={music.id} music={music} onClick={onFavorites} isFavorite={FavService.isFavorite(music)} />
			))}
		</main>
	);
}

export default Favoris;
