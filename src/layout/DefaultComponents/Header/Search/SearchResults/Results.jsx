import PropTypes from 'prop-types';
import CardMusic from '../../../../../components/CardMusic';

function Results({ data }) {
    return <CardMusic />;
}

Results.propTypes = {
    data: PropTypes.object,
};

export default Results;
