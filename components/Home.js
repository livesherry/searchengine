import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {handleSubmit, handleChange} from '../helpers/searchBar';
import {keyDetectHome} from '../helpers/utility';
import { updateQuery } from '../redux/actions/search';
import OutsideClickHandler from 'react-outside-click-handler';

const Homepage = (props) => {
    const dispatch = useDispatch();
    let sugg = -1;
    let q = '';
    // dispatch(updateQuery(""))
    const [toggleSuggestions, updateToggleSuggestions] = useState(0);
    let suggestions = useSelector( state => state.suggestions);
    suggestions = suggestions.slice(0,6);
    let query = useSelector( state => state.query);
    useEffect((e)=>{
        dispatch(updateQuery(""))
    }, [])
    return (
        <div className="wrap-header-v3" id="home-v3">
<div className="main-content">
    <div className="container-fluid footer-position">
  
        <div className="row row-height">
            <div className="col-md-3 col-lg-3 col-sm-1">

            </div>
            <div className="col-md-6 col-lg-6 col-sm-10 margin-center">
                <div className="logo-input-form-search">
                    <div className="logo-lukall">
                        <img src="/logo-2.png" className="img-responsive logo-lukall" alt="" title=""></img>
                        <br/><br/>  
                    </div>
                </div>
                <div className="my-auto d-inline w-100">
                    <div className="input-group box-shadow">
                        <input id="myInput" name="search" onClick={(e) => {
                            sugg = -1;
                            updateToggleSuggestions(1);
                        }} autoComplete="off" onKeyDown={(e) => {
                            if (e.keyCode === 40){
                                if ((sugg + 1 ) < 6){
                                sugg = sugg +1;
                                }else{
                                    sugg = 0;
                                }
                                q = document.getElementById('sug'+sugg).getAttribute('data-query');
                            }else if(e.keyCode === 38){
                                if ((sugg - 1 ) > -1){
                                sugg = sugg - 1;
                                }else{
                                    sugg = 5;
                                }
                                q = document.getElementById('sug'+sugg).getAttribute('data-query');
                            }else if(sugg === -1){
                                q = document.getElementById('myInput').value;
                            }
                            try{
                                if (e.keyCode === 13){
                                    handleSubmit(e, dispatch, "search", q)
                                }
                                keyDetectHome(e, sugg);
                            }catch(err){}
                        }} onChange={(e) => handleChange(e, dispatch, query)} type="text" className="form-control" value={query} autoFocus placeholder="Search the web"></input>
                        <i className="l-icon"></i>
                        <span className="input-group-append">
                            <button id="myBtn" type="submit" value="search" onClick={(e) => handleSubmit(e, dispatch, "search", query)} className="btn btn-top-search flaticon-search-4 border border-left-0 search">
                            </button>
                        </span>
                        <OutsideClickHandler
                        onOutsideClick={(e) => {updateToggleSuggestions(0)}}>
                        {toggleSuggestions === 1 ? <div id="myInputautocomplete-list" className="autocomplete-items">
                            { typeof window !== 'undefined' ? localStorage.getItem('lukallAutoSuggest') === 'true' ?
                               suggestions.map((data, index) => (
                                    <><div key={index} id={'sug' + index} data-query={data.query} onClick={async (e) => handleSubmit(e, dispatch, "search", data.query)}>{data.query}</div></>
                                ))
                            : null : null}
                        </div> : null}
                        </OutsideClickHandler>
                    </div>
                </div>
                <div className="s-s hidden-xs"><h1><span className="s-s-in"><span className="safer-color-green">Safe Search Engine</span> for Kids, Students & Society </span></h1></div>
                      <div className="s-s hidden-md hidden-lg hidden-sm"><h1><span className="s-s-in"><span className="safer-color-green">Safe Search Engine</span><br/>for Kids, Students & Society </span></h1></div>
                <div className="searh-default-homepage-btn hidden-xs"><a href="https://chrome.google.com/webstore/detail/lukall-safe-search-engine/mdmnmnbijfcipfljmnioicccjlnnecdd" target="_blank" className="d-btn"><i className="fa fa-desktop ico-right"></i> Make Default Search Engine</a></div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-1">
            </div></div> 
        
        </div>
    <div className="home-v3-footer">
        <div className="container-fluid">
            <div className="row dark-white">
                 <div className="col-md-3 col-lg-3 col-sm-1 text-center self-aligned hidden-xs">
                     <p><span className="padding-right">© 2019 SafeSearchEngine</span></p>
                </div>
                  <div className="col-md-3 col-lg-3 col-sm-1 text-center self-aligned hidden-md hidden-sm hidden-lg  padding-top-md download-app">
                     <a href="#" className=" sh-lt"><span><i className="fas fa-download"></i> Download</span></a>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-10 text-center pad-btm">
                    <p className="font-upper">Share to make the world safer</p>
                    <a href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/facebook-icon.png"></img></a>
                            <a href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/whatsapp-icon.png"></img></a>
                            <a href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/twitter-icon.png"></img></a>
                            <a href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/linkedin-icon.png"></img></a>
                            {/* <a href="https://plus.google.com" class="soc" target="_blank"><img class="" src="/images/googleplus-icon.png"></img></a> */}
                            <a href="https://www.addtoany.com/add_to/google_gmail?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/gmail-icon.png"></img></a>
                 <div className="col-md-3 col-lg-3 col-sm-1 text-center self-aligned hidden-md hidden-sm hidden-lg hidden-xs padding-top-md">
                     <p><span className="padding-right">© 2019 Lukall</span></p>
                </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-1 self-aligned hidden-xs">
                     <div className="">
                     <a href="https://safesearchengine.com/partner-us"><span className="sh-lt"><i className="  fas fa-hands-helping ico-right"></i> Partner with us</span></a>
                 </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-1">

                </div>
                <div className="col-md-6 col-lg-6 col-sm-10 text-center">
                    <p><span className="hidden-lg hidden-sm hidden-md"><a>© 2019 SafeSearchEngine</a> |</span> <a href="https://safesearchengine.com/privacy">Privacy Policy</a> | <a href="https://safesearchengine.com/terms">Terms and Conditions</a> | <a href="https://safesearchengine.com/contact-us">Contact Us</a></p>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-1">
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    );
}


export default Homepage;

