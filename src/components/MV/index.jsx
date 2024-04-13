import classNames from 'classnames';

import TimeConversion from '../TimeConversion';
import CustomLink from '../CustomLink';
import ArtistName from '../ArtistName';
import TitleMusic from '../TitleMusic';
import { ImageCard } from '../Card';

function MV({
    data = {},
    className,
    numberCols = 3, // Default number of columns is 3
    isAvatar = false, // Default is false, if true then show avatar
    ...passProps
}) {
    const mvClasses = classNames(`w-1/${numberCols} flex-shrink-0 px-[14px] LM:px-[12px]`, {
        [className]: className,
    });

    return (
        <div className={mvClasses} {...passProps}>
            <div className="w-full">
                <div className="w-full relative">
                    <div className="w-full h-full rounded-[5px]">
                        <ImageCard
                            borderRadius="5px"
                            className="h-0 pb-[56.25%] overflow-hidden"
                            src={data?.thumbnailM}
                            isScale
                        />
                    </div>
                    <div className="absolute right-[5px] bottom-[5px]">
                        <p className="flex items-center justify-center py-[3px] px-[5px] bg-purple-bg-layer-time rounded-[3px]">
                            <TimeConversion
                                className="text-purple-text-primary !font-normal"
                                duration={data?.duration}
                                isMilitaryTime
                            />
                        </p>
                    </div>
                </div>
                <div className="mt-[10px]">
                    <div className="flex">
                        {isAvatar && (
                            <div className="mr-[10px] flex-shrink-0">
                                <CustomLink to="">
                                    <ImageCard src={data?.artist?.thumbnail} small rounded />
                                </CustomLink>
                            </div>
                        )}
                        <div className="w-0 flex-grow flex-shrink">
                            <TitleMusic>{data?.title}</TitleMusic>
                            <div className="mt-[3px]">
                                <ArtistName artistData={data?.artists} smallSize />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MV;
