import React, { useContext } from 'react';

const ListMusicPlaylist = React.createContext();

function UserListMusicPlaylist() {
    return useContext(ListMusicPlaylist);
}

export { UserListMusicPlaylist };
export default ListMusicPlaylist;
