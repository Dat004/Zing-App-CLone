import { ImageCard, TitleCard } from '../../../../components/Card';
import ActionsMusic from '../../../../components/ActionsMusic';
import ArtistName from '../../../../components/ArtistName';

function ListsMusic({ children, data = [], largeSize = false }) {
    return (
        <div className="w-full">
            <section className="flex flex-wrap w-full h-full">
                {data.map((items, index) => (
                    <div key={index} className="group/card w-full rounded-[5px] hover:bg-purple-bg-btn-alpha">
                        <div className="flex items-center p-[10px]">
                            <div className="mr-[10px]">
                                <ImageCard medium src={items?.thumbnailM} />
                            </div>
                            <div className="w-0 flex-grow flex-shrink mr-[10px]">
                                <div className="flex flex-col">
                                    <TitleCard className={`${largeSize ? 'text-[18px]' : 'text-[14px]'}`}>
                                        {items?.title}
                                    </TitleCard>
                                    <ArtistName
                                        className="mt-[3px]"
                                        mediumSize={largeSize}
                                        smallSize={!largeSize}
                                        artistData={items?.artists}
                                    ></ArtistName>
                                    <p className="text-[12px] font-medium mt-[3px] leading-[18px] text-purple-text-items">
                                        <span>2 ngày trước</span>
                                    </p>
                                </div>
                            </div>
                            <div className="hidden group-hover/card:block ml-[10px]">
                                <ActionsMusic widthBtn="38px" heightBtn="38px" />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ListsMusic;
