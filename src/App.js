import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';


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

  return (
    <div className="App">
      <button onClick={() => getAllSongs()}>Get All Songs!</button>
      <MusicTable songData = {songs} />
      <SearchBar songData = {songs} setSongs={setSongs} />
    </div>
  );
}

export default App;
