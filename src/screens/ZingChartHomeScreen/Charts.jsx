import { MusicCard, TitleCard } from '../../components/Card';
import { PlayBoldIcon } from '../../components/CustomIcon';
import Button from '../../components/Button';

function Charts({ data = [], title = '' }) {
    return (
        <div className="w-full py-[20px] px-[10px] bg-purple-bg-side-bar rounded-[16px]">
            <div className="flex items-center pb-[10px] pl-[40px]">
                <TitleCard className="!text-[24px] !font-bold !leading-[1]">{title}</TitleCard>
                <PlayBoldIcon width="29px" height="29px" />
            </div>
            <div className="mb-[15px]">
                <MusicCard data={data} isShowRankingNumber />
            </div>
            <div className="flex items-center justify-center">
                <Button
                    className="py-[8px] px-[25px] text-[14px] font-medium border-purple-bd-white-color"
                    outline
                    medium
                >
                    Xem tất cả
                </Button>
            </div>
        </div>
    );
}

export default Charts;