import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ActionsMusic from '../../../../../components/ActionsMusic';
import LayerCard from '../../../../../components/CardImage/LayerCard';
import CardImage from '../../../../../components/CardImage';

function Results({ data }) {
    return (
        <>
            {data.map((items) => {
                const { type } = items;

                const getImage = type === 1 || type === 3 ? items?.thumb : items?.avatar;
                const getTitle = type === 1 || type === 3 ? items?.title : items?.name;
                const getArtists =
                    (type === 1 && items?.artists.map((artist) => artist.name).join(', ')) ||
                    (type === 3 && 'Playlist') ||
                    (type === 4 && 'Nghệ sĩ');

                return (
                    <div
                        className="group/items py-[8px] px-[10px] rounded-[4px] hover:bg-purple-bg-active-items"
                        key={items?.id}
                    >
                        <div className="flex items-center">
                            <div className="relative mr-[10px] rounded-[4px] overflow-hidden">
                                <CardImage
                                    rounded={type === 1 ? false : true}
                                    src={getImage}
                                    className="w-[52px] h-[52px]"
                                />
                                <LayerCard className="hidden"></LayerCard>
                            </div>
                            <div className="flex flex-col justify-center flex-grow flex-shrink w-0">
                                <Link className="text-[14px] text-purple-text-primary font-medium leading-[17px] hover:text-link-text-hover cursor-pointer">
                                    <span className="pr-[10px]">{getTitle}</span>
                                </Link>
                                <p className="mt-[5px] leading-[14px] text-[12px] text-purple-text-items font-medium">
                                    <span className="max-w-[90%]">{getArtists}</span>
                                </p>
                            </div>
                            <div className="group-hover/items:block hidden ml-[10px]">
                                <ActionsMusic isAddLibrary widthBtn="38px" heightBtn="38px" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

Results.propTypes = {
    data: PropTypes.array,
};

export default Results;
