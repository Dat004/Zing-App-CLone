import { Fragment } from 'react';
import classNames from 'classnames';

import CustomLink from '../CustomLink';

function ArtistName({
    children,
    artistData = [],
    className,
    isWrap = false, // Allow wrapping
    mediumSize = false, // Font size medium
    smallSize = false, // Font size small
}) {
    const artistClasses = classNames('text-purple-text-items leading-[1.33] font-normal', {
        [className]: className,
        'text-[14px]': mediumSize,
        'text-[12px]': smallSize,
    });

    return (
        <div>
            <p className={artistClasses}>
                {artistData?.map((artist, index) => (
                    <Fragment key={index}>
                        <CustomLink
                            className={`inline flex-shrink-0 ${isWrap ? 'whitespace-pre-line' : 'whitespace-nowrap'}`}
                            to={`/artist/${artist?.alias}`}
                            isHover
                            isUnderline
                        >
                            {artist?.name}
                        </CustomLink>
                        {index !== artistData?.length - 1 && <span className="mr-[4px]">,</span>}
                    </Fragment>
                ))}
                {children}
            </p>
        </div>
    );
}

export default ArtistName;
