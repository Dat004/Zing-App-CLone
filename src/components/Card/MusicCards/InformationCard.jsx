import classNames from 'classnames';

import ArtistName from '../../ArtistName';
import TitleCard from '../TitleCard';
import ImageCard from '../ImageCard';

function InformationCard({
    children,
    className,
    data = {},
    mediumImage = false,
    srcImage = '',
    isShowTimeRelease = false,
}) {
    const classes = classNames('size-size-0.4', {
        [className]: className,
    });

    return (
        <section className="flex items-center">
            {children}
            <div className="flex items-center flex-grow">
                <div className="mr-[10px] flex-shrink-0">
                    <ImageCard className={classes} src={data?.thumbnailM || data.thumbnail} />
                </div>
                <div className="w-0 flex-grow flex-shrink pr-[10px]">
                    <TitleCard>{data?.title}</TitleCard>
                    <ArtistName className="mt-[3px]" artistData={data?.artists} smallSize />
                    {isShowTimeRelease && <p className="mt-[3px]"></p>}
                </div>
            </div>
        </section>
    );
}

export default InformationCard;
