import Music from '../Music/Music';

const MusicTable = (props) => {
    return ( 
        <table>
            <tbody>
                {props.songData.map((data) => {
                    return (
                        <tr>
                            <Music title = {data.title} album = {data.album} artist = {data.artist} genre = {data.genre} release_date = {data.release_date} />
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default MusicTable;