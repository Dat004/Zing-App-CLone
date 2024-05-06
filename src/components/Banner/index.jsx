import PropTypes from 'prop-types';

import CustomLink from '../CustomLink';
import { ImageCard } from '../Card';
import DATAS from '../../tempData';

function Banner({ data = [] }) {
    return (
        <div className="my-[30px]">
            <section className="flex items-center mx-[-14px]">
                {data?.map((items, index) => (
                    <div key={index} className="w-[33.33%] flex-shrink-0 px-[14px]">
                        <CustomLink className="w-full" to={DATAS.DATA_CODE_WEEK_CHARTS[index].code}>
                            <div className="w-full h-full overflow-hidden rounded-[5px]">
                                <ImageCard isScale src={items?.cover} />
                            </div>
                        </CustomLink>
                    </div>
                ))}
            </section>
        </div>
    );
}

Banner.propTypes = {
    data: PropTypes.array,
};

export default Banner;
