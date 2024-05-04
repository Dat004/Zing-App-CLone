import PropTypes from 'prop-types';
import { useRef } from 'react';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import { PiEquals } from 'react-icons/pi';
import { LuMusic } from 'react-icons/lu';

import { UserListMusicPlaylist } from '../../../context';
import Checkbox from '../../InputSlider/InputCheckbox';
import { DurationTime } from '../../TimeComponent';
import InformationCard from './InformationCard';
import { NumberOutline } from '../../Number';
import CustomLink from '../../CustomLink';

function MusicCards({
    data = [],
    className,
    smallCard = false,
    isShowTimeRelease = false,
    isMusicIcon = false, // Default is false, if true then show icon on left thumnail music
    isSuggesttion = false, // Default is false, if true then show state ranking on left thumnail music
    isShowRanking = false, // Default is false, if true then show ranking numbers on left thumnail music
    isAllowSellect = false, // Default is false, if true then allow select music to add playlists on left thumnail music
    isShowNameAlbum = false, // Default is false, if true then show name of album
    isShowAlbumNumber = false, // Default is false, if true then show album numbers on left thumnail music
    isShowStateRanking = false, // Default is false, if true then show suggestion music on left thumnail music
    isShowRightCard = false,
    isShowLeftCard = false,
    isShowDurationTimeMusic = false,
}) {
    const cardMusicRef = useRef([]);
    const [state, dispatch, handle] = UserListMusicPlaylist();

    const handleSelectMusic = (e, index) => {
        if (e.target.checked) {
            cardMusicRef.current[index].classList.add('bg-purple-bg-select-box'); // add effect on songs selected
            dispatch(handle.addMusic(data[index]));
        } else {
            cardMusicRef.current[index].classList.remove('bg-purple-bg-select-box'); // add effect on songs selected
            dispatch(handle.removeMusic(data[index].encodeId));
        }
    };

    return (
        <>
            {data?.map((items, index) => {
                const isAlbum = !!items?.album?.title;
                let count = index;

                return (
                    <div
                        ref={(ref) => (cardMusicRef.current[index] = ref)}
                        key={index}
                        className="w-full group/cards hover:bg-purple-bg-btn-alpha border-b border-solid border-purple-bd-secondary-color rounded-[3px]"
                    >
                        <section className="relative w-full">
                            <div className="w-full p-[10px]">
                                <div className="flex items-center">
                                    {/* Left Card */}
                                    <div
                                        className={`w-[50%] MS:w-full ${
                                            smallCard || !isAlbum ? 'flex-grow' : 'flex-grow-0'
                                        }`}
                                    >
                                        <InformationCard
                                            isShowTimeRelease={isShowTimeRelease}
                                            className={className}
                                            data={items}
                                        >
                                            {isShowLeftCard && (
                                                <div className="mr-[10px]">
                                                    {isMusicIcon && (
                                                        <span>
                                                            <i className="text-[14px] text-purple-text-items">
                                                                <LuMusic />
                                                            </i>
                                                        </span>
                                                    )}

                                                    {isAllowSellect && (
                                                        <>
                                                            <span
                                                                className={`group-hover/cards:hidden ${
                                                                    !!state.length ? 'hidden' : 'block'
                                                                }`}
                                                            >
                                                                {isShowAlbumNumber ? (
                                                                    <span className="ml-[3px] mr-[4px] text-[14px] text-purple-text-items font-medium">
                                                                        <span className="leading-[1.29]">
                                                                            {++count}
                                                                        </span>
                                                                    </span>
                                                                ) : (
                                                                    <i className="text-[14px] text-purple-text-items">
                                                                        <LuMusic />
                                                                    </i>
                                                                )}
                                                            </span>
                                                            <span
                                                                className={`${
                                                                    !!state.length ? 'block' : 'hidden'
                                                                } group-hover/cards:block`}
                                                            >
                                                                <Checkbox
                                                                    data-index={index}
                                                                    handleChange={handleSelectMusic}
                                                                    className="checked:border-purple-bd-white-color"
                                                                />
                                                            </span>
                                                        </>
                                                    )}

                                                    {isSuggesttion && (
                                                        <div className="flex items-center justify-center w-[83px]">
                                                            <span className="text-[14px] text-purple-text-items font-medium">
                                                                Gợi ý
                                                            </span>
                                                        </div>
                                                    )}

                                                    {isShowRanking && (
                                                        <div className="flex items-center">
                                                            <div
                                                                className={`${
                                                                    smallCard
                                                                        ? 'w-[32px]'
                                                                        : 'min-w-[32px] text-center w-[65px]'
                                                                }`}
                                                            >
                                                                <NumberOutline
                                                                    isFirst={index === 0}
                                                                    isSecond={index === 1}
                                                                    isThird={index === 2}
                                                                >
                                                                    {++count}
                                                                </NumberOutline>
                                                            </div>
                                                            {isShowStateRanking && (
                                                                <div className="flex flex-col items-center">
                                                                    {items?.rakingStatus === 0 ? (
                                                                        <i className="text-[18px] text-purple-text-items">
                                                                            <PiEquals />
                                                                        </i>
                                                                    ) : (
                                                                        <>
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
                                                                        </>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </InformationCard>
                                    </div>

                                    {/* Center Card */}
                                    {isShowNameAlbum && isAlbum && (
                                        <div className="flex justify-start flex-shrink flex-grow w-0 MS:hidden">
                                            <p className="text-[12px] text-purple-text-items">
                                                <CustomLink isHover isUnderline>
                                                    {items?.album?.title}
                                                </CustomLink>
                                            </p>
                                        </div>
                                    )}

                                    {/* Right Card */}
                                    {isShowRightCard && (
                                        <div className="ml-[10px]">
                                            {isShowDurationTimeMusic && (
                                                <div className="flex justify-end flex-shrink-0 min-w-[66px]">
                                                    <p className="flex items-center justify-center min-w-[46px] ">
                                                        <DurationTime
                                                            duration={items?.duration}
                                                            isMilitaryTime
                                                            isFontColorDark
                                                        />
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                );
            })}
        </>
    );
}

MusicCards.propTypes = {
    data: PropTypes.array,
    className: PropTypes.string,
    smallCard: PropTypes.bool,
    isShowTimeRelease: PropTypes.bool,
    isMusicIcon: PropTypes.bool,
    isSuggesttion: PropTypes.bool,
    isShowRanking: PropTypes.bool,
    isAllowSellect: PropTypes.bool,
    isShowNameAlbum: PropTypes.bool,
    isShowAlbumNumber: PropTypes.bool,
    isShowStateRanking: PropTypes.bool,
    isShowRightCard: PropTypes.bool,
    isShowLeftCard: PropTypes.bool,
    isShowDurationTimeMusic: PropTypes.bool,
};

export default MusicCards;
