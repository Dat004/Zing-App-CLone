import { useState, useEffect, Fragment } from 'react';

import { PlayBoldIcon } from '../components/CustomIcon';
import apiService from '../apiProvider';
import CardMusic from '../components/CardImage/CardMusic';

function NewRelease() {
    const [newData, setNewData] = useState({});

    useEffect(() => {
        (async () => {
            const data = await apiService.newReleaseApi();

            setNewData({ ...data?.data });
        })();
    }, []);

    return (
        <div className="mt-[70px]">
            <div className="pt-[40px]">
                {Object.keys(newData).length > 0 ? (
                    <Fragment>
                        <header className="flex items-center mb-[32px]">
                            <h3 className="text-[40px] leading-[1.225] font-bold text-purple-text-primary">
                                {newData?.title}
                            </h3>
                            <i className="ml-[10px] hover:opacity-90 cursor-pointer">
                                <PlayBoldIcon />
                            </i>
                        </header>
                        <CardMusic data={newData?.items} />
                    </Fragment>
                ) : null}
            </div>
        </div>
    );
}

export default NewRelease;
