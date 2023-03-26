import React, { useState } from 'react';


const AddNewSong = (props) => {

    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            releaseDate: releaseDate,
        };
        console.log(newPost)
        props.createNewSong(newPost)
        }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add New Song</label>
                </div>
                <div>
                    <label>Title</label>
                    <input type = 'text' value={title} onChange = {(event) => setTitle(event.target.value)} />
                </div>
                <div>
                    <label>Album</label>
                    <input type = 'text' value={album} onChange = {(event) => setAlbum(event.target.value)} />
                </div>
                <div>
                    <label>Artist</label>
                    <input type = 'text' value={artist} onChange = {(event) => setArtist(event.target.value)} />
                </div>
                <div>
                    <label>Genre</label>
                    <input type = 'text' value={genre} onChange = {(event) => setGenre(event.target.value)} />
                </div>
                <div>
                    <label>Release Date</label>
                    <input type = 'date' value={releaseDate} onChange = {(event) => setReleaseDate(event.target.value)} />
                </div>
                <button type = 'submit'>Add</button>
            </form>
        </div>
     );
}
 
export default AddNewSong;