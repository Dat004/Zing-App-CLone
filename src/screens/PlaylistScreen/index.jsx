import { Fragment } from 'react';

import { PlaylistItems } from '../../components/Item';
import BoxContent from '../../components/BoxContent';
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
                                <BoxContent title={items?.title} isHeader={isTitle}>
                                    <PlaylistItems
                                        data={items?.items || infoArtist}
                                        isTypeArtist={isArtist || (!!infoArtist?.length && !!!items?.items?.length)}
                                        isShowTitlePlaylist={isPlaylist || isArtistOfPlaylist}
                                        isShowArtists={isPlaylist || isArtistOfPlaylist}
                                    />
                                </BoxContent>
                            )}
                        </Fragment>
                    );
                })}
        </>
    );
}

export default PlaylistScreen;
