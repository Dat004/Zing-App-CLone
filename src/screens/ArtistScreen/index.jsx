import { Fragment } from 'react';

import { MVItems, PlaylistItems } from '../../components/Item';
import BoxContent from '../../components/BoxContent';
import NewReleaseAlbum from './NewReleaseAlbum';
import CoverHeader from './CoverHeader';

function ArtistScreen({ data = {} }) {
    return (
        <>
            <CoverHeader data={data} />
            <div className='mt-[30px]'>
                <NewReleaseAlbum data={data} />
                <div className="w-full">
                    {data?.sections?.map((items, index) => {
                        const isTitle = !!items?.title;
                        const isMV = items?.sectionType === 'video'; // Distinguish ui form
                        const isArtist = items?.sectionType === 'artist'; // Distinguish ui form
                        const isPlaylist = items?.sectionType === 'playlist'; // Distinguish ui form
                        const isShowArtists = items?.sectionId === 'aPlaylist'; // Distinguish ui form
                        const isDatePlaylist = items?.itemType === 'release-date'; // Distinguish ui form
                        const isEnoughLength = items?.items?.length > 5; // Check if items have enough length then show btn show more
                
                        return (
                            <Fragment key={index}>
                                {(isPlaylist || isArtist) && (
                                    <PlaylistItems
                                        data={items?.items}
                                        title={items?.title}
                                        isHeader={isTitle}
                                        isShowTitlePlaylist // Show title of playlist
                                        isTypeArtist={isArtist} // Show playlist ui with artist ui type
                                        isShowArtists={isShowArtists} // Show playlist ui have names artists
                                        isShowTimeRelease={isDatePlaylist} // Show playlist ui has been created
                                    />
                                )}
                                {isMV && (
                                    <BoxContent title={items?.title} isHeader>
                                        <div className="flex mx-[-14px] LM:mx-[-12px]">
                                            {items?.items?.slice(0, 3)?.map((vd, id) => (
                                                <div
                                                    className="w-1/3 XM:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]"
                                                    key={id}
                                                >
                                                    <MVItems data={vd} isAvatar />
                                                </div>
                                            ))}
                                        </div>
                                    </BoxContent>
                                )}
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ArtistScreen;
