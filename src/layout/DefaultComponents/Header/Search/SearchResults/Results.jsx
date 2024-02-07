import { Link } from 'react-router-dom';
import Image from '../../../../../components/Image';

function Results({ data }) {
    return (
        <div>
            <section className='py-[8px] px-[10px] hover:bg-purple-bg-active-items rounded-[5px] overflow-hidden'>
                <div className='flex items-center'>
                    <div className='mr-[10px] cursor-pointer'>
                        <Image widthImg='52px' heightImg='52px' src='https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/2/7/8/527879fe969864e5e149db25432debb0.jpg' />
                    </div>
                    <div className='flex-auto'>
                        <Link className='max-w-[calc(100%-90px)] text-[14px] text-purple-text-primary font-medium cursor-pointer hover:text-link-text-hover'>Anh nhà ở đâu thế?</Link>
                        <p className='text-[12px] text-purple-text-items font-medium'>AMEE, B Ray</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Results;
