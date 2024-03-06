import DATAS from '../../tempData';
import BoxContent from '../BoxContent';
import Image from '../Image';

function PartnerLayout() {
    const DATA_PARTNERS = DATAS.DATA_PARTNERS;

    return (
        <BoxContent>
            <div className='px-[40px]'>
                <h3 className="mb-[24px] text-center font-bold text-[12px] tracking-[1.71px] text-purple-text-items">
                    <span className="cursor-pointer">ĐỐI TÁC ÂM NHẠC</span>
                </h3>
                <div className="flex flex-wrap gap-y-[30px] mx-[-15px]">
                    {DATA_PARTNERS.map((items) => (
                        <div key={items.id} className="w-[12.5%] L:w-[25%] flex-shrink-0 px-[10px] L:px-[14px]">
                            <div className="relative w-full pb-[56.25%] rounded-[8px] bg-purple-bg-logo-partner">
                                <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
                                    <Image className='max-w-[90%] max-h-[80%] object-contain' src={items.logo} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BoxContent>
    );
}

export default PartnerLayout;
