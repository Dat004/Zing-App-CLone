import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ImageCard, TitleCard } from '../Card';
import { NumberAbbreviated } from '../Number';
import ArtistName from '../ArtistName';
import CustomLink from '../CustomLink';

function PlaylistItems({
    data = [],
    className,
    numberCols = 5, // Default number of columns is 5
    isTypeArtist = false, // Default is false, if true then type artist ui
    isShowTimeRelease = false, // Default is false, if true then show time release
    isShowTitlePlaylist = false, // Defalt is false, if true then show title
    isShowArtists = false, // Defalt is false, if true then show artists
    refElement, // refElement
    ...passProps
}) {
    const playlistsClasses = classNames('flex mx-[-14px] LM:mx-[-12px]', {
        [className]: className,
    });

    return (
        <div className="overflow-x-hidden">
            <div ref={refElement} className={playlistsClasses} {...passProps}>
                {data?.map((items, index) => {
                    const getPathNamePlaylists = items?.link?.split('/')[2];

                    return (
                        <div
                            key={index}
                            className={`w-1/${numberCols} flex-shrink-0 ML:w-[25%] LM:px-[12px] px-[14px]`}
                        >
                            {isTypeArtist ? (
                                // Type of artist
                                <>
                                    <div className="w-full">
                                        <CustomLink className="rounded-[50%]" to={`/artist/${items?.alias}`}>
                                            <div className="w-full h-full rounded-[50%]">
                                                <ImageCard
                                                    className="h-0 pb-[100%] overflow-hidden"
                                                    src={items?.thumbnailM || items?.thumbnail}
                                                    rounded
                                                    isScale
                                                />
                                            </div>
                                        </CustomLink>
                                    </div>
                                    <div className="mt-[15px] text-center">
                                        <p className="max-w-[100%] text-[14px] text-purple-text-primary font-medium">
                                            <CustomLink to={`/artist/${items?.alias}`} isUnderline isHover>
                                                {/* Name artist */}
                                                {items?.name}
                                            </CustomLink>
                                        </p>
                                        <p className="text-[12px] text-purple-text-items font-normal leading-[1.33]">
                                            {/* Total number of follow */}
                                            <NumberAbbreviated number={items?.totalFollow} />
                                            <span className="ml-[4px]">quan tâm</span>
                                        </p>
                                    </div>
                                </>
                            ) : (
                                // Type of albums
                                <>
                                    <div className="w-full">
                                        <CustomLink to={`/playlist/${getPathNamePlaylists}/${items?.encodeId}`}>
                                            <div className="w-full h-full">
                                                <ImageCard
                                                    className="h-0 pb-[100%] overflow-hidden"
                                                    src={items?.thumbnailM || items?.thumbnail}
                                                    borderRadius="5px"
                                                    isScale
                                                />
                                            </div>
                                        </CustomLink>
                                    </div>
                                    <div className="mt-[12px]">
                                        <div
                                            className={`${
                                                // styles if isShowTitlePlaylist is true
                                                isShowTitlePlaylist
                                                    ? 'font-bold text-purple-text-primary'
                                                    : // else
                                                      'line-clamp-2 font-medium text-purple-text-items'
                                            } text-[14px] leading-[1.33] whitespace-pre-wrap`}
                                        >
                                            {/* Show title */}
                                            {isShowTitlePlaylist ? (
                                                <TitleCard to={`/playlist/${getPathNamePlaylists}/${items?.encodeId}`}>
                                                    {items?.title}
                                                </TitleCard>
                                            ) : (
                                                // Show default is description
                                                <span className="whitespace-pre-line">{items?.sortDescription}</span>
                                            )}
                                        </div>
                                        {isShowArtists && (
                                            // Show artist names
                                            <ArtistName
                                                className="mt-[4px] line-clamp-2"
                                                artistData={items?.artists}
                                                smallSize
                                                isWrap
                                            ></ArtistName>
                                        )}
                                        {isShowTimeRelease && items?.releaseDateText && (
                                            // Show time release
                                            <p className="mt-[4px] text-[14px] text-purple-text-items font-normal leading-[1.33]">
                                                <span>{items?.releaseDateText}</span>
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

PlaylistItems.propTypes = {
    data: PropTypes.array,
    countCols: PropTypes.number,
    className: PropTypes.string,
    isShowTitlePlaylist: PropTypes.bool,
    isShowArtists: PropTypes.bool,
};

export default PlaylistItems;
