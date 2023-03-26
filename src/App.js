import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import AddNewSong from './Components/AddNewSong/AddNewSong';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
    setSongs(response.data)
  }

  async function createNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if (response.status === 201) {
      await getAllSongs();
      let entries = [...songs, newSong]
      setSongs(entries)
    }

  }

  return (
    <div className="App">
      <button onClick={() => getAllSongs()}>Get All Songs!</button>
      <SearchBar songData = {songs} setSongs = {setSongs} />
      <AddNewSong createNewSong = {createNewSong} />
      <MusicTable songData = {songs} />
    </div>
  );
}

export default App;
