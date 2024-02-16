import { Fragment } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlinePlayCircle } from "react-icons/md";

function MenuItems({ data, isExtend }) {
    const location  = useLocation();

    return (
        <Fragment>
            {data.map((items) => (
                <div
                    key={items.title}
                    className={`border-l-[3px] ${
                        location.pathname === items.path
                            ? 'bg-purple-bg-active-items border-purple-bd-color'
                            : 'border-transparent'
                    } ${isExtend ? '' : 'LM:border-l-0'}`}
                >
                    <NavLink
                        className={`group/tab flex justify-between ${isExtend ? 'justify-start' : 'LM:justify-center'} items-center py-[12px] px-[21px] ${
                            location.pathname === items.path
                                ? 'text-purple-text-primary'
                                : ' text-purple-text-secondary'
                        } hover:text-purple-text-primary`}
                        to={items.path}
                    >
                        <div className="flex gap-[12px] items-center">
                            {items.icon}
                            <p className={`${isExtend ? 'block' : 'LM:hidden'} text-[14px] font-medium whitespace-nowrap`}>{items.title}</p>
                        </div>
                        <MdOutlinePlayCircle className='hidden text-[22px] group-hover/tab:block hover:opacity-80' />
                    </NavLink>
                </div>
            ))}
        </Fragment>
    );
}

export default MenuItems;
