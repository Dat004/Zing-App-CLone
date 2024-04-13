import { ImageCard } from '../Card';

function Banner({ data }) {
    return (
        <div className="my-[30px]">
            <section className="flex items-center mx-[-14px]">
                {data?.map((items, index) => (
                    <div key={index} className="w-[33.33%] px-[14px]">
                        <div className="w-full h-full">
                            <ImageCard isScale src={items?.cover} />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Banner;
