import { useParams } from 'react-router-dom';

function ArtistSongs() {
    const { nameArtist } = useParams();

    console.log(nameArtist);

    return <h1></h1>;
}

export default ArtistSongs;
