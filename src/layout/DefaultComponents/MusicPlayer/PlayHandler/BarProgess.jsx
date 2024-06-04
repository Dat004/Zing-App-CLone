import { DurationTime } from '../../../../components/TimeComponent';
import MusicActions from '../../../../redux/actions/MusicActions';
import InputSlider from '../../../../components/InputSlider';

function BarProgess({ data = {} }) {
    const { ON_CHANGE_CURRENT_TIME, ON_SEEKED_MUSIC, ON_PLAYING_MUSIC } = MusicActions();
    const { duration } = data.musicData.currentDataMusic;
    const { currentTime } = data.musicState;

    const handleChangeValue = (e) => {
        ON_CHANGE_CURRENT_TIME(e.target.value);
    };

    const handleDrop = () => {
        ON_SEEKED_MUSIC(false);
        ON_PLAYING_MUSIC(true);
    };

    const handleDrag = () => {
        ON_SEEKED_MUSIC(true);
        ON_PLAYING_MUSIC(false);
    };

    return (
        <div className="flex items-center mb-[5px]">
            <DurationTime
                className="flex items-center justify-center mr-[10px] min-w-[45px]"
                duration={+currentTime}
                isMilitaryTime
                isFontColorDark
            />
            <InputSlider
                onMouseDown={handleDrag}
                onMouseUp={handleDrop}
                onChange={handleChangeValue}
                min={0}
                max={duration}
                value={currentTime}
                className="flex items-center flex-grow h-[15px]"
                heigthSlider="4px"
                widthThumb="12px"
                heightThumb="12px"
            />
            <DurationTime
                className="flex items-center justify-center ml-[10px] min-w-[45px]"
                duration={+duration}
                isMilitaryTime
                isFontColorDark
            />
        </div>
    );
}

export default BarProgess;
