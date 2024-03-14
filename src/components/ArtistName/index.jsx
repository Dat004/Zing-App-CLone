import { Fragment } from 'react';
import classNames from 'classnames';

import CustomLink from '../CustomLink';

function ArtistName({ artistData = [], className, isWrap = false, mediumSize = false, smallSize = false }) {
    const artistClasses = classNames('flex items-center text-purple-text-items leading-[1.33] font-normal', {
        [className]: className,
        'flex-wrap': isWrap,
        'text-[12px]': smallSize,
        'text-[14px]': mediumSize,
    });

    return (
        <p className={artistClasses}>
            {artistData?.map((artist, index) => (
                <Fragment key={index}>
                    <CustomLink
                        className="flex-grow-0 flex-shrink-0"
                        to={`/artist/${artist?.alias}`}
                        isHover
                        isUnderline
                    >
                        {artist?.name}
                    </CustomLink>
                    {index !== artistData?.length - 1 && <span className="mr-[4px] flex-shrink-0">,</span>}
                </Fragment>
            ))}
        </p>
    );
}

export default ArtistName;
