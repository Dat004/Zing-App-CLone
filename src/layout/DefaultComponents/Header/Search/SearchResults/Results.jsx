import PropTypes from 'prop-types';
import CardMusic from '../../../../../components/CardMusic';

function Results({ data }) {
    return <CardMusic data={data} className="py-[8px] px-[10px] hover:bg-purple-bg-active-items" isHoverName />;
}

Results.propTypes = {
    data: PropTypes.object,
};

export default Results;
