import PropTypes from 'prop-types';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import Button from '../Button';
import CardImage from '../CardImage';

function SliderBanner({ data }) {
    return (
        <div className="w-full">
            <div className="pt-[32px]">
                <section className="flex relative XM:mx-[-12px] mx-[-15px] mb-[20px]">
                    <div className="XM:min-w-[50%] XM:px-[12px] w-[33.33%] XM:w-[50%] px-[15px]">
                        <div className="w-full max-w-full">
                            <CardImage className='rounded-[8px]' src="https://photo-zmp3.zmdcdn.me/banner/a/a/2/6/aa26efe8ca3c4db362db11ba098fd782.jpg" />
                        </div>
                    </div>
                    <div className="XM:min-w-[50%] XM:px-[12px] w-[33.33%] XM:w-[50%] px-[15px]">
                        <div className="w-full max-w-full">
                            <CardImage className='rounded-[8px]' src="https://photo-zmp3.zmdcdn.me/banner/5/9/6/5/5965e6fa7a7f277cb55ffcd8f2d5663c.jpg" />
                        </div>
                    </div>
                    <div className="XM:min-w-[50%] XM:px-[12px] w-[33.33%] XM:w-[50%] px-[15px]">
                        <div className="w-full max-w-full">
                            <CardImage className='rounded-[8px]' src="https://photo-zmp3.zmdcdn.me/banner/c/3/c/1/c3c15e68d3d889c14a3f96301cb92168.jpg" />
                        </div>
                    </div>
                    <div className="absolute top-[50%] left-[25px] translate-y-[-50%]">
                        <Button className="w-[55px] h-[55px] !bg-purple-bg-btn hover:opacity-80" rounded>
                            <SlArrowLeft className="text-[26px]" />
                        </Button>
                    </div>
                    <div className="absolute top-[50%] right-[25px] translate-y-[-50%]">
                        <Button className="w-[55px] h-[55px] !bg-purple-bg-btn hover:opacity-80" rounded>
                            <SlArrowRight className="text-[26px]" />
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
// https://photo-zmp3.zmdcdn.me/banner/0/b/1/8/0b182ba7a0dfa01ce96907a2f7d37842.jpg

export default SliderBanner;
