const Music = ({title,album,artist,genre,release_date}) => {
    return ( 
        <div>
            <h1>{title}</h1>
            <h2>{album}</h2>
            <h3>{artist}</h3>
            <h4>{genre}</h4>
            <h5>{release_date}</h5>
        </div>
     );
}
 
export default Music;