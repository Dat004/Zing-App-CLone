import { useParams } from "react-router-dom";

function Playlist() {
    const { idplaylist, nameplaylist } = useParams();

    console.log(idplaylist, nameplaylist);

    return <h1>Playlist PAGE</h1>;
}

export default Playlist;
