import { useState, useEffect, Fragment } from 'react';

import apiService from '../apiProvider';
import Playlists from '../components/PlayLists';
import { Top100Banner } from '../components/CustomIcon';

function Top100() {
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await apiService.top100Api();

            setNewData(data?.data);
        })();
    }, []);

    return (
        <Fragment>
            {newData.length > 0 ? (
                <Fragment>
                    <div className='flex items-center justify-center mt-[90px]'>
                        <i>
                            <Top100Banner />
                        </i>
                    </div>
                    {newData?.map((items, index) => (
                        <Playlists
                            className={`${items?.viewType === 'slider' ? 'flex-nowrap' : 'flex-wrap'} gap-y-[30px]`}
                            key={index}
                            data={items?.items}
                            title={items?.title}
                            isHeader
                            isShowArtists
                            isShowTitlePlaylist
                        />
                    ))}
                </Fragment>
            ) : null}
        </Fragment>
    );
}

export default Top100;
