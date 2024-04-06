import TimeConversion from '../TimeConversion';
import BoxContent from '../BoxContent';
import CustomLink from '../CustomLink';
import ArtistName from '../ArtistName';
import TitleMusic from '../TitleMusic';
import CardImage from '../CardImage';

function MV({
    data = {},
    className,
    isAvatar = false, // Default is false, if true then show avatar
    ...passProps
}) {
    return (
        // <BoxContent title={title} isHeader={isHeader} isSeeAll={isSeeAll}>
        //     <section className="overflow-x-hidden">
        //         <div ref={refElement} className={artistsLayoutClasses} {...passProps}>
        //             {data.map((item, index) => {
        //                 return (
        //                     <div
        //                         className={`w-1/${numberCols} ML:w-1/4 flex-shrink-0 px-[14px] LM:px-[12px]`}
        //                         key={index}
        //                     >
        <>
            <div className="w-full" {...passProps}>
                <div className="relative">
                    <div className="w-full h-full rounded-[5px]">
                        <CardImage
                            borderRadius="5px"
                            className="h-0 pb-[56.25%] overflow-hidden"
                            src={data?.thumbnailM}
                            isScale
                        />
                    </div>
                    <div className="absolute right-[10px] bottom-[10px]">
                        <div className="py-[3px] px-[5px] bg-purple-bg-layer-time rounded-[3px]">
                            <TimeConversion
                                className="text-purple-text-primary !font-normal"
                                duration={data?.duration}
                                isMilitaryTime
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[10px]">
                <div className="flex">
                    {isAvatar && (
                        <div className="mr-[10px] flex-shrink-0">
                            <CustomLink to="">
                                <CardImage src={data?.artist?.thumbnail} small rounded />
                            </CustomLink>
                        </div>
                    )}
                    <div className="w-0 flex-grow flex-shrink">
                        <TitleMusic>{data?.title}</TitleMusic>
                        <p className="mt-[3px]">
                            <ArtistName smallSize />
                        </p>
                    </div>
                </div>
            </div>
        </>
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //     </section>
        // </BoxContent>
    );
}

export default MV;
