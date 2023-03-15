import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {

  const [songs, setSongs] = useState([{title: 'HOOPTI', album: 'NOIR', artist: 'Smino', genre: 'Hip-Hop/Rap', release_date: '2018-01-01'}]);

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
      <button onClick={getAllSongs()}>Get All Songs!</button>
      <MusicTable songData = {songs} />
    </div>
  );
}

export default App;
