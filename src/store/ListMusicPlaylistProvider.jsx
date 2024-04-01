import { useReducer } from 'react';

import reducer, { initState } from '../reducers';
import { ListMusicPlaylist } from '../Context';

function  ListMusicPlaylistProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState.listMusic);
    const value = [state, dispatch];

    return <ListMusicPlaylist.Provider value={value}>{children}</ListMusicPlaylist.Provider>;
}

export default ListMusicPlaylistProvider;
