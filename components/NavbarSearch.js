import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import SubNav from './SubNav';
import {useSelector, useDispatch} from 'react-redux';
import {handleSubmit, handleChange} from '../helpers/searchBar';
import Link from 'next/link'
import { updateQuery } from '../redux/actions/search';
import {keyDetectNav} from '../helpers/utility';
import {scrollFunction} from '../helpers/utility';

const toggleShow = (id) => {
    document.getElementById(id).classList.toggle("show");
    // document.getElementById("myDropdown").classList.toggle("show");
}

const toggleHide = (id) => {
    document.getElementById(id).classList.remove("show");
}

const NavbarSearch = (props) => {
    const dispatch = useDispatch();
    const [toggleSuggestions, updateToggleSuggestions] = useState(0);
    let type = 'search';
    if (props.type !== undefined){
        console.log('in type')
        console.log('in type' + props.type)
        type = props.type;
    }
    let sugg = -1;
    let q = '';
    let suggestions = useSelector( state => state.suggestions);
    suggestions = suggestions.slice(0,6);
    let query = useSelector( state => state.query);
    const [propUse, updatePropUse] = useState(1);
    if ((query === "" || query === undefined) && propUse === 1){
        query = props.query;
    }
    const [lukallSafeSearchesMade, updateLukallSafeSearchesMade] = useState('0');
    useEffect((e)=> {
    if (typeof window !== 'undefinded'){
        updateLukallSafeSearchesMade(localStorage.getItem('lukallSafeSearchesMade'));
        window.onscroll = function () {
            scrollFunction();
        };
    }}, [])
    return (
            
            <div id="ads-result">
            <div class="header-box">
                <nav id="navbarsticky" class="navbar navbar-expand navbar-dark bg-theme sticky-top z-index-9999">
                    <div class="navbar-collapse collapse">
                        <div class="container-fluid">
                            {/* <!-- mobile view header opens --> */}

                            <div class="row-mobile hidden-md hidden-lg hidden-sm">

                                <div class="logo-pos" id="first-top">
                                    <a className="navbar-brand"><img src="/logo-2.png" className="ads-img"></img></a>
                                </div> 
                                {/* <!-- mobile view bell --> */}

                                <div class="icon-pos" id="third-top">    
                                    <div class="hidden-sm hidden-lg hidden-md">

                                        <button type="button" onClick={() => toggleShow('myModalMob')} class="mb-modal" data-toggle="modal" data-target="#myModalMob">
                                            <i class="fa fa-bell"></i>
                                        </button>
                                        <div class="modal fade" id="myModalMob" role="dialog">
                                            <div class="modal-dialog">

                                                {/* <!-- Modal content--> */}
                                                <OutsideClickHandler
                                                            onOutsideClick={() => toggleHide('myModalMob')}
                                                        >
                                                    <div class="modal-content">

                                                        <div class="modal-body">

                                                            <a href="#"> <p class="mb-safe-search-fade">{lukallSafeSearchesMade} Safe searches made</p></a>

                                                            {/* <a href="#" onClick={() => toggleShow('myModal-UnsafeSearch')}> <p class="mb-safe-search-fade">Unsafe searches reported</p></a> */}


                                                        </div>

                                                    </div>
                                                </OutsideClickHandler>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- mobile version menu icon --> */}
                                    <div class="hidden-sm hidden-lg hidden-md">

                                        <button type="button" onClick={() => toggleShow('myModal1')} class="mb-modal" data-toggle="modal" data-target="#myModal1">
                                            <div class="fas fa-th opacity"></div>
                                        </button>
                                        <div class="modal fade" id="myModal1" role="dialog">
                                            <div class="modal-dialog modal-dialog1">

                                                {/* <!-- Modal content--> */}
                                                <OutsideClickHandler
                                                        onOutsideClick={() => toggleHide('myModal1')}
                                                    >
                                                    <div class="modal-content">

                                                        <div class="modal-body">
                                                            <div class="mb-theme">
                                                                <p class="change-theme-p">Change Theme</p>
                                                                <a href="" class=""><img src="images/skyblue.png" class="theme-icon-mb"></img></a> 

                                                                <a href="" class=""><img src="images/green-theme.png" class="theme-icon-mb"></img></a>

                                                            </div>

                                                            <Link href='/settings'><a href="#"> <p className="mb-safe-search-fade">More Settings</p></a></Link>

                                                            <a href="#"> <p class="mb-safe-search-fade">About us</p></a>


                                                            <a href="#"> <p class="mb-safe-search-fade">Adversting</p></a>
                                                            <a href="https://safesearchengine.com/partner-us"> <p class="mb-safe-search-fade">partner with us</p></a>
                                                            <a href="#"> <p class="mb-safe-search-fade">Blog</p></a>
                                                            <a href="#"> <p class="mb-safe-search-fade">Help</p></a>
                                                        </div>

                                                    </div>
                                                </OutsideClickHandler>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row-mobile hidden-md hidden-lg hidden-sm">
                                <div class="search-pos" id="second-top">
                                    {/* <form action="#" class="my-auto d-inline w-100"> */}
                                        <div class="input-group">
                                        <input id="myInput" name="search" onClick={(e) => {
                                            updateToggleSuggestions(1);
                                            sugg = -1;
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
                                                    keyDetectNav(e, sugg);
                                                }catch(err){}
                                            }} onChange={(e) => {
                                                updatePropUse(0);
                                                handleChange(e, dispatch, query)}} type="text" className="form-control" value={query} autoFocus placeholder="Search the web"></input>
                                            <span class="input-group-append">
                                                <button id="myBtn" type="submit" value="search" onClick={(e) => handleSubmit(e, dispatch, type, query)} class="btn-header btn-top-search flaticon-search-4 border border-left-0 search">

                                                </button>
                                            </span>
                                            <OutsideClickHandler
                        onOutsideClick={(e) => {updateToggleSuggestions(0)}}>
                                            {toggleSuggestions === 1 ? <div id="myInputautocomplete-list" className="autocomplete-items">
                            {typeof window !== 'undefined' ? localStorage.getItem('lukallAutoSuggest') === 'true' ?
                               suggestions.map((data, index) => (
                                    <><div id={'sug' + index} data-query={data.query} onClick={async (e) => handleSubmit(e, dispatch, type, data.query)}>{data.query}</div></>
                                ))
                            : null : null}
                        </div>:null}</OutsideClickHandler>
                                        </div>
                                    {/* </form> */}
                                </div>
                            </div>
                            {/* <!-- mobile view header closed -->
                            <!-- desktop header strts --> */}
                            <div class="row row-aligned hidden-xs">

                                <div class="logo-pos" id="first-top">
                                    <Link href="/"><a class="navbar-brand" onClick={(e) => {dispatch(updateQuery(""))}}><img src="/logo-2.png" class="ads-img"></img></a></Link>
                                </div>
                                <div class="search-pos" id="second-top">
                                    {/* <form action="#" class="my-auto d-inline w-100"> */}
                                        <div class="input-group">
                                        <input id="myInput" name="search" onClick={(e) => {
                                            updateToggleSuggestions(1);
                                            sugg = -1;
                                        }}  autoComplete="off" onKeyDown={(e) => {
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
                                                    keyDetectNav(e, sugg);
                                                }catch(err){}
                                            }} onChange={(e) => {
                                                updatePropUse(0);
                                                handleChange(e, dispatch, query)}} type="text" className="form-control" value={query} autoFocus placeholder="Search the web"></input>
                                            <span class="input-group-append">
                                                <button id="myBtn" type="submit" value="search" onClick={(e) => handleSubmit(e, dispatch, type, query)} class="btn-header btn-top-search flaticon-search-4 border border-left-0 search">

                                                </button>
                                            </span>
                                            <OutsideClickHandler
                        onOutsideClick={(e) => {updateToggleSuggestions(0)}}>
                                            {toggleSuggestions === 1 ? <div id="myInputautocomplete-list" className="autocomplete-items">
                                            { typeof window !== 'undefined' ? localStorage.getItem('lukallAutoSuggest') === 'true' ?
                                            suggestions.map((data, index) => (
                                                    <><div id={'sugg' + index} data-query={data.query} onClick={async (e) => handleSubmit(e, dispatch, type, data.query)}>{data.query}</div></>
                                                ))
                                            : null : null}
                                        </div>:null}
                                        </OutsideClickHandler>
                                        </div>
                                    {/* </form> */}
                                </div>
                                {/* <div id='ypaAdWrapper-SSE_Top_Center'></div> */}

                                <div class="btn-pos hidden-xs">
                                    <div class=" hidden-xs hidden-sm">
                                        <a href="https://chrome.google.com/webstore/detail/lukall-safe-search-engine/mdmnmnbijfcipfljmnioicccjlnnecdd" target="_blank" class="d-btn f15-s-padd"><i class="fa fa-desktop ico-right"></i> Make Default Search Engine</a></div>

                                </div>
                                <div class="icon-pos" id="third-top">    
                                    <ul class="navbar-nav ml-auto justify-content-end">


                                        <div class="hidden-xs">


                                            <div class="dropdown1">
                                                <a class=""> <i class="dropbtn1 fa fa-bell"></i></a>
                                                <div class="dropdown-content1">
                                                    <a>{lukallSafeSearchesMade} Safe searches made</a>
                                                    {/* <a href="#" data-toggle="modal" data-target="#myModal-UnsafeSearch" onClick={() => toggleShow('myModal-UnsafeSearch')}>Unsafe searches reported</a> */}

                                                </div>
                                            </div>
                                        </div>

                                        <li className="nav-item">
                                                <div className="dropdown hidden-xs">
                                                <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('myDropdown')}
                                                > 
                                                    <div className=""><button onClick={() => toggleShow('myDropdown')} className="fas fa-th dropbtn opacity" title="menu" alt="menu"></button></div>
                                                    <div id="myDropdown" className="dropdown-content">
                                                        <div className="content-in">
                                                        <div className="divided-effect">
                                                        <p><a href="#">Make default search engine</a></p>
                                                        <p><a href="https://safesearchengine.com/partner-us"><strong>Partner with us</strong></a></p>
                                                        </div>
    
                                                        <div className="themes">
                                                        <div className="divided-effect">
                                                            {/* <p><a href="#">Select your theme</a></p>
                                                            
                                                            <div className="social-media-icons"> 
                                                                
                                                                <p> <a href="" className="padd-0"><img src="images/skyblue.png" className="theme-icon"></img></a>&nbsp;<a href="" className="padd-0"><img src="images/green-theme.png" className="theme-icon"></img></a></p>
                                                            
                                                            </div> */}
                                                            
                                                            <Link href='/settings'><p><a href="#">More setting</a></p></Link>
    
                                                            </div>
                                                            <div className="divided-effect">
                                                            <div className="side-nav-content">
                                                                <p><a href="https://safesearchengine.com/about-us/" className="padding-5">About us</a></p>
                                                                <p><a href="#" className="padding-5">Advertising</a></p>
                                                            <p> <a href="#" className="padding-5">Privacy</a></p>
                                                                <p><a href="#" className="padding-5">Terms</a></p>
                                                            </div>
                                                        </div>
                                                            <div className="divided-effect">
                                                            <div className="side-nav-content">
                                                                <p><a href="https://safesearchengine.com/blogs/" className="padding-5">Blog</a></p>
                                                                <p><a href="https://safesearchengine.com/help/" className="padding-5">Help</a></p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    </div>
                                                    </OutsideClickHandler>
                                                </div>
    
                                            </li>
                                    </ul>
                                </div>

                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </nav>
                
                {props.subNav === "true" && <SubNav highlight={props.highlight} query={query} type={type}/>}

                </div>
            <div className="modal fade z-index" id="myModal-UnsafeSearch">
            <div className="modal-dialog modal-unsafesearch modal-dialog-centered">
                <OutsideClickHandler
                    onOutsideClick={() => toggleHide('myModal-UnsafeSearch')}
                >
                <div className="modal-content unsafe-bg">

                    {/* <!-- Modal Header --> */}
                    <div className="padding-30">

                        <form>
                            <h5 className="modal-title help-heading modal-font-weight" >Why do you considered it unsafe?*</h5>
                            <div className="space"></div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio1" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio1"> &nbsp;&nbsp;This is vulgar or sexually explicit</label>
                            </div> 
                            <div className="space"></div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio2" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio2"> &nbsp;&nbsp;This is hateful, racist or offensive</label>
                            </div> 
                            <div className="space"></div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio3" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio3"> &nbsp;&nbsp;This is harmful, dangerous or violent</label>
                            </div> 
                            <div className="space"></div>

                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio4" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio4"> &nbsp;&nbsp;This is misleading or inaccurate</label>
                            </div> 
                            <div className="space"></div>
                            <div className="space"></div>
                            <h5 className="modal-title help-heading modal-font-weight"> &nbsp;&nbsp;Comments or Suggestions<i className="color-grey modal-font-weight">(Optional)</i></h5>

                            <input type="text" className="form-control suggest-style" placeholder="Type your Comments or Suggestions here" />
                            <div className="space"></div>
                            <div className="space"></div>
                            <div className="space"></div>
                            <div className="space"></div>
                            <div className="space"></div>
                            <center>


                                <button type="button" className="btn btn-red" data-toggle="modal" onClick={() => toggleShow('myModalsend-report')} data-target="#myModalsend-report">Send</button> <button onClick={() => toggleHide('myModal-UnsafeSearch')} type="button" className="btn btn-cancel" data-dismiss="modal">Cancel</button>
                            </center>


                        </form>


                    </div>



                    <div className="popup-footer text-center color-grey imp-footer-style">
                        <small><sup>*</sup>The data you provide helps improve Lukall.</small>
                    </div>
                </div>
                </OutsideClickHandler>
            </div>
            
        </div>
        
        <div className="modal fade z-index" id="myModalsend-report" role="dialog">
            <div className="modal-dialog modal-dialog-partner">
                <div className="modal-content partner-content">

                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">

                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <OutsideClickHandler
                        onOutsideClick={() => toggleHide('myModalsend-report')}
                    >
                    <div className="modal-body">
                        <img src="images/smile-1.png" className="smile-img" alt=""/>
                        <p className="modal-title">Thanks for your feedback! </p>
                        <div className="space"></div>
                        <p className="modal-title">Your responses help us to improve the Lukall experience. </p>
                    </div>
                    </OutsideClickHandler>
                    {/* <!-- Modal footer --> */}


                </div>
            </div>
        </div>
        </div>
        );
    }

export default NavbarSearch;
