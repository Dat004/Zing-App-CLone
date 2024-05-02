import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LuTrendingUp } from 'react-icons/lu';
import { TfiSearch } from 'react-icons/tfi';

import CustomLink from '../../../../../components/CustomLink';

function KeyWords({ data, keyWords = '', isRelate = false }) {
    let IconContent = isRelate ? TfiSearch : LuTrendingUp;

    return (
        <>
            <ul>
                {data
                    ? data.map((items) => {
                          let sameWords;
                          let words;

                          if (keyWords) {
                              sameWords = items.keyword.substring(0, keyWords.length);
                              words = items.keyword.substring(keyWords.length);
                          }

                          return (
                              <li
                                  key={items?.keyword}
                                  className="list-none rounded-[4px] overflow-hidden hover:bg-purple-bg-btn-alpha"
                              >
                                  <CustomLink
                                      to={`/tim-kiem/${items?.keyword}`}
                                      className="flex items-center gap-[10px] py-[8px] px-[10px] text-purple-text-primary"
                                  >
                                      <IconContent className="text-[16px] text-purple-text-items" />
                                      {keyWords ? (
                                          <>
                                              <span className="text-[14px] font-bold">
                                                  {sameWords}
                                                  {words && <span className="text-[14px] font-normal">{words}</span>}
                                              </span>
                                          </>
                                      ) : (
                                          <>
                                              <span className="text-[14px] font-normal">{items?.keyword}</span>
                                          </>
                                      )}
                                  </CustomLink>
                              </li>
                          );
                      })
                    : null}
            </ul>
            {isRelate && (
                <Link className="flex items-center gap-[10px] py-[8px] px-[10px] text-purple-text-primary rounded-[4px] overflow-hidden hover:bg-purple-bg-btn-alpha">
                    <IconContent className="text-[16px] text-purple-text-items" />
                    <span className="text-[14px] font-normal">
                        Tìm kiếm<span className="ml-[4px] font-bold">"{keyWords}"</span>
                    </span>
                </Link>
            )}
        </>
    );
}

KeyWords.propTypes = {
    data: PropTypes.array,
    keyWords: PropTypes.string,
    isRelate: PropTypes.bool,
};

export default KeyWords;
