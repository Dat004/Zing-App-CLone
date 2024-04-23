import ThumbnailSkeleton from './ThumbnailSkeleton';
import SkeletonLoading from '../SkeletonLoading';

function CardMusicSkeleton({ countData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
    return (
        <div className="w-full">
            {countData.map((_, index) => (
                <div className="w-full" key={index}>
                    <section className="flex items-center justify-between px-[10px] py-[15px] rounded-[5px]">
                        <div className="flex items-center w-[50%] mr-[10px] flex-shrink">
                            <ThumbnailSkeleton className="mr-[12px]" tinySize />
                            <div className="flex flex-col w-full flex-grow flex-shrink">
                                <div className="w-full leading-[0] max-w-[80%] h-[10px]">
                                    <SkeletonLoading />
                                </div>
                                <div className="w-full mt-[10px] leading-[0] max-w-[50%] h-[10px]">
                                    <SkeletonLoading />
                                </div>
                            </div>
                        </div>
                        <div className="MS:hidden w-0 flex-grow flex-shrink-0">
                            <div className="w-full">
                                <SkeletonLoading className="max-w-[30px] max-h-[10px]" />
                            </div>
                        </div>
                        <div className="flex ml-[10px] flex-grow-0 flex-shrink-0">
                            {Array.from([1, 2, 3, 4]).map((_, index) => (
                                <div key={index} className={`w-[20px] h-[20px] ${index !== 0 ? 'ml-[15px]' : 'ml-0'}`}>
                                    <SkeletonLoading circle />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
}

export default CardMusicSkeleton;
