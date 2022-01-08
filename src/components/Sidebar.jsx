import React from 'react'

const Sidebar = ({topAnime}) => {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map(list => (
                    <a 
                    key={list.mal_id}
                    href={list.url} 
                    target="_blank"
                    rel="noreferrer"
                    >
                        {list.title}
                    </a>
                ))}
               
                
            </nav>
        </aside>
    )
}

export default Sidebar
