import { MusicCards, TitleCard } from '../../components/Card';
import MusicActions from '../../redux/actions/MusicActions';
import { PlayBoldIcon } from '../../components/CustomIcon';
import CustomLink from '../../components/CustomLink';
import Button from '../../components/Button';

function Charts({ data = [], title = '', to = '' }) {
    const { ADD_PLAYLIST } = MusicActions();

    const handleGetData = (data, id) => {
        const index = data.findIndex((items) => items.encodeId === id);

        ADD_PLAYLIST(data, index);
    };

    return (
        <div className="w-full py-[20px] px-[10px] bg-purple-bg-side-bar rounded-[16px]">
            <div className="flex items-center pb-[10px] pl-[40px]">
                <TitleCard to={to} className="!text-[24px] !font-bold !leading-[1]">
                    {title}
                </TitleCard>
                <PlayBoldIcon width="29px" height="29px" />
            </div>
            <div className="mb-[15px]">
                {data?.slice(0, 5)?.map((items, index) => (
                    <MusicCards
                        onGetMusic={() => handleGetData(data, items?.encodeId)}
                        className="size-size-0.4"
                        id={index}
                        key={index}
                        data={items}
                        smallCard
                        isShowRanking
                        isShowLeftCard
                        isShowRightCard
                        isShowStateRanking
                        isShowDurationTimeMusic
                    />
                ))}
            </div>
            <div className="flex items-center justify-center">
                <CustomLink to={to}>
                    <Button
                        className="py-[8px] px-[25px] text-[14px] font-medium border-purple-bd-white-color"
                        outline
                        medium
                    >
                        Xem tất cả
                    </Button>
                </CustomLink>
            </div>
        </div>
    );
}

export default Charts;
