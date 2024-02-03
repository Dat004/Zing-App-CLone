import DATAS from "../../../../tempData";
import MenuItems from "./MenuItems";

function Menu({ isExtend }) {
    return (
        <nav className="mt-[70px]">
            <MenuItems data={DATAS.DATA_MENU_TOP} isExtend={isExtend} />
            <span className="block h-px my-[16px] mx-[25px] bg-purple-bg-active-items"></span>
            <MenuItems data={DATAS.DATA_MENU_BOTTOM_CLIENT} isExtend={isExtend} />
        </nav>
    );
}

export default Menu;
