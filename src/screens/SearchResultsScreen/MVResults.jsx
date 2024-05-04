import PropTypes from 'prop-types';

import ContainerMessage from './ContainerMessage';
import { MVItems } from '../../components/Item';
import images from '../../assets/images';

function MVResults({ data = [] }) {
    const NO_DATA = {
        background: images.noVideoSearch,
        title: 'Không có MV được tìm thấy',
    };

    return (
        <>
            <div className="mt-[30px]">
                <h3
                    className={`${
                        !!data?.length ? 'text-[20px]' : 'text-[18px]'
                    } text-purple-text-primary font-bold mb-[10px]`}
                >
                    MV
                </h3>
                {!!data?.length ? (
                    <div className="flex flex-wrap items-center gap-y-[30px] mx-[-14px] LM:mx-[-12px]">
                        {data?.map((items, index) => (
                            <div key={index} className="px-[14px] LM:px-[12px] w-1/3 flex-shrink-0">
                                <MVItems data={items} isAvatar />
                            </div>
                        ))}
                    </div>
                ) : (
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                )}
            </div>
        </>
    );
}

MVResults.propTypes = {
    data: PropTypes.array,
};

export default MVResults;
