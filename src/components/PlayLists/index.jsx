import PropTypes from 'prop-types';
import BoxContent from '../BoxContent';
import CardImage from '../CardImage';
import { useEffect, useState } from 'react';

function PlayLists({ data, title }) {
    console.log(title);

    return (
        <BoxContent title={title} isHeader isSeeAll>
            <div className="flex mx-[-14px]">
                {data?.map((items, index) => {
                    console.log(items?.thumbnailM);

                    return (
                        <div key={index} className="w-[20%] px-[14px]">
                            <div className="w-full">
                                <CardImage src={items?.thumbnailM} />
                            </div>
                            <div className="mt-[12px]">
                                <p
                                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                                    className="text-[14px] leading-[1.33] font-medium text-purple-text-items whitespace-pre-wrap"
                                >
                                    <span className="whitespace-pre-wrap">
                                        {items?.sortDescription}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </BoxContent>
    );
}

export default PlayLists;
