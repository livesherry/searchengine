import React, { useEffect, useState } from 'react';
import {search} from '../helpers/search';
import {useSelector, useDispatch} from 'react-redux';
import {handlePaginationSearch} from '../helpers/searchBar';
import {pagination, paginationMob} from '../helpers/pagination';
import NewsSection from './NewsSection';
import Loader from './Loader';
import OopsComponent from './Oops';

const NewsPage = (props) => {
    const dispatch = useDispatch();
    const results = useSelector(state => state.searchResults);
    const countryFilter = useSelector( state => state.countryFilter );
    const timeFilter = useSelector( state => state.timeFilter );
    const langFilter = useSelector( state => state.langFilter );
    let query = useSelector(state => state.query);

    const [pageNum, setpageNum] = useState(1);
    const [arrowDirection, setArrowDirection] = useState(0);
    const pages = pagination(pageNum);
    const pagesMob = paginationMob(pageNum);

    if (query === "" || query === undefined){
        query = props.query;
    }
    useEffect(() => {
        if (!('news' in results)){
            search(query, dispatch, "news");
        }
    }, [query, results]);

    if (!('_type' in results)){
        return (<Loader/>);
    }else{
        if (!('webPages' in results)){
            return (<OopsComponent></OopsComponent>);
        }
    }
        return(
            <>
            <div id="result-page-content">
                <div class="inside-result-page">
                    <div class="container-fluid">
                        <div class="row con-row">
                            <div class="con-col-1">

                            </div>
                            <div class="con-col-2 padding-bottom-10">
                                <div class="search-title strelated">
                                <span class="light-grey"> About {Object.keys(results).length !== 0 ? results.webPages.totalEstimatedMatches : null} results </span>
                                    {"queryContext" in results ? "alteredQuery" in results.queryContext ? <div class="padding-top-20"><p class="black-color-1">Showing results for : <span class="link-suggestion"> <a href="#" class="s-suggestion"><i>{results.queryContext.originalQuery}</i></a></span> </p><p class="black-color">Search instead for <span class="link-suggestion-1"> <a onClick={(e) => handleSubmit(e, dispatch, results.queryContext.alteredQuery)} class="s-suggestion"><i>{results.queryContext.alteredQuery}</i></a></span> </p></div> : null : null}
                                </div>
                                <NewsSection results={results}></NewsSection>

                            </div>
                        </div>
                        {/* <!--Pagination starts here--> */}
                        <div class="row">
                            <div class="col-md-1">

                            </div>
                            <div class="col-md-7">

                                {/* <!--desktop version--> */}
                    <center class="hidden-xs">
                    <div class="pagination py-3 mb-border-100" id="pagination">
                    <table>
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(0); setpageNum(pageNum===1 ? 1 : pageNum-1); handlePaginationSearch(e, dispatch, "news", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-left"></i> </a>
                                            </td>
                                            {pages.map((number, index) => {
                                                return (
                                                    <td>
                                                        <a href="#" onClick={(e) => {setpageNum(number); handlePaginationSearch(e, dispatch, "news", query, number, timeFilter, countryFilter, langFilter);}} class={pageNum===number ? "active" : ""}>{number}</a>
                                                    </td>
                                                );
                                            })}
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(1); setpageNum(pageNum+1); handlePaginationSearch(e, dispatch, "news", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-right"></i> </a>
                                            </td>
                                        </table>
                                    </div>
                    </center>

{/* <!--mobile version starts--> */}
<center class="hidden-lg hidden-md hidden-sm">
<div class="pagination py-3 mb-border-100" id="pagination">
<table>
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(0); setpageNum(pageNum===1 ? 1 : pageNum-1); handlePaginationSearch(e, dispatch, "news", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-left"></i> </a>
                                            </td>
                                            {pagesMob.map((number, index) => {
                                                return (
                                                    <td>
                                                        <a href="#" onClick={(e) => {setpageNum(number); handlePaginationSearch(e, dispatch, "news", query, number, timeFilter, countryFilter, langFilter);}} class={pageNum===number ? "active" : ""}>{number}</a>
                                                    </td>
                                                );
                                            })}
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(1); setpageNum(pageNum+1); handlePaginationSearch(e, dispatch, "news", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-right"></i> </a>
                                            </td>
                                        </table>
                                    </div>
                    </center>
                            </div>

                            
                        </div>
                        <div class="col-md-3">

                        </div>
                    </div>
                    {/* <!--pagination ends here--> */}
                </div>
            </div>
            </>
        );
}

export default NewsPage;