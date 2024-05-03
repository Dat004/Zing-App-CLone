import { useLocation } from 'react-router-dom';

import WeekChartCountryScreen from '../screens/WeekChartCountryScreen';
import TabsButton from '../components/Button/TabsButton';
import { PlayBoldIcon } from '../components/CustomIcon';
import { useLoadingState } from '../hooks';
import DATAS from '../tempData';

function WeekChartCountry() {
    const location = useLocation();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    return (
        <div className="mt-[70px]">
            <div className="pt-[40px]">
                <header className="flex items-center mb-[28px]">
                    <h3 className="text-[40px] leading-[1.225] font-bold text-purple-text-primary">
                        Bảng Xếp Hạng Tuần
                    </h3>
                    <i className="ml-[10px] hover:opacity-90 cursor-pointer">
                        <PlayBoldIcon />
                    </i>
                </header>
                <section className="sticky top-[70px] bg-purple-bg-layout flex items-center gap-[40px] mb-[28px] z-100">
                    {DATAS.DATA_CODE_WEEK_CHARTS.map((items, index) => {
                        const isActive = location.pathname === items.code;

                        return (
                            <TabsButton isActive={isActive} to={items.code} key={index} isHover>
                                {items?.name}
                            </TabsButton>
                        );
                    })}
                </section>
                <WeekChartCountryScreen isLoading={isLoading} handleLoading={handleSetLoadingState} />
            </div>
        </div>
    );
}

export default WeekChartCountry;
