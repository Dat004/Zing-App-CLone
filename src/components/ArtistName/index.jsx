import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function ArtistName({ artistData = [], className, mediumSize = false, smallSize = false }) {
    const artistClasses = classNames('text-purple-text-items leading-[1.33]', {
        [className]: className,
        'text-[12px]': smallSize,
        'text-[14px]': mediumSize,
    });

    return (
        <p className={artistClasses}>
            <span className="flex items-center flex-wrap">
                {artistData?.map((artist, index) => (
                    <Fragment key={index}>
                        {index % 2 !== 0 && <span className="mr-[4px]">,</span>}
                        <Link to={`/artist/${artist?.alias}`}>
                            {artist?.name}
                        </Link>
                    </Fragment>
                ))}
            </span>
        </p>
    );
}

export default ArtistName;
