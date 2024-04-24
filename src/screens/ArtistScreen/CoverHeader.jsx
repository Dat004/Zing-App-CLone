import { Fragment } from "react";

import { ZingAwardsIcon, ZingChoiceIcon } from "../../components/CustomIcon";
import { NumberDots } from "../../components/Number";
import { ImageCard } from "../../components/Card";
import Button from "../../components/Button";

function CoverHeader({ data = {} }) {
    return (
        // if isCover then set height is 410px
        <div className={`relative flex items-end ${data.cover.isCover ? 'h-[410px]' : ''} pt-[135px] z-10`}>
            <div className="absolute top-0 left-[-118px] right-[-118px] h-full overflow-hidden z-1">
                {data.cover.isCover ? (
                    // Has cover
                    <Fragment>
                        <div
                            style={{ backgroundImage: `url('${data?.cover.coverImage}')` }}
                            className={`w-full h-full bg-no-repeat bg-cover bg-[50%]`}
                        ></div>
                        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-bg-cover-layout"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-bg-cover-linear opacity-40"></div>
                    </Fragment>
                ) : (
                    // No cover
                    <Fragment>
                        <div
                            style={{ backgroundImage: `url('${data?.cover.coverImage}')` }}
                            className="w-full h-full bg-no-repeat bg-cover bg-[50%] blur-[30px]"
                        ></div>
                        <div className="absolute inset-0 bg-purple-bg-artist-layout"></div>
                    </Fragment>
                )}
            </div>
            <div className="relative flex w-full pb-[24px] z-5">
                {/* Show avatar artist if hasn't cover */}
                {!data.cover.isCover && (
                    <div className="mr-[32px]">
                        <ImageCard className="size-[140px]" src={data.avatar} rounded />
                    </div>
                )}
                {/* Show info */}
                <div>
                    <div className="leading-[1.2] mb-[16px]">
                        {/* Show name artist */}
                        <h1 className="text-[60px] text-purple-text-primary font-bold">{data?.name}</h1>
                    </div>
                    <div className="pt-[4px]">
                        <p className="flex items-baseline text-[14px] text-purple-text-primary font-medium">
                            {/* Show total number of followers */}
                            <NumberDots className="text-[14px] font-medium" number={data?.totalFollow} />
                            <span className="ml-[4px]">người quan tâm</span>
                        </p>
                    </div>
                </div>
                {/* Show Awards or Spotlight */}
                <div className="flex ml-auto">
                    <div className="flex items-end">
                        {/* Show spotlight */}
                        {data?.spotlight && (
                            <i className="text-purple-text-icons mr-[26px]">
                                <ZingChoiceIcon />
                            </i>
                        )}
                        {/* Show Awards */}
                        {data?.awards && (
                            <Button>
                                <i className="text-purple-text-icons">
                                    <ZingAwardsIcon />
                                </i>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoverHeader;
