import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa6';

import detailsPlaylist from '../apiProvider/detailsPlaylist';
import { FullTime } from '../components/TimeComponent';
import ArtistName from '../components/ArtistName';
import CardImage from '../components/CardImage';
import { useLoadingState } from '../hooks';
import Button from '../components/Button';

function Playlist() {
    const [newData, setNewData] = useState({});
    const { idplaylist, nameplaylist } = useParams();
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
                    <div className="flex w-full">
                        <div className="w-[300px] flex-shrink-0">
                            <CardImage className="overflow-hidden" isScale larger src={newData?.thumbnailM} />
                            <div className="w-full mt-[12px] text-center">
                                <h3 className="text-[20px] text-purple-text-primary font-bold leading-[1.5]">
                                    {newData?.title}
                                </h3>
                                {newData?.isAlbum ? (
                                    <div className="flex items-center justify-center text-[12px] text-purple-text-items">
                                        <ArtistName
                                            className="justify-center mr-[4px] leading-[1.75]"
                                            artistData={newData?.artists}
                                            smallSize
                                            isWrap
                                        />
                                        <span>•</span>
                                        <FullTime
                                            className="ml-[4px]"
                                            getYear
                                            timestamps={newData?.contentLastUpdate}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-[12px] text-purple-text-items leading-[1.75]">
                                            <span>Cập nhật:</span>
                                            <FullTime
                                                className="ml-[4px]"
                                                getFull
                                                timestamps={newData?.contentLastUpdate}
                                            />
                                        </p>
                                        <ArtistName
                                            className="justify-center leading-[1.75]"
                                            artistData={newData?.artists}
                                            smallSize
                                            isWrap
                                        />
                                    </>
                                )}
                            </div>
                            <div className="mt-[16px]">
                                <Button
                                    leftIcon={
                                        <i className="text-[16px]">
                                            <FaPlay />
                                        </i>
                                    }
                                    className="mx-auto px-[24px] py-[8px] text-[14px] uppercase"
                                    primary
                                    large
                                >
                                    {newData?.isAlbum ? 'Phát tất cả' : 'Phát ngẫu nhiên'}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Playlist;
