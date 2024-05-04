import { Fragment } from 'react';

import { SliderBanner, SliderPlaylist } from '../../components/Slider';
import PartnerLayout from '../../components/PartnerLayout';
import { PlaylistItems } from '../../components/Item';
import BoxContent from '../../components/BoxContent';
import Banner from '../../components/Banner';
import NewRelease from './NewRelease';

function HomeScreen({ dataHome = [] }) {
    return (
        <Fragment>
            {dataHome?.items?.map((items, index) => {
                const isTitle = !!items?.title;
                const isPlaylist = items?.sectionType === 'playlist' && !items?.options?.autoSlider;
                const isSliderBanner = items?.sectionType === 'banner';
                const isNewRelease = items?.sectionType === 'new-release';
                const isPlayListHasDes = items?.sectionType === 'playlist' && items?.itemType === 'description';
                const isBanner = items?.sectionType === 'weekChart';
                const isSliderPlaylist = items?.sectionType === 'playlist' && items?.options?.autoSlider;
                const getData =
                    (items?.sectionType === 'playlist' && items?.itemType === 'description') ||
                    (items?.sectionType === 'playlist' && !items?.options?.autoSlider)
                        ? items?.items?.slice(0, 5)
                        : items?.items;

                return (
                    <Fragment key={index}>
                        {isSliderBanner && <SliderBanner data={getData} />}
                        {isNewRelease && (
                            <NewRelease data={getData} title={items?.title} isHeader={isTitle ? true : false} />
                        )}
                        {isPlaylist && (
                            <BoxContent
                                title={items?.title}
                                to={items?.link?.split('.')[0]}
                                isHeader={isTitle ? true : false}
                                isSeeAll
                            >
                                <PlaylistItems
                                    data={getData}
                                    isShowTitlePlaylist={!isPlayListHasDes ? true : false}
                                    isShowArtists={!isPlayListHasDes ? true : false}
                                />
                            </BoxContent>
                        )}
                        {isBanner && <Banner data={getData} />}
                        {isSliderPlaylist && (
                            <BoxContent title={items?.title} isHeader={isTitle ? true : false}>
                                <SliderPlaylist
                                    data={getData}
                                    isShowTitlePlaylist={!isPlayListHasDes ? true : false}
                                    isShowArtists={!isPlayListHasDes ? true : false}
                                />
                            </BoxContent>
                        )}
                    </Fragment>
                );
            })}
            <PartnerLayout />
        </Fragment>
    );
}

export default HomeScreen;
