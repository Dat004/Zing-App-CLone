import { Link } from "react-router-dom";

import Sidebar from "./DefaultComponents/Sidebar";
import Menu from "./DefaultComponents/Sidebar/Menu";
import FooterSide from "./DefaultComponents/Sidebar/FooterSide";


function DefaultLayout({ children }) {
    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar className='min-h-height-content max-h-full w-[240px] bg-purple-bg-side-bar'>
                <div className="fixed top-0 flex justify-start items-center w-[240px] h-[70px] pl-[28px] pr-[25px]">
                    <Link className="w-[120px] h-[40px] bg-dark-logo bg-contain bg-no-repeat"></Link>
                </div>
                <Menu />
                <FooterSide />
            </Sidebar>
            <div className="min-h-height-content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
