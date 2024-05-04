import PropTypes from 'prop-types';

import BoxContent from '../../components/BoxContent';
import { MVItems } from '../../components/Item';

function MVResults({ data = [] }) {
    return (
        <>
            {!!data?.length ? (
                <BoxContent title="MV" isHeader>
                    <div className="flex flex-wrap items-center gap-y-[30px] mx-[-14px] LM:mx-[-12px]">
                        {data?.map((items, index) => (
                            <div key={index} className="px-[14px] LM:px-[12px] w-1/3 flex-shrink-0">
                                <MVItems data={items} isAvatar />
                            </div>
                        ))}
                    </div>
                </BoxContent>
            ) : null}
        </>
    );
}

MVResults.propTypes = {
    data: PropTypes.array,
};

export default MVResults;
