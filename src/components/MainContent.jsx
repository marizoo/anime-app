import React from 'react'
import AnimeCard from './AnimeCard'

const MainContent = ({search, setSearch, onhandleSearch, animeList}) => {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={onhandleSearch}>
                    <input 
                    required
                    type="search" 
                    placeholder='Search for an anime...'
                    value={search}
                    onChange={(ev) => setSearch(ev.target.value)}
                    />
                </form>
            </div>
            <div className="anime-list">
                {animeList.map(anime => (
                    <AnimeCard
                        anime={anime}
                        key={anime.mal_id}
                    />
                ))}
            </div>
        </main>
    )
}

export default MainContent
