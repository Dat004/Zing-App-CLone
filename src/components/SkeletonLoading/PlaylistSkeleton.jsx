import { Fragment } from 'react';
import PropTypes from 'prop-types';

import SkeletonLoading from '.';

function PlaylistSkeleton({ countData = [1, 2, 3] }) {
    return (
        <Fragment>
            {countData.map((_, index) => (
                <div key={index} className="w-full max-w-full mb-[30px]">
                    <div className="w-full mb-[10px]">
                        <div className="max-w-[300px] h-[30px]">
                            <SkeletonLoading />
                        </div>
                    </div>
                    <div className="flex items-center LM:mx-[-12px] mx-[-14px] overflow-hidden">
                        {Array.from([1, 2, 3, 4, 5]).map((_, index) => (
                            <div className="flex-shrink-0 w-1/5 ML:w-1/4 LM:px-[12px] px-[14px]" key={index}>
                                <div className="relative w-full pb-[100%]">
                                    <div className="absolute inset-0">
                                        <SkeletonLoading />
                                    </div>
                                </div>
                                <div className="mt-[12px]">
                                    <div className="w-full h-[17px]">
                                        <SkeletonLoading />
                                    </div>
                                    <div className="w-full max-w-[60%] h-[17px] mt-[6px]">
                                        <SkeletonLoading />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Fragment>
    );
}

PlaylistSkeleton.propTypes = {
    countData: PropTypes.array,
};

export default PlaylistSkeleton;
