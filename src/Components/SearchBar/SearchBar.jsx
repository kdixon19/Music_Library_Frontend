import React, { useState } from 'react';
 
const SearchBar = (props) => {
    
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    if (searchInput.length > 0) {
        data = props.songData.filter((el) => {
            return (
                el.title === searchInput ||
                el.release_date === searchInput
            )
        })
        setSongs(data)

    }


    
    return ( 
        <form>
            
        </form>
     );
}
 
export default SearchBar;