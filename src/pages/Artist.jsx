import { useParams } from 'react-router-dom';

function Artist() {
    const { nameArtist } = useParams();

    console.log(nameArtist);

    return <h1>Artist Page</h1>;
}

export default Artist;
