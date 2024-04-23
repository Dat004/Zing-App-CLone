import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa6';

import ThumbnailSkeleton from '../components/SkeletonLoading/ThumbnailSkeleton';
import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import { TimeTracker, DurationTime } from '../components/TimeComponent';
import { ImageCard, MusicCard, HeaderCard } from '../components/Card';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import { PlaylistItems } from '../components/Item';
import ArtistName from '../components/ArtistName';
import BoxContent from '../components/BoxContent';
import { useLoadingState } from '../hooks';
import Button from '../components/Button';
import apiService from '../services';

function Playlist() {
    const [newData, setNewData] = useState({});
    const { idplaylist } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            handleSetLoadingState(true);
            const data = await apiService.detailsPlaylist(idplaylist);
            const sectionData = await apiService.sectionPlaylist(idplaylist);

            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                handleSetLoadingState(false);
                setNewData((prev) => ({ ...prev, ...data?.data?.data, ...sectionData?.data }));
            }
        })();
    }, [idplaylist]);

    return (
        <div className="w-full mt-[70px]">
            <div className="pt-[40px]">
                {isLoading ? (
                    <PageLoader className="!mt-0" isMaskLayer>
                        <div className="flex LS:flex-col">
                            <div className="flex flex-col LS:flex-row LS:w-full LS:pb-[30px] w-[300px] flex-shrink-0">
                                <ThumbnailSkeleton
                                    className="LS:size-size-2.0 mr-[20px]"
                                    borderRadius="8px"
                                    extraLargeSize
                                />
                                <div className="flex flex-col LS:justify-between mt-[15px] flex-grow LS:mt-0">
                                    <div className="flex flex-col items-center LS:items-start">
                                        <div className="w-full max-w-[80%] h-[20px]">
                                            <SkeletonLoading />
                                        </div>
                                        <div className="w-full max-w-[60%] h-[10px]">
                                            <SkeletonLoading className="mt-[15px]" />
                                        </div>
                                        <div className="w-full max-w-[60%] mt-[15px] h-[10px]">
                                            <SkeletonLoading className="mt-[15px]" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center LS:justify-start mt-[40px] LS:mt-0">
                                        <div className="flex flex-col LS:flex-row items-center gap-[12px]">
                                            <div className="w-[150px] h-[35px]">
                                                <SkeletonLoading className="!rounded-[999px]" />
                                            </div>
                                            <div className="flex gap-[10px]">
                                                <div className="w-[35px] h-[35px]">
                                                    <SkeletonLoading className="!rounded-[50%]" />
                                                </div>
                                                <div className="w-[35px] h-[35px]">
                                                    <SkeletonLoading className="!rounded-[50%]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow flex-shrink w-full ml-[30px] LS:ml-0">
                                <CardMusicSkeleton />
                            </div>
                        </div>
                    </PageLoader>
                ) : (
                    <>
                        <div className="flex flex-nowrap LS:flex-wrap w-full">
                            <div className="w-[300px] LS:flex-grow LS:w-full flex-shrink-0 pb-[30px]">
                                <div className="sticky top-[110px] flex flex-col LS:flex-row">
                                    {/* Show thumbail of playlist */}
                                    <div className="LS:w-[200px] w-[300px] flex-shrink-0 LS:mr-[20px] overflow-hidden">
                                        <ImageCard className="LS:size-large" isScale larger src={newData?.thumbnailM} />
                                    </div>
                                    {/* Show info about playlist */}
                                    <div className="flex flex-col w-full LS:mt-0 mt-[12px] LS:text-start text-center">
                                        <h3 className="flex text-[20px] text-purple-text-primary font-bold leading-[1.5]">
                                            <p className="flex-grow flex-shrink w-0">
                                                {/* Show title playlist */}
                                                <span className="whitespace-pre-line LS:whitespace-nowrap">
                                                    {newData?.title}
                                                </span>
                                            </p>
                                        </h3>
                                        {/* Show info if it's in album type */}
                                        {newData?.isAlbum ? (
                                            <div className="flex items-center justify-center LS:justify-start text-[12px] text-purple-text-items">
                                                <ArtistName
                                                    className="LS:justify-start justify-center mr-[4px] leading-[1.75]"
                                                    artistData={newData?.artists}
                                                    smallSize
                                                    isWrap
                                                >
                                                    <span className="ml-[4px]">
                                                        <span>•</span>
                                                        <TimeTracker
                                                            className="ml-[4px]"
                                                            timestamps={newData?.contentLastUpdate}
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
                                                    <TimeTracker
                                                        className="ml-[4px]"
                                                        timestamps={newData?.contentLastUpdate}
                                                        getFull
                                                    />
                                                </p>
                                                <ArtistName
                                                    className="LS:justify-start justify-center leading-[1.75]"
                                                    artistData={newData?.artists}
                                                    smallSize
                                                    isWrap
                                                />
                                            </>
                                        )}
                                        {/* Show sort description of playlist */}
                                        {!newData?.isAlbum && newData?.sortDescription && (
                                            <div className="LS:block hidden">
                                                <p className="text-[14px] text-purple-text-items font-normal mt-[16px] mb-[10px]">
                                                    <span>Lời tựa</span>
                                                    <span className="ml-[4px] text-purple-text-primary line-clamp-3  whitespace-pre-line">
                                                        {newData?.sortDescription}
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
                                                {newData?.isAlbum ? 'Phát tất cả' : 'Phát ngẫu nhiên'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow flex-shrink LS:ml-0 ml-[30px]">
                                {!newData?.isAlbum && newData?.sortDescription && (
                                    <div className="LS:hidden block">
                                        <p className="text-[14px] text-purple-text-items font-normal mt-[16px] mb-[10px]">
                                            <span>Lời tựa</span>
                                            <span className="ml-[4px] text-purple-text-primary line-clamp-3 whitespace-pre-line">
                                                {newData?.sortDescription}
                                            </span>
                                        </p>
                                    </div>
                                )}
                                {/* Album type */}
                                {newData?.isAlbum ? (
                                    <Fragment>
                                        <div className="mb-[10px]">
                                            <HeaderCard isAllowSort={newData?.song?.items?.length > 1} />
                                            <MusicCard data={newData?.song?.items} isAllowSelect isShowAlbumNumber />
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
                                                    <span>{newData?.song?.total}</span>
                                                    <span>{newData?.releaseDate}</span>
                                                    <span>{newData?.distributor}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                ) : (
                                    // Else
                                    <Fragment>
                                        <div className="mb-[10px]">
                                            <HeaderCard isAllowSort iShowTitleAlbum />
                                            <MusicCard data={newData?.song?.items} isAllowSelect isShowAlbum />
                                        </div>
                                        <div className="mt-[16px]">
                                            <p className="flex items-center text-[13px] text-purple-text-items font-normal">
                                                <span>{newData?.song?.total} bài hát</span>
                                                <span className="mx-[8px]">•</span>
                                                <DurationTime
                                                    className="!text-[13px]"
                                                    duration={newData?.song?.totalDuration}
                                                    isHoursWithMinutes
                                                    isFontColorDark
                                                />
                                            </p>
                                        </div>
                                    </Fragment>
                                )}
                                {/* Show section */}
                                {newData?.sections && (
                                    <div className="mt-[48px]">
                                        <BoxContent
                                            title={newData?.sections[0]?.title}
                                            isHeader={
                                                newData?.sections[0]?.items && newData?.sections[0]?.title
                                                    ? true
                                                    : false
                                            }
                                        >
                                            {newData?.sections[0]?.items && (
                                                <MusicCard
                                                    data={newData?.sections[0]?.items}
                                                    isShowIconMusic
                                                    isShowAlbum
                                                />
                                            )}
                                        </BoxContent>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Show section data  */}
                        {!!newData?.data?.length &&
                            newData?.data?.map((items, index) => {
                                const isTitle = !!items?.title;
                                const isArtist = items?.sectionType === 'artist';
                                const isPlaylist = items?.sectionType === 'playlist';

                                return (
                                    <Fragment key={index}>
                                        {(isArtist || isPlaylist) && (
                                            <PlaylistItems
                                                data={items?.items}
                                                title={items?.title}
                                                isHeader={isTitle}
                                                isTypeArtist={isArtist}
                                                isShowTitlePlaylist
                                                isShowArtists
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}
                    </>
                )}
            </div>
        </div>
    );
}

export default Playlist;
