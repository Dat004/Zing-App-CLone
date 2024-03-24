import { useState } from 'react';

const useLoadingState = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleSetLoadingState = (state) => {
        setIsLoading(state);
    };

    return { isLoading, handleSetLoadingState };
};

export default useLoadingState;
