import classNames from 'classnames';

import { LabelPremiumIcon } from '../../CustomIcon';
import ArtistName from '../../ArtistName';
import TitleCard from '../TitleCard';
import ImageCard from '../ImageCard';

function InformationCard({ children, className, data = {}, largeSize = false, isShowTimeRelease = false }) {
    const classes = classNames(className);

    const isVip = data?.streamingStatus === 2; // Type VIPS

    return (
        <section className="flex items-center justify-start">
            {children}
            <div className="flex items-center flex-grow">
                <div className="mr-[10px] flex-shrink-0">
                    <ImageCard className={classes} src={data?.thumbnailM || data.thumbnail} />
                </div>
                <div className="w-0 flex-grow flex-shrink pr-[10px]">
                    <div className="flex items-start">
                        <TitleCard className={`${largeSize ? '!text-[18px font-bold' : 'text-[14px]'}`}>
                            {data?.title}
                        </TitleCard>
                        {/* Show labels VIPS */}
                        {isVip && (
                            <i className="ml-[8px]">
                                <LabelPremiumIcon width="56px" height="14px" />
                            </i>
                        )}
                    </div>
                    <ArtistName
                        mediumSize={largeSize}
                        smallSize={!largeSize}
                        className="mt-[3px]"
                        artistData={data?.artists}
                    />
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
