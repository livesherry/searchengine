import React, { useEffect, useState } from 'react';
import {search} from '../helpers/search';
import {useSelector, useDispatch} from 'react-redux';
import {handlePaginationSearch} from '../helpers/searchBar';
import {pagination, paginationMob} from '../helpers/pagination';
import RelatedImageSearches from './RelatedImageSearches';
import SingleImage from './SingleImage';
import { imageSliders } from '../helpers/sliders';
import Loader from './Loader';
import OopsComponent from './Oops';

const Images = (props) => {
    const dispatch = useDispatch();
    const results = useSelector(state => state.searchResults);
    const countryFilter = useSelector( state => state.countryFilter );
    const timeFilter = useSelector( state => state.timeFilter );
    const langFilter = useSelector( state => state.langFilter );
    let query = useSelector(state => state.query);

    const [pageNum, setpageNum] = useState(1);
    const [, setArrowDirection] = useState(0);
    const pages = pagination(pageNum);
    const pagesMob = paginationMob(pageNum);

    if (query === "" || query === undefined){
        query = props.query;
    }
    useEffect(() => {
        if (!('imagesData' in results)){
            search(query, dispatch, "images");
        }
        if (typeof window !== 'undefined'){
            imageSliders();
        }
    }, [results]);

    if (!('_type' in results)){
        return (<Loader/>);
    }else{
        if (!('webPages' in results)){
            return (<OopsComponent></OopsComponent>);
        }
    }

    return(
            <>
            <div id="result-page-content" >
                <div class="inside-result-page">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">

                                { 'imagesData' in results ? <RelatedImageSearches dispatch={dispatch} results={results.imagesData.relatedSearches} page='images'></RelatedImageSearches> : null}
                                <div class="pictureView viewchange picflex">
                                    
                                    
                                    <SingleImage results={results}></SingleImage>

                                    
                                    
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row">

                <div class="col-md-12">
                    {/* <!--desktop version--> */}
                    <center class="hidden-xs">
                    <div class="pagination py-3 mb-border-100" id="pagination">
                    <table>
                            <tbody>
                                <tr>
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(0); setpageNum(pageNum===1 ? 1 : pageNum-1); handlePaginationSearch(e, dispatch, "images", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-left"></i> </a>
                                            </td>
                                            {pages.map((number, index) => {
                                                return (
                                                    <td key={index}>
                                                        <a href="#" onClick={(e) => {setpageNum(number); handlePaginationSearch(e, dispatch, "images", query, number, timeFilter, countryFilter, langFilter);}} class={pageNum===number ? "active" : ""}>{number}</a>
                                                    </td>
                                                );
                                            })}
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(1); setpageNum(pageNum+1); handlePaginationSearch(e, dispatch, "images", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-right"></i> </a>
                                            </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                    </center>

                    {/* <!--mobile version starts--> */}
                    <center class="hidden-lg hidden-md hidden-sm">
                    <div class="pagination py-3 mb-border-100" id="pagination">
                    <table>
                                <tbody>
                                            <tr>
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(0); setpageNum(pageNum===1 ? 1 : pageNum-1); handlePaginationSearch(e, dispatch, "images", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-left"></i> </a>
                                            </td>
                                            {pagesMob.map((number, index) => {
                                                return (
                                                    <td key={index}>
                                                        <a href="#" onClick={(e) => {setpageNum(number); handlePaginationSearch(e, dispatch, "images", query, number, timeFilter, countryFilter, langFilter);}} class={pageNum===number ? "active" : ""}>{number}</a>
                                                    </td>
                                                );
                                            })}
                                            <td>
                                                <a href="#" onClick={(e) => {setArrowDirection(1); setpageNum(pageNum+1); handlePaginationSearch(e, dispatch, "images", query, pageNum, timeFilter, countryFilter, langFilter);}} > <i class="fas fa-chevron-right"></i> </a>
                                            </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                    </center>
                </div>


            </div>
            </>
    );
}

export default Images;