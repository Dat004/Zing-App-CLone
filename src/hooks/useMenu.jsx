import { useState } from 'react';

const useMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleCloseMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        }
    };

    const handleShowMenu = () => {
        setShowMenu(state => !state);
    };

    return { showMenu, handleCloseMenu, handleShowMenu };
};

export default useMenu;
