import PropTypes from 'prop-types';
import { PiHeartBold } from 'react-icons/pi';
import { TfiMoreAlt } from 'react-icons/tfi';

function ActionsMusic({ widthBtn = '26px', heightBtn = '26px', isAddLibrary = false, isAddPlaylist = false }) {
    return (
        <div className="flex items-center">
            {isAddLibrary && (
                <button
                    style={{ width: widthBtn, height: heightBtn }}
                    className="flex justify-center items-center mx-[3px] rounded-[50%] bg-transparent hover:bg-purple-bg-active-items text-purple-text-actions"
                >
                    <PiHeartBold className="text-[16px]" />
                </button>
            )}
            {isAddPlaylist && <button></button>}
            <button
                style={{ width: widthBtn, height: heightBtn }}
                className="flex justify-center items-center mx-[3px] rounded-[50%] bg-transparent hover:bg-purple-bg-active-items text-purple-text-actions"
            >
                <TfiMoreAlt />
            </button>
        </div>
    );
}

ActionsMusic.propTypes = {
    isAddLibrary: PropTypes.bool,
    isAddPlaylist: PropTypes.bool,
};

export default ActionsMusic;
