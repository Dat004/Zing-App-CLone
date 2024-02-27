import { useState, useEffect } from 'react';

import DATAS from '../../../../tempData';
import MenuItems from './MenuItems';
import SkeletonLoading from '../../../../components/SkeletonLoading';

function Menu({ isExtend }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeLoading = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timeLoading);
        };
    }, []);

    return (
        <nav className="mt-[70px]">
            {loading ? (
                <>
                    <div className="mb-[16px]">
                        {Array.from([1, 2, 3, 4]).map((_, index) => (
                            <div key={index} className="h-[44px] py-[10px] px-[25px]">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[24px] h-[24px]">
                                        <SkeletonLoading circle />
                                    </div>
                                    <div className="h-[17px] flex-grow">
                                        <SkeletonLoading />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[16px]">
                        {Array.from([1, 2, 3, 4]).map((_, index) => (
                            <div key={index} className="h-[44px] py-[10px] px-[25px]">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[24px] h-[24px]">
                                        <SkeletonLoading circle />
                                    </div>
                                    <div className="h-[17px] flex-grow">
                                        <SkeletonLoading />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <MenuItems data={DATAS.DATA_MENU_TOP} isExtend={isExtend} />
                    <span className="block h-px my-[16px] mx-[25px] bg-purple-bg-active-items"></span>
                    <MenuItems data={DATAS.DATA_MENU_BOTTOM_CLIENT} isExtend={isExtend} />
                </>
            )}
        </nav>
    );
}

export default Menu;
