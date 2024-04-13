import PropTypes from 'prop-types';
import { Fragment, useRef } from 'react';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import { PiEquals } from 'react-icons/pi';
import { LuMusic } from 'react-icons/lu';

import { addMusic, removeMusic } from '../../reducers/actions';
import InputCheckbox from '../InputSlider/InputCheckbox';
import { UserListMusicPlaylist } from '../../Context';
import TimeConversion from '../TimeConversion';
import NumberOutline from '../NumberOutline';
import CustomLink from '../CustomLink';
import ArtistName from '../ArtistName';
import TitleMusic from '../TitleMusic';
import ImageCard from './ImageCard';

function MusicCard({
    data = [],
    isShowRankingNumber = false, // Default is false, if true then show ranking numbers on left thumnail music
    isShowAlbumNumber = false, // Default is false, if true then show album numbers on left thumnail music
    isShowIconMusic = false, // Default is false, if true then show icon music on left thumnail music
    isAllowSelect = false, // Default is false, if true then allow select music to add playlists on left thumnail music
    isShowAlbum = false, // Default is false, if true then show name of album
    isSuggest = false, // Default is false, if true then show suggestion music on left thumnail music
}) {
    const cardElementRef = useRef([]);
    const [state, dispatch] = UserListMusicPlaylist();

    const handleSelect = (e, index) => {
        if (e.target.checked) {
            cardElementRef.current[index].classList.add('!bg-purple-bg-select-box'); // add effect on songs selected
            dispatch(addMusic(data[index])); // add song to the playlists
        } else {
            cardElementRef.current[index].classList.remove('!bg-purple-bg-select-box'); // remove effect on songs deselected
            dispatch(removeMusic(data[index].encodeId)); // remove song to the playlists
        }
    };

    return (
        <Fragment>
            {data?.map((items, index) => {
                let count = index;

                return (
                    <section
                        key={index}
                        ref={(ref) => (cardElementRef.current[index] = ref)}
                        className={`group/card border-b-[1px] border-b-purple-bd-secondary-color hover:bg-purple-bg-btn-alpha`}
                    >
                        <div className="p-[10px] rounded-[4px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center w-[50%] mr-[10px]">
                                    {/* Show suggestion music on left thumnail music */}
                                    {isSuggest && (
                                        <div className="flex items-center justify-center w-[83px] mr-[15px]">
                                            <span className="text-[14px] text-purple-text-items">Gợi ý</span>
                                        </div>
                                    )}
                                    {/* Show ranking numbers on left thumnail music */}
                                    {isShowRankingNumber && (
                                        <div className="flex items-center mr-[15px]">
                                            <div className="flex justify-center items-center min-w-[60px] mr-[5px]">
                                                <NumberOutline
                                                    isFirst={index === 0}
                                                    isSecond={index === 1}
                                                    isThird={index === 2}
                                                >
                                                    {++count}
                                                </NumberOutline>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                {items?.rakingStatus === 0 ? (
                                                    <i className="text-[18px] text-purple-text-items">
                                                        <PiEquals />
                                                    </i>
                                                ) : (
                                                    <Fragment>
                                                        {/* rakingStatus is used to check if a song has changed on the chart? */}
                                                        {items?.rakingStatus > 0 ? (
                                                            <i className="text-[18px] text-up-color">
                                                                <VscTriangleUp />
                                                            </i>
                                                        ) : (
                                                            <i className="text-[18px] text-down-color">
                                                                <VscTriangleDown />
                                                            </i>
                                                        )}
                                                        <span className="text-[12px] font-bold text-purple-text-primary">
                                                            {items?.rakingStatus}
                                                        </span>
                                                    </Fragment>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {/* Allow select music to add playlists on left thumnail music */}
                                    {isAllowSelect && (
                                        <Fragment>
                                            <div
                                                className={`group-hover/card:hidden ${
                                                    state.length ? 'hidden' : 'block'
                                                } min-w-[14px] mr-[10px]`}
                                            >
                                                <div className={`flex items-center justify-center`}>
                                                    {/* Show album numbers on left thumnail music */}
                                                    {isShowAlbumNumber ? (
                                                        <p className="text-[14px] text-purple-text-items font-medium">
                                                            <span className="leading-[1.29]">{++count}</span>
                                                        </p>
                                                    ) : (
                                                        <i className="flex-grow flex-shrink-0 text-[14px] text-purple-text-items">
                                                            <LuMusic />
                                                        </i>
                                                    )}
                                                </div>
                                            </div>
                                            {/* If state has playlist then show input checkbox */}
                                            <div
                                                className={`group-hover/card:block ${
                                                    state.length ? 'block' : 'hidden'
                                                } min-w-[14px] mr-[10px]`}
                                            >
                                                <div className="flex items-center justify-center">
                                                    <span className="relative flex-grow flex-shrink-0">
                                                        <InputCheckbox
                                                            handleChange={handleSelect}
                                                            className="checked:border-purple-bd-white-color"
                                                            id={index}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )}
                                    {/* Show icon music on left thumnail music */}
                                    {isShowIconMusic && (
                                        <div className="min-w-[14px] mr-[10px]">
                                            <div className={`flex items-center justify-center`}>
                                                <i className="flex-grow flex-shrink-0 text-[14px] text-purple-text-items">
                                                    <LuMusic />
                                                </i>
                                            </div>
                                        </div>
                                    )}
                                    <div className="mr-[10px]">
                                        <ImageCard src={items?.thumbnailM} small />
                                    </div>
                                    <div className="w-0 flex-shrink flex-grow">
                                        <TitleMusic>{items?.title}</TitleMusic>
                                        <ArtistName className="mt-[3px]" artistData={items?.artists} smallSize />
                                    </div>
                                </div>
                                {/* Show name of album */}
                                {isShowAlbum && items?.album && (
                                    <div className="flex justify-start flex-shrink flex-grow w-0 MS:hidden">
                                        <p className="text-[12px] text-purple-text-items">
                                            <CustomLink isHover isUnderline>
                                                {/* Title album */}
                                                {items?.album?.title}
                                            </CustomLink>
                                        </p>
                                    </div>
                                )}
                                <div className="flex justify-end flex-shrink-0 min-w-[66px] ml-[10px]">
                                    <p className="flex items-center justify-center min-w-[46px] ">
                                        <TimeConversion duration={items?.duration} isMilitaryTime isFontColorDark />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </Fragment>
    );
}

MusicCard.propTypes = {
    data: PropTypes.array,
    isShowRankingNumber: PropTypes.bool,
    isShowAlbumNumber: PropTypes.bool,
    isAllowSelect: PropTypes.bool,
    isShowAlbum: PropTypes.bool,
    isSuggest: PropTypes.bool,
};

export default MusicCard;
