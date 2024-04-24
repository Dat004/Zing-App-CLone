import { Fragment } from 'react';
import { FaPlay } from 'react-icons/fa6';

import { TimeTracker, DurationTime } from '../../components/TimeComponent';
import { ImageCard, MusicCard, HeaderCard } from '../../components/Card';
import BoxContent from '../../components/BoxContent';
import ArtistName from '../../components/ArtistName';
import Button from '../../components/Button';

function DetailsPlaylist({ data = {} }) {
    return (
        <div className="flex flex-nowrap LS:flex-wrap w-full">
            <div className="w-[300px] LS:flex-grow LS:w-full flex-shrink-0 pb-[30px]">
                <div className="sticky top-[110px] flex flex-col LS:flex-row">
                    {/* Show thumbail of playlist */}
                    <div className="LS:w-[200px] w-[300px] flex-shrink-0 LS:mr-[20px] overflow-hidden">
                        <ImageCard className="LS:size-large" isScale larger src={data?.thumbnailM} />
                    </div>
                    {/* Show info about playlist */}
                    <div className="flex flex-col w-full LS:mt-0 mt-[12px] LS:text-start text-center">
                        <h3 className="flex text-[20px] text-purple-text-primary font-bold leading-[1.5]">
                            <p className="flex-grow flex-shrink w-0">
                                {/* Show title playlist */}
                                <span className="whitespace-pre-line LS:whitespace-nowrap">{data?.title}</span>
                            </p>
                        </h3>
                        {/* Show info if it's in album type */}
                        {data?.isAlbum ? (
                            <div className="flex items-center justify-center LS:justify-start text-[12px] text-purple-text-items">
                                <ArtistName
                                    className="LS:justify-start justify-center mr-[4px] leading-[1.75]"
                                    artistData={data?.artists}
                                    smallSize
                                    isWrap
                                >
                                    <span className="ml-[4px]">
                                        <span>•</span>
                                        <TimeTracker
                                            className="ml-[4px]"
                                            timestamps={data?.contentLastUpdate}
                                            getYear
                                        />
                                    </span>
                                </ArtistName>
                            </div>
                        ) : (
                            <>
                                {/* Else it isn't in album type */}
                                <p className="text-[12px] text-purple-text-items leading-[1.75]">
                                    <span>Cập nhật:</span>
                                    <TimeTracker className="ml-[4px]" timestamps={data?.contentLastUpdate} getFull />
                                </p>
                                <ArtistName
                                    className="LS:justify-start justify-center leading-[1.75]"
                                    artistData={data?.artists}
                                    smallSize
                                    isWrap
                                />
                            </>
                        )}
                        {/* Show sort description of playlist */}
                        {!data?.isAlbum && data?.sortDescription && (
                            <div className="LS:block hidden">
                                <p className="text-[14px] text-purple-text-items font-normal mt-[16px] mb-[10px]">
                                    <span>Lời tựa</span>
                                    <span className="ml-[4px] text-purple-text-primary line-clamp-3  whitespace-pre-line">
                                        {data?.sortDescription}
                                    </span>
                                </p>
                            </div>
                        )}
                        <div className="LS:mt-auto mt-[16px]">
                            <Button
                                leftIcon={
                                    <i className="text-[16px]">
                                        <FaPlay />
                                    </i>
                                }
                                className="LS:mr-auto LS:ml-0 mx-auto px-[24px] py-[8px] text-[14px] uppercase"
                                primary
                                large
                            >
                                {/* If it's in album type then play it in order, else play it randomly */}
                                {data?.isAlbum ? 'Phát tất cả' : 'Phát ngẫu nhiên'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex-shrink LS:ml-0 ml-[30px]">
                {!data?.isAlbum && data?.sortDescription && (
                    <div className="LS:hidden block">
                        <p className="text-[14px] text-purple-text-items font-normal mt-[16px] mb-[10px]">
                            <span>Lời tựa</span>
                            <span className="ml-[4px] text-purple-text-primary line-clamp-3 whitespace-pre-line">
                                {data?.sortDescription}
                            </span>
                        </p>
                    </div>
                )}
                {/* Album type */}
                {data?.isAlbum ? (
                    <Fragment>
                        <div className="mb-[10px]">
                            <HeaderCard isAllowSort={data?.song?.items?.length > 1} />
                            <MusicCard data={data?.song?.items} isAllowSelect isShowAlbumNumber />
                        </div>
                        <div>
                            <h3 className="mt-[20px] mb-[8px] text-purple-text-primary text-[14px] font-bold leading-[20px]">
                                Thông Tin
                            </h3>
                            <div className="flex items-center">
                                <div className="flex flex-col items-start gap-[8px] mr-[16px] font-normal text-purple-text-items text-[13px]">
                                    <span>Số bài hát</span>
                                    <span>Ngày phát hành</span>
                                    <span>Cung cấp bởi</span>
                                </div>
                                <div className="flex flex-col items-start gap-[8px] font-medium text-purple-text-primary text-[13px]">
                                    <span>{data?.song?.total}</span>
                                    <span>{data?.releaseDate}</span>
                                    <span>{data?.distributor}</span>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    // Else
                    <Fragment>
                        <div className="mb-[10px]">
                            <HeaderCard isAllowSort iShowTitleAlbum />
                            <MusicCard data={data?.song?.items} isAllowSelect isShowAlbum />
                        </div>
                        <div className="mt-[16px]">
                            <p className="flex items-center text-[13px] text-purple-text-items font-normal">
                                <span>{data?.song?.total} bài hát</span>
                                <span className="mx-[8px]">•</span>
                                <DurationTime
                                    className="!text-[13px]"
                                    duration={data?.song?.totalDuration}
                                    isHoursWithMinutes
                                    isFontColorDark
                                />
                            </p>
                        </div>
                    </Fragment>
                )}
                {/* Show section */}
                {data?.sections && (
                    <div className="mt-[48px]">
                        <BoxContent
                            title={data?.sections[0]?.title}
                            isHeader={data?.sections[0]?.items && data?.sections[0]?.title ? true : false}
                        >
                            {data?.sections[0]?.items && (
                                <MusicCard data={data?.sections[0]?.items} isShowIconMusic isShowAlbum />
                            )}
                        </BoxContent>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetailsPlaylist;
