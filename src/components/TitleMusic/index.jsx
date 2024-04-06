import classNames from 'classnames';

import CustomLink from '../CustomLink';

function TitleMusic({ children, className, to = '', ...passProps }) {
    const titleClasses = classNames('text-purple-text-primary text-[14px] font-medium leading-[1.1]', {
        [className]: className,
    }); 

    return (
        <p className={titleClasses}>
            <CustomLink to={to} {...passProps} isHover>
                {children}
            </CustomLink>
        </p>
    );
}

export default TitleMusic;
