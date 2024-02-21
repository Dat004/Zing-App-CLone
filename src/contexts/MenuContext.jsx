import React, { useContext, useState } from 'react';

import { useMenu } from '../hooks';
import MenuWrapper from '../components/Popper/MenuWrapper';

const MenuContext = React.createContext();

function UserMenu() {
    return useContext(MenuContext);
}

function MenuProvider({ children }) {
    const { handleCloseMenu, handleShowMenu } = useMenu();

    const value = {
        handleCloseMenu,
        handleShowMenu,
    };

    return (
        <MenuContext.Provider value={value}>
            <MenuWrapper handleCloseMenu={handleCloseMenu}>{children}</MenuWrapper>
        </MenuContext.Provider>
    );
}

export { UserMenu, MenuProvider };
