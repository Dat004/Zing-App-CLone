import { useReducer } from 'react';

import { addMusic, removeMusic } from '../reducers/actions';
import reducer, { initState } from '../reducers';
import { ListMusicPlaylist } from '../Context';

function ListMusicPlaylistProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState.listMusic);
    const handle = {
        addMusic,
        removeMusic,
    };
    const value = [state, dispatch, handle];

    return <ListMusicPlaylist.Provider value={value}>{children}</ListMusicPlaylist.Provider>;
}

export default ListMusicPlaylistProvider;
