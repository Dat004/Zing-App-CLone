import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa6';

import detailsPlaylist from '../apiProvider/detailsPlaylist';
import HeaderCard from '../components/CardImage/HeaderCard';
import CardMusic from '../components/CardImage/CardMusic';
import TimeConversion from '../components/TimeConversion';
import { FullTime } from '../components/TimeComponent';
import ArtistName from '../components/ArtistName';
import BoxContent from '../components/BoxContent';
import CardImage from '../components/CardImage';
import { useLoadingState } from '../hooks';
import Button from '../components/Button';

function Playlist() {
    const [newData, setNewData] = useState({});
    const { idplaylist } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            const data = await detailsPlaylist(idplaylist);
            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                handleSetLoadingState(false);
                setNewData((prev) => ({ ...prev, ...data?.data?.data }));
            }
        })();
    }, []);

    return (
        <div className="w-full mt-[70px]">
            <div className="pt-[40px]">
                {isLoading ? null : (
                    <div className="flex flex-nowrap LS:flex-wrap w-full">
                        <div className="w-[300px] flex flex-col LS:flex-row LS:flex-grow LS:w-full flex-shrink-0 pb-[30px]">
                            <div className="LS:w-[200px] w-[300px] flex-shrink-0 LS:mr-[20px] overflow-hidden">
                                <CardImage className="LS:size-large" isScale larger src={newData?.thumbnailM} />
                            </div>
                            <div className="flex flex-col w-full LS:mt-0 mt-[12px] LS:text-start text-center">
                                <h3 className="flex text-[20px] text-purple-text-primary font-bold leading-[1.5]">
                                    <p className="flex-grow flex-shrink w-0">
                                        <span className="whitespace-pre-line LS:whitespace-nowrap">
                                            {newData?.title}
                                        </span>
                                    </p>
                                </h3>
                                {newData?.isAlbum ? (
                                    <div className="flex items-center justify-center LS:justify-start text-[12px] text-purple-text-items">
                                        <ArtistName
                                            className="LS:justify-start justify-center mr-[4px] leading-[1.75]"
                                            artistData={newData?.artists}
                                            smallSize
                                            isWrap
                                        />
                                        <span>•</span>
                                        <FullTime
                                            className="ml-[4px]"
                                            timestamps={newData?.contentLastUpdate}
                                            getYear
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-[12px] text-purple-text-items leading-[1.75]">
                                            <span>Cập nhật:</span>
                                            <FullTime
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
                                        {newData?.isAlbum ? 'Phát tất cả' : 'Phát ngẫu nhiên'}
                                    </Button>
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
                            {newData?.isAlbum ? (
                                <Fragment>
                                    <div className="mb-[10px]">
                                        <HeaderCard isAllowSort={newData?.song?.items?.length > 1} />
                                        <CardMusic data={newData?.song?.items} isAllowSelect isShowAlbumNumber />
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
                                <Fragment>
                                    <div className="mb-[10px]">
                                        <HeaderCard isAllowSort iShowTitleAlbum />
                                        <CardMusic data={newData?.song?.items} isAllowSelect isShowAlbum />
                                    </div>
                                    <div className="mt-[16px]">
                                        <p className="flex items-center text-[13px] text-purple-text-items font-normal">
                                            <span>{newData?.song?.total} bài hát</span>
                                            <span className="mx-[8px]">•</span>
                                            <TimeConversion
                                                className="!text-[13px]"
                                                duration={newData?.song?.totalDuration}
                                                isHoursWithMinutes
                                                isFontColorDark
                                            />
                                        </p>
                                    </div>
                                </Fragment>
                            )}
                            {newData?.sections && (
                                <div className="mt-[48px]">
                                    <BoxContent
                                        title={newData?.sections[0]?.title}
                                        isHeader={
                                            newData?.sections[0]?.items && newData?.sections[0]?.title ? true : false
                                        }
                                    >
                                        {newData?.sections[0]?.items && (
                                            <CardMusic data={newData?.sections[0]?.items} isShowIconMusic isShowAlbum />
                                        )}
                                    </BoxContent>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Playlist;
