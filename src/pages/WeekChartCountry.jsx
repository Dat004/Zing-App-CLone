import { useLocation, NavLink } from 'react-router-dom';

import WeekChartCountryScreen from '../screens/WeekChartCountryScreen';
import { PlayBoldIcon } from '../components/CustomIcon';
import { useLoadingState } from '../hooks';
import Button from '../components/Button';
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
                            <NavLink className="relative py-[15px]" to={items.code} key={index}>
                                <Button
                                    className={`${
                                        isActive ? 'text-purple-text-primary' : 'text-purple-text-secondary'
                                    } text-[24px] uppercase font-bold hover:text-purple-text-primary`}
                                >
                                    {items?.name}
                                </Button>
                                {isActive && (
                                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-bg-purple"></span>
                                )}
                            </NavLink>
                        );
                    })}
                </section>
                <WeekChartCountryScreen
                    isLoading={isLoading}
                    handleLoading={handleSetLoadingState}
                ></WeekChartCountryScreen>
            </div>
        </div>
    );
}

export default WeekChartCountry;
