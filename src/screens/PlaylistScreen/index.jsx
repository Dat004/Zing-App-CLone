import { Fragment } from 'react';

import { PlaylistItems } from '../../components/Item';
import DetailsPlaylist from './DetailsPlaylist';

function PlaylistScreen({ data = {} }) {
    return (
        <>
            {/* Show information of playlist */}
            <DetailsPlaylist data={data} />
            {/* Show section bottom data  */}
            {!!data?.data?.length &&
                data?.data?.map((items, index) => {
                    const isTitle = !!items?.title;
                    const isArtist = items?.sectionType === 'artist';
                    const isPlaylist = items?.sectionType === 'playlist';
                    const isArtistOfPlaylist = items?.sectionType === 'playlistOfArtist';
                    const infoArtist = [items?.sectionValue];

                    return (
                        <Fragment key={index}>
                            {(isArtist || isPlaylist || isArtistOfPlaylist) && (
                                <PlaylistItems
                                    data={items?.items || infoArtist}
                                    title={items?.title}
                                    isHeader={isTitle}
                                    isTypeArtist={isArtist || (!!infoArtist?.length && !!!items?.items?.length)}
                                    isShowTitlePlaylist={isPlaylist || isArtistOfPlaylist}
                                    isShowArtists={isPlaylist || isArtistOfPlaylist}
                                />
                            )}
                        </Fragment>
                    );
                })}
        </>
    );
}

export default PlaylistScreen;
