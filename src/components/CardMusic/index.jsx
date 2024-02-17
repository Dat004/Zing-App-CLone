import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../Image';

function CardMusic({
    data,
    className,
    widthImg = '52px',
    heightImg = '52px',
    isPreview = false,
    isTime = false,
    isHoverName = false,
    isHoverArtist = false,
}) {
    return (
        <div>
            <section className={`${className || ''} rounded-[5px] overflow-hidden`}>
                <div className="flex items-center">
                    <div className="mr-[10px] cursor-pointer">
                        <Image
                            widthImg={widthImg}
                            heightImg={heightImg}
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/2/7/8/527879fe969864e5e149db25432debb0.jpg"
                        />
                    </div>
                    <div className="flex-auto">
                        <Link
                            className={`text-[14px] text-purple-text-primary font-medium leading-[1.36] ${
                                isHoverName && 'hover:text-link-text-hover cursor-pointer'
                            }`}
                        >
                            <span className='pr-[10px]'>Anh Nhà Ở Đâu Thế?</span>
                        </Link>
                        <p className='leading-[14px]'>
                            <Link
                                className={`inline text-[12px] text-purple-text-items font-medium ${
                                    isHoverArtist && 'hover:text-link-text-hover hover:underline'
                                }`}
                            >
                                AMEE
                            </Link>
                            <span className="text-[12px] text-purple-text-items font-medium ">, </span>
                            <Link
                                className={`inline text-[12px] text-purple-text-items font-medium ${
                                    isHoverArtist && 'hover:text-link-text-hover hover:underline'
                                }`}
                            >
                                B Ray
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

CardMusic.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
    widthImg: PropTypes.string,
    heightImg: PropTypes.string,
    isPreview: PropTypes.bool,
    isTime: PropTypes.bool,
    isHoverName: PropTypes.bool,
    isHoverArtist: PropTypes.bool,
};

export default CardMusic;
