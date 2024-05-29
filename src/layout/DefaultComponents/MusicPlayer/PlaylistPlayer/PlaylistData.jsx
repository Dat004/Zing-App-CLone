import { useState, useEffect } from 'react';

import { MusicCards } from '../../../../components/Card';
import images from '../../../../assets/images';

function PlaylistData({ data = [], activeTab = 1, onClick = () => {}, currentMusicIndex = 0 }) {
    const [renderDelays, setRenderDelays] = useState(true);

    useEffect(() => {
        let timeOut = setTimeout(() => {
            setRenderDelays(false);
        }, 450);

        return () => clearTimeout(timeOut);
    }, []);

    return (
        <div className="w-full h-[calc(100%-56px)] overflow-y-auto">
            {!renderDelays && (
                <>
                    {!!data?.length ? (
                        <>
                            {data?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.4"
                                    onGetMusic={() => onClick(data, index)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isTypePlaylist
                                    isPlayed={activeTab === 1 && index < currentMusicIndex}
                                    isPlaying={activeTab === 1 && index === currentMusicIndex}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <div
                                style={{ backgroundImage: `url(${images.imageLoaderPlaylist})` }}
                                className="mt-[24px] ml-[12px] mr-[15px] opacity-50 bg-[50%] bg-no-repeat bg-cover h-[240px]"
                            ></div>
                            <div className="absolute my-[20px] top-[50%] left-0 right-0 translate-y-[-50%]">
                                <div className="px-[33px] text-center">
                                    <p className="whitespace-pre-line text-[14px] leading-[1.6] text-purple-text-primary">
                                        Khám phá thêm các bài hát mới của Zing MP3
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default PlaylistData;
