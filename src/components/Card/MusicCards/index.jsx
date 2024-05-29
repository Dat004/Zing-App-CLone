import PropTypes from 'prop-types';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import { PiEquals } from 'react-icons/pi';
import { LuMusic } from 'react-icons/lu';
import classNames from 'classnames';

import Checkbox from '../../InputSlider/InputCheckbox';
import { DurationTime } from '../../TimeComponent';
import InformationCard from './InformationCard';
import { NumberOutline } from '../../Number';
import CustomLink from '../../CustomLink';

function MusicCards({
    data = {},
    listSelectData = [],
    id = 0,
    className,
    onGetMusic = () => {},
    onSelectMusic = () => {},
    smallCard = false,
    isSelected = false,
    isPlayed = false,
    isPlaying = false,
    isTypePlaylist = false,
    isMusicIcon = false, // Default is false, if true then show icon on left thumnail music
    isSuggesttion = false, // Default is false, if true then show state ranking on left thumnail music
    isAllowSelect = false, // Default is false, if true then allow select music to add playlists on left thumnail music
    isShowRanking = false, // Default is false, if true then show ranking numbers on left thumnail music
    isShowNameAlbum = false, // Default is false, if true then show name of album
    isShowTimeRelease = false,
    isShowAlbumNumber = false, // Default is false, if true then show album numbers on left thumnail music
    isShowStateRanking = false, // Default is false, if true then show suggestion music on left thumnail music
    isShowRightCard = false,
    isShowLeftCard = false,
    isShowSeparator = false,
    isShowDurationTimeMusic = false,
}) {
    let count = id;
    const isAlbum = !!data?.album?.title;

    const cardWrapperStyles = classNames('w-full group/cards hover:bg-purple-bg-btn-alpha rounded-[5px]', {
        'bg-purple-bg-select-box': isSelected,
        'border-b border-solid border-purple-bd-secondary-color': isShowSeparator,
        'sticky z-50 top-0 bg-bg-purple hover:!bg-bg-purple': isPlaying,
        'opacity-50 hover:opacity-100': isPlayed,
        'p-[10px]': !isTypePlaylist,
        'p-[8px]': isTypePlaylist,
    });

    const leftCardStyles = classNames('w-[50%] MS:w-full', {
        'flex-grow': smallCard || !isShowNameAlbum,
        'flex-grow-0': !smallCard || isShowNameAlbum,
    });

    const leftItemStyles = classNames({
        'w-[32px]': smallCard,
        'min-w-[32px] text-center w-[65px]': !smallCard,
    });

    const leftIconStyles = classNames(
        'min-w-[14px] block max-w-[62px] text-center group-hover/cards:opacity-0 group-hover/cards:invisible',
        {
            'opacity-0 invisible': !!listSelectData.length,
            block: !!!listSelectData.length,
        },
    );

    const wrapperCheckboxStyles = classNames(
        'absolute top-[50%] left-[50%] min-w-[14px] translate-y-[-50%] translate-x-[-50%] group-hover/cards:block',
        {
            block: !!listSelectData.length,
            hidden: !!!listSelectData.length,
        },
    );

    return (
        <div className={cardWrapperStyles}>
            <section className="relative w-full">
                <div className="flex items-center justify-between">
                    {/* Left Card */}
                    <div className={leftCardStyles}>
                        <InformationCard
                            onClick={onGetMusic}
                            isShowTimeRelease={isShowTimeRelease}
                            className={className}
                            data={data}
                            isSongCard
                        >
                            {isShowLeftCard && (
                                <div className="relative mr-[10px]">
                                    {isMusicIcon && (
                                        <span>
                                            <i className="text-[14px] text-purple-text-items">
                                                <LuMusic />
                                            </i>
                                        </span>
                                    )}

                                    {isAllowSelect && (
                                        <>
                                            <span className={leftIconStyles}>
                                                {isShowAlbumNumber ? (
                                                    <span className="text-[14px] text-purple-text-items font-medium">
                                                        <span className="leading-[1.29]">{++count}</span>
                                                    </span>
                                                ) : (
                                                    <i className="text-[14px] text-purple-text-items">
                                                        <LuMusic />
                                                    </i>
                                                )}
                                            </span>
                                            <span className={wrapperCheckboxStyles}>
                                                <Checkbox
                                                    data-index={id}
                                                    checked={isSelected}
                                                    handleChange={onSelectMusic}
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
                                            <div className={leftItemStyles}>
                                                <NumberOutline
                                                    isFirst={id === 0}
                                                    isSecond={id === 1}
                                                    isThird={id === 2}
                                                >
                                                    {++count}
                                                </NumberOutline>
                                            </div>
                                            {isShowStateRanking && (
                                                <div className="flex flex-col items-center">
                                                    {data?.rakingStatus === 0 ? (
                                                        <i className="text-[18px] text-purple-text-items">
                                                            <PiEquals />
                                                        </i>
                                                    ) : (
                                                        <>
                                                            {/* rakingStatus is used to check if a song has changed on the chart? */}
                                                            {data?.rakingStatus > 0 ? (
                                                                <i className="text-[18px] text-up-color">
                                                                    <VscTriangleUp />
                                                                </i>
                                                            ) : (
                                                                <i className="text-[18px] text-down-color">
                                                                    <VscTriangleDown />
                                                                </i>
                                                            )}
                                                            <span className="text-[12px] font-bold text-purple-text-primary">
                                                                {data?.rakingStatus}
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
                                <CustomLink
                                    to={data?.album?.link?.replace('album', 'playlist')?.split('.')[0]}
                                    isHover
                                    isUnderline
                                >
                                    {data?.album?.title}
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
                                        <DurationTime duration={data?.duration} isMilitaryTime isFontColorDark />
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

MusicCards.propTypes = {
    data: PropTypes.object,
    id: PropTypes.number,
    className: PropTypes.string,
    smallCard: PropTypes.bool,
    isActiveMusic: PropTypes.bool,
    isTypePlaylist: PropTypes.bool,
    isShowTimeRelease: PropTypes.bool,
    isMusicIcon: PropTypes.bool,
    isSuggesttion: PropTypes.bool,
    isShowRanking: PropTypes.bool,
    isAllowSelect: PropTypes.bool,
    isShowNameAlbum: PropTypes.bool,
    isShowAlbumNumber: PropTypes.bool,
    isShowStateRanking: PropTypes.bool,
    isShowRightCard: PropTypes.bool,
    isShowLeftCard: PropTypes.bool,
    isShowDurationTimeMusic: PropTypes.bool,
};

export default MusicCards;
