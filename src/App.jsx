import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = () => {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");

// to get the top anime list on sidebar
	const getTopAnime = async () => {
		const temp = await fetch (`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());
			
			setTopAnime(temp.top.slice(0, 5));
	}

// for the search list
	const handleSearch = (ev) => {
		ev.preventDefault();

		fetchAnime(search);
	}

// to fetch search
	const fetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());


		setAnimeList(temp.results);
	}

// to get the top anime list on sidebar
	useEffect(() => {
		getTopAnime();
	},[])


	return (
		<div>
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime}
				/>
				<MainContent 
					onhandleSearch={handleSearch}
					search={search}
					setSearch={setSearch}
					animeList={animeList}
				/>
			</div>
		</div>
	)
}

export default App

