import React, { useState } from 'react';
 
const SearchBar = (props) => {
    
    const [searchInput, setSearchInput] = useState("");


    function handleSubmit (event) {
        event.preventDefault();
        let data = props.songData.filter((el) => {
            return (
                el.title === searchInput ||
                el.release_date === searchInput ||
                el.artist === searchInput ||
                el.album === searchInput ||
                el.genre === searchInput
            )
        });
        props.setSongs(data)
    }


    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type = 'text' value={searchInput} onChange = {(event) => setSearchInput(event.target.value)} />
            <button type = 'submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;