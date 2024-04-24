import { Fragment } from 'react';

import { TimeTracker } from '../../components/TimeComponent';
import { ImageCard, MusicCard } from '../../components/Card';
import BoxContent from '../../components/BoxContent';
import CustomLink from '../../components/CustomLink';
import ArtistName from '../../components/ArtistName';

function NewReleaseAlbum({ data = {} }) {
    return (
        <>
            {/* if there is new song released */}
            <div className="flex">
                {data?.newRelease && (
                    <div className="w-[33.33%] LX:w-1/2 flex-shrink-0 mr-[28px]">
                        <BoxContent className="!mt-[0]" title="Mới Phát Hành" isHeader>
                            <div className="w-full p-[16px] bg-purple-bg-blur-color rounded-[12px]">
                                <CustomLink className="block w-full">
                                    <div className="flex w-full">
                                        {/* Show thumbnail of song */}
                                        <div className="w-[151px] flex-shrink-0">
                                            <ImageCard
                                                borderRadius="5px"
                                                className="size-[151px]"
                                                src={data?.newRelease?.thumbnailM}
                                            />
                                        </div>
                                        <div className="my-[6px] ml-[16px] flex-grow">
                                            <div className="text-purple-text-items text-[12px] font-medium">
                                                {/* Show type of song */}
                                                <span>{data?.newRelease?.textType}</span>
                                                {/* Show title music */}
                                                <p className="mt-[12px] mb-[2px] text-[14px] text-purple-text-primary font-bold line-clamp-2 leading-[1.37]">
                                                    <span className="whitespace-pre-line">
                                                        {data?.newRelease?.title}
                                                    </span>
                                                </p>
                                                {/* Show names of artists */}
                                                <ArtistName
                                                    className="line-clamp-2 mb-[12px] !font-medium"
                                                    artistData={data?.newRelease?.artists}
                                                    isWrap
                                                />
                                                {/* Show time release */}
                                                <TimeTracker timestamps={data?.newRelease?.releasedAt / 1000} getFull />
                                            </div>
                                        </div>
                                    </div>
                                </CustomLink>
                            </div>
                        </BoxContent>
                    </div>
                )}
                {/* if there is no song new release then width = 100% */}
                <div className={`${data?.newRelease ? 'w-[66.66%] LX:w-1/2' : 'w-full'} flex-grow`}>
                    {data?.sections?.map((items, index) => {
                        // Default have two columns to show songs
                        let col1, col2;

                        const isEnoughLength = items?.items?.length > 5;

                        if (items?.sectionType === 'song') {
                            col1 = items?.items?.slice(0, 3); // Copy three elements to get data from api
                            col2 = items?.items?.slice(3, 6); // Copy three elements to get data from api
                        }

                        return (
                            <Fragment key={index}>
                                {items?.sectionType === 'song' && (
                                    <BoxContent
                                        className="!mt-[0]"
                                        title={items?.title}
                                        isHeader
                                        // isSeeAll={isEnoughLength ? true : false}
                                    >
                                        <div className="flex mx-[-14px] LM:mx-[-12px]">
                                            <div
                                                className={`flex-grow flex-shrink-0 w-1/2 ${
                                                    data?.newRelease ? 'LX:w-full' : ''
                                                } px-[14px] LM:px-[12px]`}
                                            >
                                                <div className="w-full">
                                                    <MusicCard data={col1} />
                                                </div>
                                            </div>
                                            <div
                                                className={`flex-grow flex-shrink-0 w-1/2 ${
                                                    data?.newRelease ? 'LX:hidden' : ''
                                                } px-[14px] LM:px-[12px]`}
                                            >
                                                <div className="w-full">
                                                    <MusicCard data={col2} />
                                                </div>
                                            </div>
                                        </div>
                                    </BoxContent>
                                )}
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default NewReleaseAlbum;
