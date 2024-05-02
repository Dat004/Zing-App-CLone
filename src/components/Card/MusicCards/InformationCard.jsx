import classNames from 'classnames';

import ArtistName from '../../ArtistName';
import TitleCard from '../TitleCard';
import ImageCard from '../ImageCard';

function InformationCard({ children, className, data = {}, largeSize = false, isShowTimeRelease = false }) {
    const classes = classNames(className);

    return (
        <section className="flex items-center justify-start">
            {children}
            <div className="flex items-center flex-grow">
                <div className="mr-[10px] flex-shrink-0">
                    <ImageCard className={classes} src={data?.thumbnailM || data.thumbnail} />
                </div>
                <div className="w-0 flex-grow flex-shrink pr-[10px]">
                    <TitleCard className={`${largeSize ? '!text-[18px font-bold' : 'text-[14px]'}`}>
                        {data?.title}
                    </TitleCard>
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
