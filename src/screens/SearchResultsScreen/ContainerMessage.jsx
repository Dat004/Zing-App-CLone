import PropTypes from 'prop-types';

import Image from '../../components/Image';

function ContainerMessage({ logo, message = '' }) {
    return (
        <div className="relative w-full min-h-[220px] max-h-[450px]">
            <div className="absolute inset-0">
                <div className="flex flex-col justify-center items-center h-full w-full bg-purple-bg-btn-alpha">
                    <div className="size-[90px] mb-[20px]">
                        <Image src={logo} />
                    </div>
                    <span className="text-[16px] text-purple-text-items font-medium">{message}</span>
                </div>
            </div>
        </div>
    );
}

ContainerMessage.propTypes = {
    logo: PropTypes.string,
    message: PropTypes.string,
};

export default ContainerMessage;
