import { Link } from 'react-router-dom';

import ActionMusic from '../../ActionsMusic';
import CardImage from '../../CardImage';

function ListsMusic({ data = [] }) {
    return (
        <div className="w-full">
            <section className="flex flex-wrap w-full h-full">
                {data.map((items, index) => (
                    <div key={index} className="group/card w-full rounded-[5px] hover:bg-purple-bg-btn-alpha">
                        <div className="flex items-center p-[10px]">
                            <div className="mr-[10px]">
                                <CardImage medium src={items?.thumbnailM} />
                            </div>
                            <div className="w-0 flex-grow flex-shrink mr-[10px]">
                                <div className="flex flex-col">
                                    <p className="text-[14px] leading-[18px] text-purple-text-primary font-semibold">
                                        <span className="w-[90%]">{items?.title}</span>
                                    </p>
                                    <Link className="mt-[3px] text-[12px] leading-[15px] font-medium text-purple-text-items">
                                        <span>{items?.artistsNames}</span>
                                    </Link>
                                    <p className="text-[12px] font-medium mt-[3px] leading-[18px] text-purple-text-items">
                                        <span>2 ngày trước</span>
                                    </p>
                                </div>
                            </div>
                            <div className="hidden group-hover/card:block ml-[10px]">
                                <ActionMusic widthBtn="38px" heightBtn="38px" />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ListsMusic;
