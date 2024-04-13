import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { ZingChoiceIcon, ZingAwardsIcon } from '../components/CustomIcon';
import { TimeTracker } from '../components/TimeComponent';
import ArtistName from '../components/ArtistName';
import CustomLink from '../components/CustomLink';
import BoxContent from '../components/BoxContent';
import { NumberDots } from '../components/Number';
import Playlists from '..//components/PlayLists';
import { MusicCard, ImageCard } from '../components/Card';
import { useLoadingState } from '../hooks';
import Button from '../components/Button';
import apiService from '../apiProvider';
import MV from '../components/MV';

function Artist() {
    const { nameArtist } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    const noCover = 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/default_cover.png';

    const [newData, setNewData] = useState({
        cover: {
            coverImage: '',
            isCover: false,
        },
        newRelease: undefined,
        avatar: '',
    });

    useEffect(() => {
        if (!nameArtist) return;

        (async () => {
            handleSetLoadingState(true); // Update loading state when nameArtist change
            const data = await apiService.detailsArtistApi(nameArtist);

            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                setNewData((prev) => ({
                    ...prev,
                    ...data?.data?.data,
                    cover: {
                        coverImage: data?.data?.data?.cover,
                        isCover: !(data?.data?.data?.cover === noCover),
                    },
                    newRelease: data?.data?.data?.topAlbum ? { ...data?.data?.data?.topAlbum } : undefined,
                    avatar: data?.data?.data?.thumbnailM,
                }));
                handleSetLoadingState(false);
            }
        })();
    }, [nameArtist]);

    return (
        <Fragment>
            {isLoading ? null : (
                <div>
                    {/* if isCover then set height is 410px  */}
                    <div
                        className={`relative flex items-end ${
                            newData.cover.isCover ? 'h-[410px]' : ''
                        } pt-[135px] z-10`}
                    >
                        <div className="absolute top-0 left-[-118px] right-[-118px] h-full overflow-hidden z-1">
                            {newData.cover.isCover ? (
                                // Has cover
                                <Fragment>
                                    <div
                                        style={{ backgroundImage: `url('${newData?.cover.coverImage}')` }}
                                        className={`w-full h-full bg-no-repeat bg-cover bg-[50%]`}
                                    ></div>
                                    <div className="absolute bottom-0 left-0 w-full h-[300px] bg-bg-cover-layout"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-[200px] bg-bg-cover-linear opacity-40"></div>
                                </Fragment>
                            ) : (
                                // No cover
                                <Fragment>
                                    <div
                                        style={{ backgroundImage: `url('${newData?.cover.coverImage}')` }}
                                        className="w-full h-full bg-no-repeat bg-cover bg-[50%] blur-[30px]"
                                    ></div>
                                    <div className="absolute inset-0 bg-purple-bg-artist-layout"></div>
                                </Fragment>
                            )}
                        </div>
                        <div className="relative flex w-full pb-[24px] z-5">
                            {/* Show avatar artist if hasn't cover */}
                            {!newData.cover.isCover && (
                                <div className="mr-[32px]">
                                    <ImageCard className="size-[140px]" src={newData.avatar} rounded />
                                </div>
                            )}
                            {/* Show info */}
                            <div>
                                <div className="leading-[1.2] mb-[16px]">
                                    {/* Show name artist */}
                                    <h1 className="text-[60px] text-purple-text-primary font-bold">{newData?.name}</h1>
                                </div>
                                <div className="pt-[4px]">
                                    <p className="flex items-baseline text-[14px] text-purple-text-primary font-medium">
                                        {/* Show total number of followers */}
                                        <NumberDots className="text-[14px] font-medium" number={newData?.totalFollow} />
                                        <span className="ml-[4px]">người quan tâm</span>
                                    </p>
                                </div>
                            </div>
                            {/* Show Awards or Spotlight */}
                            <div className="flex ml-auto">
                                <div className="flex items-end">
                                    {/* Show spotlight */}
                                    {newData?.spotlight && (
                                        <i className="text-purple-text-icons mr-[26px]">
                                            <ZingChoiceIcon />
                                        </i>
                                    )}
                                    {/* Show Awards */}
                                    {newData?.awards && (
                                        <Button>
                                            <i className="text-purple-text-icons">
                                                <ZingAwardsIcon />
                                            </i>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <div className="flex">
                            {/* if there is new song released */}
                            {newData?.newRelease && (
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
                                                            src={newData?.newRelease?.thumbnailM}
                                                        />
                                                    </div>
                                                    <div className="my-[6px] ml-[16px] flex-grow">
                                                        <div className="text-purple-text-items text-[12px] font-medium">
                                                            {/* Show type of song */}
                                                            <span>{newData?.newRelease?.textType}</span>
                                                            {/* Show title music */}
                                                            <p className="mt-[12px] mb-[2px] text-[14px] text-purple-text-primary font-bold line-clamp-2 leading-[1.37]">
                                                                <span className="whitespace-pre-line">
                                                                    {newData?.newRelease?.title}
                                                                </span>
                                                            </p>
                                                            {/* Show names of artists */}
                                                            <ArtistName
                                                                className="line-clamp-2 mb-[12px] !font-medium"
                                                                artistData={newData?.newRelease?.artists}
                                                                isWrap
                                                            />
                                                            {/* Show time release */}
                                                            <TimeTracker
                                                                timestamps={newData?.newRelease?.releasedAt / 1000}
                                                                getFull
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </CustomLink>
                                        </div>
                                    </BoxContent>
                                </div>
                            )}
                            {/* if there is no song new release then width = 100% */}
                            <div className={`${newData?.newRelease ? 'w-[66.66%] LX:w-1/2' : 'w-full'} flex-grow`}>
                                {newData?.sections?.map((items, index) => {
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
                                                    isSeeAll={isEnoughLength ? true : false}
                                                    isHeader
                                                >
                                                    <div className="flex mx-[-14px] LM:mx-[-12px]">
                                                        <div
                                                            className={`flex-grow flex-shrink-0 w-1/2 ${
                                                                newData?.newRelease ? 'LX:w-full' : ''
                                                            } px-[14px] LM:px-[12px]`}
                                                        >
                                                            <div className="w-full">
                                                                <MusicCard data={col1} />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`flex-grow flex-shrink-0 w-1/2 ${
                                                                newData?.newRelease ? 'LX:hidden' : ''
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
                        <div className="w-full">
                            {newData?.sections?.map((items, index) => {
                                const isMV = items?.sectionId === 'aMV'; // Distinguish ui form
                                const isArtist = items?.sectionId === 'aReArtist'; // Distinguish ui form
                                const isAPlaylist = items?.sectionId === 'aPlaylist'; // Distinguish ui form
                                const isDatePlaylist = items?.itemType === 'release-date'; // Distinguish ui form
                                const isEnoughLength = items?.items?.length > 5; // Check if items have enough length then show btn show more

                                return (
                                    <Fragment key={index}>
                                        {/* Show playlist ui has been created */}
                                        {isDatePlaylist && (
                                            <Playlists
                                                data={items?.items}
                                                title={items?.title}
                                                isSeeAll={isEnoughLength ? true : false}
                                                isHeader
                                                isShowTitlePlaylist
                                                isShowTimeRelease
                                            />
                                        )}
                                        {/* Show playlist ui have names artists */}
                                        {isAPlaylist && (
                                            <Playlists
                                                data={items?.items}
                                                title={items?.title}
                                                isSeeAll={isEnoughLength ? true : false}
                                                isHeader
                                                isShowTitlePlaylist
                                                isShowArtists
                                            />
                                        )}
                                        {/* Show playlist ui with artist ui type */}
                                        {isArtist && (
                                            <Playlists
                                                data={items?.items}
                                                title={items?.title}
                                                isSeeAll={isEnoughLength ? true : false}
                                                isTypeArtist
                                                isHeader
                                            />
                                        )}
                                        {isMV && (
                                            <BoxContent title={items?.title} isHeader>
                                                <div className="flex mx-[-14px] LM:mx-[-12px]">
                                                    {items?.items?.slice(0, 3)?.map((vd, id) => (
                                                        <MV className="XM:w-1/2" key={id} data={vd} isAvatar />
                                                    ))}
                                                </div>
                                            </BoxContent>
                                        )}
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Artist;
