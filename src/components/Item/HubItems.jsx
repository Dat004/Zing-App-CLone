import PropTypes from 'prop-types';

import CustomLink from '../CustomLink';
import { ImageCard } from '../Card';

function HubItems({
    data = {},
    isShowThumbnail = false, // Default is false, if true then show avatar
    ...passProps
}) {
    const getPathName = data?.link?.split('.')[0];

    return (
        <div className="w-full" {...passProps}>
            <CustomLink to={getPathName}>
                <div className="relative rounded-[8px]">
                    {/* Show thumnail of hub items */}
                    <ImageCard
                        src={data?.thumbnail}
                        className="h-0 pb-[56.25%] overflow-hidden"
                        borderRadius="8px"
                        isScale
                    />

                    {/* Show thumbnail of all playlists in the hub items */}
                    {isShowThumbnail ? (
                        <div className="absolute bottom-0 left-0 pointer-events-none z-10">
                            <div className="flex flex-col items-start pl-[15px] pb-[15px]">
                                <div className="flex items-center justify-center mb-[10px]">
                                    <h3 className="text-[18px] text-purple-text-primary font-bold">
                                        {/* Show title hub */}
                                        {data?.title}
                                    </h3>
                                </div>
                                <div className="flex items-center">
                                    {data?.playlists?.map((thumbnail, id) => (
                                        <div key={id} className="w-1/5 flex-shrink-0 pr-[3px]">
                                            <div className="w-full rounded-[4px]">
                                                {/* Show thumnail of all playlists */}
                                                <ImageCard src={thumbnail?.thumbnailM} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full pointer-events-none">
                            <div className="flex items-center justify-center mb-[10px]">
                                <h3 className="text-[26px] text-purple-text-primary font-bold">
                                    {/* Show title hub */}
                                    {data?.title}
                                </h3>
                            </div>
                        </div>
                    )}
                </div>
            </CustomLink>
        </div>
    );
}

HubItems.propTypes = {
    data: PropTypes.object,
    isShowThumbnail: PropTypes.bool,
};

export default HubItems;
