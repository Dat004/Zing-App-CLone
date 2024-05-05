import classNames from 'classnames';

import { LabelPremiumIcon } from '../../CustomIcon';
import { NumberAbbreviated } from '../../Number';
import ArtistName from '../../ArtistName';
import TitleCard from '../TitleCard';
import ImageCard from '../ImageCard';

function InformationCard({
    children,
    className,
    data = {},
    isHideThumbnail = false,
    largeSize = false,
    isShowTypeCard = false,
    isArtistCard = false,
    isHubCard = false,
    isSongCard = false,
    isShowTimeRelease = false,
}) {
    const classes = classNames(className);
    const isVip = data?.streamingStatus === 2; // Type VIPS

    return (
        <section className="flex items-center justify-start">
            {children}
            <div className="flex items-center flex-grow">
                {!isHideThumbnail && (
                    <div className="mr-[10px] flex-shrink-0">
                        <ImageCard
                            rounded={isArtistCard}
                            className={classes}
                            src={data?.thumbnailM || data.thumbnail}
                        />
                    </div>
                )}
                <div className="w-0 flex-grow flex-shrink pr-[10px]">
                    {isShowTypeCard && (
                        <p className="mb-[6px] text-[12px] font-normal text-purple-text-items">
                            {(isArtistCard && 'Nghệ sĩ') || (isSongCard && 'Bài hát') || (isHubCard && 'Thể loại')}
                        </p>
                    )}
                    <div className="flex items-start">
                        <TitleCard className={`${largeSize ? '!text-[18px font-bold' : 'text-[14px]'}`}>
                            {data?.title || data?.name}
                        </TitleCard>
                        {/* Show labels VIPS */}
                        {isVip && (
                            <i className="ml-[8px]">
                                <LabelPremiumIcon width="56px" height="14px" />
                            </i>
                        )}
                    </div>
                    {isSongCard && (
                        <ArtistName
                            mediumSize={largeSize}
                            smallSize={!largeSize}
                            className="mt-[3px]"
                            artistData={data?.artists}
                        />
                    )}
                    {isArtistCard && (
                        <>
                            <NumberAbbreviated className="mt-[2px]" number={data?.totalFollow} />
                            <span className="ml-[4px] text-[12px] text-purple-text-items font-normal leading-[1.33]">
                                quan tâm
                            </span>
                        </>
                    )}
                    {isShowTimeRelease && (
                        <p className="text-[12px] font-medium mt-[3px] leading-[18px] text-purple-text-items">
                            <span>2 ngày trước</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default InformationCard;
