import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ArtistName from '../ArtistName';
import BoxContent from '../BoxContent';
import CardImage from '../CardImage';
import TitleMusic from '../TitleMusic';

function PlayLists({
    data,
    className,
    title,
    isSlider = false,
    isShowTitlePlaylist = false,
    isShowArtists = false,
    isHeader = false,
    isSeeAll = false,
    ...passProps
}) {
    const playlistsClasses = classNames('flex mx-[-14px] LM:mx-[-12px] overflow-x-hidden', {
        [className]: className,
    });

    return (
        <BoxContent title={title} isHeader={isHeader} isSeeAll={isSeeAll}>
            <div className={playlistsClasses} {...passProps}>
                {data?.map((items, index) => {
                    const getPathNamePlaylists = items?.link?.split('/')[2];

                    return (
                        <div key={index} className="w-[20%] flex-shrink-0 ML:w-[25%] LM:px-[12px] px-[14px]">
                            <div className="w-full">
                                <Link to={`/playlist/${getPathNamePlaylists}/${items?.encodeId}`}>
                                    <div className="w-full h-full">
                                        <CardImage
                                            className="h-0 pb-[100%] overflow-hidden"
                                            src={items?.thumbnailM}
                                            borderRadius="5px"
                                            isScale
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-[12px]">
                                <div
                                    className={`${
                                        isShowTitlePlaylist
                                            ? 'font-bold text-purple-text-primary'
                                            : 'max-h-[37.22px] font-medium text-purple-text-items overflow-hidden'
                                    } text-[14px] leading-[1.33] whitespace-pre-wrap`}
                                >
                                    {isShowTitlePlaylist ? (
                                        <TitleMusic to={`/playlist/${getPathNamePlaylists}/${items?.encodeId}`}>
                                            {items?.title}
                                        </TitleMusic>
                                    ) : (
                                        <span className="whitespace-pre-wrap">{items?.sortDescription}</span>
                                    )}
                                </div>
                                {isShowArtists && (
                                    <ArtistName
                                        className="mt-[4px] max-h-[37.22px] overflow-hidden"
                                        artistData={items?.artists}
                                        mediumSize
                                        isWrap
                                    ></ArtistName>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </BoxContent>
    );
}

PlayLists.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
};

export default PlayLists;
