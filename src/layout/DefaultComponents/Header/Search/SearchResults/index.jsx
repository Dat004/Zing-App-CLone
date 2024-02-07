import PropTypes from 'prop-types';

function SearchResults({ children, className, titleHeader = 'Đề xuất cho bạn' }) {
    return (
        <div className={className}>
            <header className="px-[10px] pb-[10px] text-[14px] font-bold text-purple-text-primary">
                <p>{titleHeader}</p>
            </header>
            {children}
        </div>
    );
}

SearchResults.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    titleHeader: PropTypes.string,
};

export default SearchResults;
