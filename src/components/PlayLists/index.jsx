import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import BoxContent from '../BoxContent';
import CardImage from '../CardImage';

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
                                {/* <div className="relative">
                                    <Link
                                        to={`/playlist/${getPathNamePlaylists}/${items?.encodeId}`}
                                        className="pb-[100%] rounded-[5px]"
                                    >
                                        <div className='absolute top-0 left-0 w-full h-full rounded-[5px] overflow-hidden'>
                                            <CardImage className="" borderRadius="5px" isScale src={items?.thumbnailM} />
                                        </div>
                                    </Link>
                                </div> */}
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
                                <p
                                    className={`${
                                        isShowTitlePlaylist
                                            ? 'font-bold text-purple-text-primary'
                                            : 'max-h-[37.22px] font-medium text-purple-text-items overflow-hidden'
                                    } text-[14px] leading-[1.33] whitespace-pre-wrap`}
                                >
                                    {isShowTitlePlaylist ? (
                                        <Link
                                            to={`/playlist/${getPathNamePlaylists}/${items?.encodeId}`}
                                            className="max-w-[90%] hover:text-link-text-hover"
                                        >
                                            {items?.title}
                                        </Link>
                                    ) : (
                                        <span className="whitespace-pre-wrap">{items?.sortDescription}</span>
                                    )}
                                </p>
                                {isShowArtists && (
                                    <p className="flex flex-wrap mt-[4px] max-h-[37.22px] text-[14px] font-medium text-purple-text-items leading-[1.33] overflow-hidden">
                                        {items?.artists?.map((artist, index) => (
                                            <Link
                                                to={`/artist/${artist?.alias}`}
                                                className="whitespace-nowrap hover:text-link-text-hover hover:underline"
                                                key={artist?.id}
                                            >
                                                {artist?.name}
                                                {index !== items?.artists?.length - 1 && (
                                                    <span className="mr-[4px]">,</span>
                                                )}
                                            </Link>
                                        ))}
                                    </p>
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
