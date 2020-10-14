import React, { useEffect, useState } from 'react';
import {search} from '../helpers/search';
import {useSelector, useDispatch} from 'react-redux';
import {handleSubmit, handlePaginationSearch} from '../helpers/searchBar';
import SingleSearchResult from './SingleSearchResult';
import RelatedSearchs from './RelatedSearches';
import EntityResult from './EntityResult';
import {pagination, paginationMob} from '../helpers/pagination';
import Loader from './Loader';
import OopsComponent from './Oops';

// import { countryFilter } from '../redux/reducers/fitlers';

const SearchPage = (props) => {
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
    // const [q, setQ] = useState(query);
    // console.log(result);
    useEffect(() => {
        if (!('webPages' in results)){
            search(query, dispatch, "search");
        }
    }, [query, results]);

    if (!('_type' in results)){
        return (<Loader/>);
    }else{
        if (!('webPages' in results)){
            return (<OopsComponent></OopsComponent>);
        }
    }

        return (
            <>
            {/* <!--body of the page starts here--> */}
            <div id="result-page-content" >
                <div class="inside-result-page">
                    <div class="container-fluid">
                        <div class="row con-row">
                            <div class="con-col-1">

                            </div>
                            <div class="con-col-2 padding-bottom-10">
                           
                                <div class="search-title strelated">
                                    <span class="light-grey"> About {Object.keys(results).length !== 0 ? results.webPages.totalEstimatedMatches : null} results </span>
                                    {"queryContext" in results ? "alteredQuery" in results.queryContext ? <div class="padding-top-20"><p class="black-color-1">Showing results for : <span class="link-suggestion"> <a href="#" class="s-suggestion"><i>{results.queryContext.alteredQuery}</i></a></span> </p><p class="black-color">Search instead for <span class="link-suggestion-1"> <a onClick={(e) => handleSubmit(e, dispatch, 'search', results.queryContext.originalQuery)} class="s-suggestion"><i>{results.queryContext.alteredQuery}</i></a></span> </p></div> : null : null}
                                    
                                </div>
                                {pageNum === 1 ? <div id='ypaAdWrapper-SSE_Top_Center'></div> : null}
                                
                                
                                {/* <!--Time zone section started--> */}
                                {/* <div class="time-zone-section">

                                    <div class="time-display">
                                        <div class="time">
                                            <h2>
                                                5:05 AM
                                            </h2>
                                        </div>
                                        <div class="date-day">
                                            <p>Saturday, 2 November 2019(UTC)</p>
                                        </div>
                                        <div class="location">
                                            <p>London, United Kingdom</p>
                                        </div>


                                    </div>
                                </div> */}




                                {/* <!--Time zone section ends-->
                                <!--calculator section started--> */}
                                {'computation' in results ? <div class="calci-zone-section">

                                    <div class="calci-display">
                                        <div class="calci">
                                            <h2>
                                                {results?.computation?.expression} = {results?.computation?.value}
                                            </h2>
                                        </div>
                                    </div>
                                </div> : null}




                                {/* <!--calculator section ends--> */}

                                {/* <div class="result-body-content"> */}


                                    {/* <!--result content starts--> */}
                                    {/* <div class="result-content" >
                                        <div class="result-title">
                                            <a href="#"> <span class="title">Top Crowdfunding Sites for Fundraising - Official Site</span></a>
                                        </div>
                                        <div class="result-link">
                                            <a href="#"><span class="title-link"><span class="ad-cs">Ad</span>https://www.crowdfunding.com</span></a>
                                        </div>
                                        <div class="description">
                                            <p class="description-result">Learn about crowdfunding & fundraising online. Compare ranking, features and fees for top crowdfunding and fundraising platforms.</p>
                                        </div> */}
                                        {/* <!--Ads using ul starts--> */}
                                        {/* <ul class="custom-ads-links">
                                            <li class="result-title result-title01 custom-ads-links-width">
                                                <a href="#" class=""> <span class="title ads-link-font">Crowdfunding</span></a>
                                                <a href="#" class=""> <span class="title ads-link-font">Crowdfunding</span></a>
                                            </li>
                                            <li class="result-title result-title01 custom-ads-links-width">
                                                <a href="#" class=""> <span class="title ads-link-font">Crowdfunding</span></a>
                                                <a href="#" class=""> <span class="title ads-link-font">Crowdfunding</span></a>
                                            </li>
                                        </ul> */}
                                        {/* <!--ads using ul ends here--> */}
                                    {/* </div> */}
                                    {/* <!--result content ends--> */}



                                {/* </div> */}

                                {/* <div class="result-body-content"> */}


                                    {/* <!--result content starts--> */}
                                    {/* <div class="result-content" >
                                        <div class="result-title">
                                            <a href="#"> <span class="title">Top Crowdfunding Sites for Fundraising - Official Site</span></a>
                                        </div>
                                        <div class="result-link">
                                            <a href="#"><span class="title-link"><span class="ad-cs">Ad</span>https://www.crowdfunding.com</span></a>
                                        </div>
                                        <div class="description">
                                            <p class="description-result">Learn about crowdfunding & fundraising online. Compare ranking, features and fees for top crowdfunding and fundraising platforms.</p>
                                        </div> */}
                                        {/* <!--Ads using ul starts--> */}
                                        {/* <ul>
                                            <li class="result-title result-title01">
                                                <a href="#" class=""> <span class="title">Crowdfunding</span></a>
                                                <p class="description description-result">Crowdfunding is the practice of funding a project or venture by raising small amounts of money</p>
                                            </li>
                                            <li class="result-title result-title01">
                                                <a href="#" class="result-title"> <span class="title">Crowdfunding</span></a>
                                                <p class="description description-result">Crowdfunding is the practice of funding a project or venture by raising small amounts of money</p>



                                            </li>
                                        </ul> */}
                                        {/* <!--ads using ul ends here--> */}
                                    {/* </div> */}
                                    {/* <!--result content ends--> */}



                                {/* </div> */}
                                {/* <div class="result-body-content"> */}


                                    {/* <!--result content starts--> */}
                                    {/* <div class="result-content" >
                                        <div class="result-title">
                                            <a href="#"> <span class="title">Top Crowdfunding Sites for Fundraising - Official Site</span></a>
                                        </div>
                                        <div class="result-link">
                                            <a href="#"><span class="title-link"><span class="ad-cs">Ad</span>https://www.crowdfunding.com</span></a>
                                        </div>
                                        <div class="description">
                                            <p class="description-result">Learn about crowdfunding & fundraising online. Compare ranking, features and fees for top crowdfunding and fundraising platforms.</p>
                                        </div> */}
                                        {/* <!--Ads using ul starts--> */}
                                        {/* <ul>
                                            <li class="result-title result-title01">
                                                <a href="#" class=""> <span class="title">Crowdfunding</span></a>
                                                <p class="description description-result">Crowdfunding is the practice of funding a project or venture by raising small amounts of money</p>
                                            </li>
                                            <li class="result-title result-title01">
                                                <a href="#" class="result-title"> <span class="title">Crowdfunding</span></a>
                                                <p class="description description-result">Crowdfunding is the practice of funding a project or venture by raising small amounts of money</p>



                                            </li>
                                        </ul> */}
                                        {/* <!--ads using ul ends here--> */}
                                    {/* </div> */}
                                    {/* <!--result content ends--> */}



                                {/* </div> */}
                                {/* <div class="result-body-content"> */}


                                    {/* <!--result content starts--> */}
                                    {/* <div class="result-content">
                                        <div class="result-title">
                                            <a href="#"> <span class="title">Top Crowdfunding Sites for Fundraising - Official Site</span></a>
                                        </div>
                                        <div class="result-link">
                                            <a href="#"><span class="title-link"><span class="ad-cs">Ad</span>https://www.crowdfunding.com</span></a>
                                        </div>
                                        <div id="half-stars-example">
                                            <div class="rating-group"> 
                                                <input class="rating__input rating__input--none" checked="" name="rating2" id="rating2-0" value="0" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="0 stars" class="rating__label" htmlFor="rating2-0" style={{pointerEvents: 'none'}}><span style={{color:'orange', fontWeight:'bold'}}>4.3</span> </label>
                                                <label aria-label="0.5 stars" class="rating__label rating__label--half" for="rating2-05" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-05" value="0.5" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="1 star" class="rating__label" for="rating2-10" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-10" value="1" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="1.5 stars" class="rating__label rating__label--half" htmlFor="rating2-15" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-15" value="1.5" type="radio"></input>
                                                <label aria-label="2 stars" class="rating__label" for="rating2-20"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-20" value="2" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="2.5 stars" class="rating__label rating__label--half" for="rating2-25" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-25" value="2.5" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="3 stars" class="rating__label" for="rating2-30" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-30" value="3" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="3.5 stars" class="rating__label rating__label--half" for="rating2-35" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-35" value="3.5" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="4 stars" class="rating__label" for="rating2-40" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-40" value="4" type="radio" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="4.5 stars" class="rating__label rating__label--half" for="rating2-45" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-45" value="4.5" type="radio" checked="" disabled="" style={{pointerEvents: 'none'}}></input>
                                                <label aria-label="5 stars" class="rating__label" for="rating2-50" style={{pointerEvents: 'none'}}><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                                <input class="rating__input" name="rating2" id="rating2-50" value="5" type="radio" style={{pointerEvents: 'none'}}></input>
                                            </div>
                                            <span class="mute" style={{color: '#9b9b9b',fontSize: 0.9 + 'em'}}>rating - 1,813 reviews for crowdfunding.com</span> 



                                        </div>
                                        <div class="description">
                                            <p class="description-result microsoft-privacy">Learn about crowdfunding & fundraising online. Compare ranking, features and fees for top crowdfunding and fundraising platforms.</p>
                                        </div>
                                    </div> */}
                                    {/* <!--result content ends--> */}
                                {/* </div> */}
                                {/* <!--privacy section starts--> */}
                                {/* <!--  <div class="privacy-line">
                                     <span class="border-privacy"></span>
                                     <span class="microsoft">Ads and Search Results From Microsoft <a href="https://privacy.microsoft.com/en-US/privacystatement" target="_blank"> (Privacy)</a></span>
                                 </div> -->
                                <!--privacy section ends--> */}
                

                                <div class="result-body-content">


                                    {/* <!--result content starts--> */}
                                    <SingleSearchResult results={results} page={pageNum} query={query}></SingleSearchResult>
                                    {pageNum === 1 ? <div id='ypaAdWrapper-SSE_Algo'></div> : null}
                                    {/* <!--result content ends-->
                                    
                                   


                                    {/* <!--this below section is not for api just for UI purpose only--> 
                                    <!--Please dont integrate api for this-->
                                    <!--but note you should add this section for video slider functionality purpose. please keep as it is--> */}
                                    <div class="" style={{height: 0 + 'px'}}>
                                        <div class="g-scrolling-carousel-v" style={{visibility: 'hidden'}}>
                                            <div class="itemsv">

                                                <a href="#"><div class=""><img src="" alt="news"></img></div></a>
                                                <a href="#"><div class=""><img src="" alt="news"></img></div></a>
                                                <a href="#"><div class=""><img src="" alt="news"></img></div></a>
                                                <a href="#"><div class=""><img src="" alt="news"></img></div></a>
                                                <a href="#"><div class=""><img src="" alt="news"></img></div></a>
                                                <a href="#"><div class=""><img src="" alt="news"></img></div></a>
                                                <a href="#"><div class=""><img src="" alt="news"></img></div></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="related-searches-content">
                                        <RelatedSearchs type={'search'} occurence={'1'}  query={query} results={results} dispatch={dispatch}></RelatedSearchs>
                                       

                                    </div>
                                </div>
                            </div>
                            <div class="con-col-3 hidden-xs">
                                {/* <!-- 
                                                                <div class="search-title strelated">
                                                                    <span class="light-grey"> Sponsored Results</span>
                                                                </div>  --> */}
                                {pageNum === 1 ? <EntityResult query={query} page={pageNum}></EntityResult> : null}

                                <RelatedSearchs type={'search'} occurence={'2'} query={query} dispatch={dispatch} results={results}></RelatedSearchs>
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
                                                <a href="#" onClick={(e) => {setArrowDirection(0); setpageNum(pageNum===1 ? 1 : pageNum-1); handlePaginationSearch(e, dispatch, "search", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-left"></i> </a>
                                            </td>
                                            {pages.map((number, index) => {
                                                return (
                                                    <td>
                                                        <a href="#" onClick={(e) => {setpageNum(number); handlePaginationSearch(e, dispatch, "search", query, number, timeFilter, countryFilter, langFilter);}} class={pageNum===number ? "active" : ""}>{number}</a>
                                                    </td>
                                                );
                                            })}
                                            <td>
                                                <a href="#" onClick={(e) => { setArrowDirection(1); setpageNum(pageNum+1); handlePaginationSearch(e, dispatch, "search", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-right"></i> </a>
                                            </td>
                                        </table>
                                    </div>
                    </center>

{/* <!--mobile version starts--> */}
<center class="hidden-lg hidden-md hidden-sm">
<div class="pagination py-3 mb-border-100" id="pagination">
                                        <table>
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(0); setpageNum(pageNum===1 ? 1 : pageNum-1); handlePaginationSearch(e, dispatch, "search", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-left"></i> </a>
                                            </td>
                                            {pagesMob.map((number, index) => {
                                                return (
                                                    <td>
                                                        <a href="#" onClick={(e) => {setpageNum(number); handlePaginationSearch(e, dispatch, "search", query, number, timeFilter, countryFilter, langFilter);}} class={pageNum===number ? "active" : ""}>{number}</a>
                                                    </td>
                                                );
                                            })}
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(1); setpageNum(pageNum+1); handlePaginationSearch(e, dispatch, "search", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-right"></i> </a>
                                            </td>
                                        </table>
                                    </div>
                    </center>
                            </div>

                             
                        
                        <div class="col-md-3">

                        </div>
                    </div>
                    {/* <!--pagination ends here--> */}
                </div>
            </div>

        </div> 

                
            </>
        );
    };


export default SearchPage;