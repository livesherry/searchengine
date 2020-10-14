import OutsideClickHandler from 'react-outside-click-handler';
import Router from 'next/router';
import {useSelector, useDispatch} from 'react-redux';
import {updateCountryFilter, updateTimeFilter, updateLangFilter } from '../redux/actions/search';
import { useState } from 'react';
import {search} from '../helpers/search';

const updateCon = (query, dispatch, type, country, countryFilter, timeFilter, langFilter) => {
    dispatch(updateCountryFilter(country));
    search(query, dispatch, type, 1, timeFilter, country, langFilter);
}

const updateLan = (query, dispatch, type, lang, countryFilter, timeFilter, langFilter) => {
    dispatch(updateLangFilter(lang));
    search(query, dispatch, type, 1, timeFilter, countryFilter, lang);
}

const updateTim = (query, dispatch, type, time, countryFilter, timeFilter, langFilter) => {
    dispatch(updateTimeFilter(time));
    search(query, dispatch, type, 1, time, countryFilter, langFilter);
}

const SubNav = (props) => {
    const [lang, updateLang] = useState('en');
    const [time, updateTime] = useState('');
    const [country, updateCountry] = useState('');

    function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("countryInput");
        filter = input.value.toUpperCase();
        let div = document.getElementById("countryDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            let txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    function toggleShow(id) {
        document.getElementById(id).classList.toggle("show");
        // document.getElementById("myDropdown").classList.toggle("show");
    }

    function toggleHide(id){
        document.getElementById(id).classList.remove("show");
    }
    
    const countryFilter = useSelector( state => state.countryFilter )
    const timeFilter = useSelector( state => state.timeFilter )
    const langFilter = useSelector( state => state.langFilter )
    const dispatch = useDispatch();

        return(
            <>
            <nav class="navbar navbar-expand navbar-light bg-theme mb-second-nav-scroll z-index-99" id="second-menu">
                    <div class="row row-aligned">

                        <div class="logo-pos" id="first-top">

                        </div>
                        <div class="search-pos padding-bottom-null" id="second-top">
                            <div class="collapse navbar-collapse text-center">
                                <ul class="navbar-nav mobile-view-style">
                                    <li class={props.highlight==="all" ? "nav-item nav-filter":"nav-item"}>
                                        <a onClick={() => Router.push('/search?q='+props.query)} href="#" class="nav-link "><i class="fas fa-search ir"></i>All</a>
                                    </li>
                                    <li class={props.highlight==="images" ? "nav-item nav-filter":"nav-item"}>
                                    <a onClick={() => Router.push('/images?q='+props.query)} class="nav-link" href="#"><i class="far fa-image ir"></i>Images</a>
                                    </li>
                                    <li class={props.highlight==="news" ? "nav-item nav-filter":"nav-item"} >
                                    <a class="nav-link" onClick={() => Router.push('/news?q='+props.query)} href="#"><i class="far fa-newspaper ir"></i>News</a>
                                    </li>
                                    <li class={props.highlight==="videos" ? "nav-item nav-filter":"nav-item"}>
                                    <a class="nav-link" onClick={() => Router.push('/videos?q='+props.query)} href="#"><i class="fas fa-video ir"></i>Videos</a>
                                    </li>
                                    {/* <li class={props.highlight==="maps" ? "nav-item nav-filter":"nav-item"}>
                                    <a class="nav-link" onClick={() => Router.push('/maps?q='+props.query)} href="#"><i class="fas fa-map-pin ir"></i>Maps</a>
                                    </li> */}

                                    <li class="nav-item">
                                        <a class="nav-link" href="#" data-toggle="collapse" onClick={() => toggleShow("demoFilter")} data-target="#demoFilter"><i class="fa fa-filter ir-s" data-toggle="collapse" data-target="#demoFilter" aria-hidden="true"></i> Filters</a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle hidden-xs" onClick={()=> toggleShow("link-dropdown")} href="#"  data-toggle="dropdown"><i class="fas fa-ellipsis-v ir-s"></i>More</a>
                                        {/* <a class="nav-link hidden-sm hidden-md hidden-lg" href="#findpopup"><i class="fas fa-ellipsis-v ir-s"></i>More</a> */}
                                        <OutsideClickHandler
                                            onOutsideClick={() => toggleHide('link-dropdown')}
                                        >
                                        <div class="dropdown-menu" id="link-dropdown">
                                            <a class="dropdown-item" href="#">Link 1</a>
                                            <a class="dropdown-item" href="#">Link 2</a>
                                            <a class="dropdown-item" href="#">Link 3</a>
                                        </div>
                                        </OutsideClickHandler>

                                        <div id="findpopup" class="overlay" >
                                            <div class="acn-popup-container" >
                                                <div class="acn-popup-content" >
                                                    <a class="dropdown-item mb-safe-search-fade" href="#">Link 1</a>
                                                    <a class="dropdown-item mb-safe-search-fade" href="#">Link 2</a>
                                                    <a class="dropdown-item mb-safe-search-fade" href="#">Link 3</a>
                                                    <div><a href="#" class="acn-popup-close-btn">X</a></div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div class="btn-pos hidden-xs">
                            {/* <!-- Please don't ignore the empty section --> */}

                        </div>
                        <div class="icon-pos" id="third-top">    
                            {/* <!-- Please don't ignore the empty section --> */}
                        </div>

                        </div>

                </nav>

                <div id="demoFilter" class="collapse">
                    <nav class="navbar row row-aligned  navbar-expand navbar-light bg-nav-second static padding-bottom-null z-index-9" id="third-menu"> 
                        <div class="row row-aligned">
                            <div class="logo-pos" id="first-top"></div>
                            <div class="search-pos" id="second-top">
                                <div class="collapse navbar-collapse text-center">
                                    <ul class="navbar-nav" id="filter-aligned">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" onClick={() => toggleShow("countryDropdown")} id="navbardrop" data-toggle="dropdown">
                                                {countryFilter!=="" ? <b>{countryFilter.split(":")[1]}</b> : "Country"}
                                            </a>
                                            {/* <!-- <a class="nav-link hidden-md hidden-sm  hidden-lg display-flex" href="#" id="navbardrop" data-toggle="modal" data-target="#myModalCountry">
                                                Country <i class="fas fa-caret-down space"></i> 
                                            </a> --> */}
                                            {/* <!----mobile version country selector started------->
                                            <!-- previous mobile version popup functionality delected -->
                                            <!----mobile version country selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('countryDropdown')}
                                                > 
                                            <div class="dropdown-menu country-scroll" id="countryDropdown">
                                                <div class="display-flex" id="country-icon">
                                                    <span class="search-icon-white flaticon-search-4 country-box"></span>
                                                    <input class="dropdown-item" type="text" placeholder="Search country" id="countryInput" onKeyUp={() => filterFunction()}></input>
                                                </div>  
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All Regions</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "AR:Argentina", countryFilter, timeFilter, langFilter)}}>Argentina</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "AU:Australia", countryFilter, timeFilter, langFilter)}}>Australia</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "AT:Austria", countryFilter, timeFilter, langFilter)}}>Austria</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "BE:Belgium", countryFilter, timeFilter, langFilter)}}>Belgium</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "BR:Brazil", countryFilter, timeFilter, langFilter)}}>Brazil</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "CA:Canada", countryFilter, timeFilter, langFilter)}}>Canada</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "CL:Chile", countryFilter, timeFilter, langFilter)}}>Chile</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "DK:Denmark", countryFilter, timeFilter, langFilter)}}>Denmark</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "FI:Finland", countryFilter, timeFilter, langFilter)}}>Finland</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "FR:France", countryFilter, timeFilter, langFilter)}}>France</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "HK:Hong Kong SAR", countryFilter, timeFilter, langFilter)}}>Hong Kong SAR</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "IN:India", countryFilter, timeFilter, langFilter)}}>India</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "ID:Indonesia", countryFilter, timeFilter, langFilter)}}>Indonesia</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "IT:Italy", countryFilter, timeFilter, langFilter)}}>Italy</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "JP:Japan", countryFilter, timeFilter, langFilter)}}>Japan</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "KR:Korea", countryFilter, timeFilter, langFilter)}}>Korea</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "MY:Malaysia", countryFilter, timeFilter, langFilter)}}>Malaysia</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "MX:Mexico", countryFilter, timeFilter, langFilter)}}>Mexico</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "NL:Netherlands", countryFilter, timeFilter, langFilter)}}>Netherlands</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "NZ:New Zealand", countryFilter, timeFilter, langFilter)}}>New Zealand</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "NO:Norway", countryFilter, timeFilter, langFilter)}}>Norway</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "CN:People's Republic of China", countryFilter, timeFilter, langFilter)}}>People's Republic of China</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "PL:Poland", countryFilter, timeFilter, langFilter)}}>Poland</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "PT:Portugal", countryFilter, timeFilter, langFilter)}}>Portugal</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "PH:Republic of the Philippines", countryFilter, timeFilter, langFilter)}}>Republic of the Philippines</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "RU:Russia", countryFilter, timeFilter, langFilter)}}>Russia</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "SA:Saudi Arabia", countryFilter, timeFilter, langFilter)}}>Saudi Arabia</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "ZA:South Africa", countryFilter, timeFilter, langFilter)}}>South Africa</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "ES:Spain", countryFilter, timeFilter, langFilter)}}>Spain</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "SE:Sweden", countryFilter, timeFilter, langFilter)}}>Sweden</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "CH:Switzerland", countryFilter, timeFilter, langFilter)}}>Switzerland</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "TW:Taiwan", countryFilter, timeFilter, langFilter)}}>Taiwan</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "TR:Turkey", countryFilter, timeFilter, langFilter)}}>Turkey</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "GB:United Kingdom", countryFilter, timeFilter, langFilter)}}>United Kingdom</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateCon(props.query, dispatch, props.type, "US:United States", countryFilter, timeFilter, langFilter)}}>United States</a>
                                            </div>
                                            </OutsideClickHandler>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("timeDrop")}  href="#" id="navbardrop" data-toggle="dropdown">
                                            {timeFilter!=="" ? <b>{timeFilter.split(":")[1]}</b> : "Time"} 
                                            </a>

                                            {/* <!----mobile version time selector started------->

                                            <!-- previous version delected -->
                                            <!----mobile version time selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('timeDrop')}
                                                > 
                                            <div class="dropdown-menu" id="timeDrop">
                                            <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Day:Past 24 Hours", countryFilter, timeFilter, langFilter)}}>Past 24 Hours</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Week:Past week", countryFilter, timeFilter, langFilter)}}>Past week</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Month:Past month", countryFilter, timeFilter, langFilter)}}>Past month</a>
                                                
                                                
                                            </div>
                                            </OutsideClickHandler>
                                        </li>
                                        {props.type === 'images' ? <><li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("sizeDrop")}  href="#" id="navbardrop" data-toggle="dropdown">
                                            {timeFilter!=="" ? <b>{timeFilter.split(":")[1]}</b> : "Size"} 
                                            </a>

                                            {/* <!----mobile version time selector started------->

                                            <!-- previous version delected -->
                                            <!----mobile version time selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('sizeDrop')}
                                                > 
                                            <div class="dropdown-menu" id="sizeDrop">
                                            <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Small", countryFilter, timeFilter, langFilter)}}>Small</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Medium", countryFilter, timeFilter, langFilter)}}>Medium</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Large", countryFilter, timeFilter, langFilter)}}>Large</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Wallpaper", countryFilter, timeFilter, langFilter)}}>Wallpaper</a>
                                                
                                                
                                            </div>
                                            </OutsideClickHandler>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("colorDrop")}  href="#" id="navbardrop" data-toggle="dropdown">
                                            {timeFilter!=="" ? <b>{timeFilter.split(":")[1]}</b> : "Color"} 
                                            </a>

                                            {/* <!----mobile version time selector started------->

                                            <!-- previous version delected -->
                                            <!----mobile version time selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('colorDrop')}
                                                > 
                                            <div class="dropdown-menu" id="colorDrop">
                                            <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "ColorOnly", countryFilter, timeFilter, langFilter)}}>Color Only</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Monochrome", countryFilter, timeFilter, langFilter)}}>Monochrome</a>
                                                
                                                
                                            </div>
                                            </OutsideClickHandler>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("typeDrop")}  href="#" id="navbardrop" data-toggle="dropdown">
                                            {timeFilter!=="" ? <b>{timeFilter.split(":")[1]}</b> : "Type"} 
                                            </a>

                                            {/* <!----mobile version time selector started------->

                                            <!-- previous version delected -->
                                            <!----mobile version time selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('typeDrop')}
                                                > 
                                            <div class="dropdown-menu" id="typeDrop">
                                            <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "AnimatedGif:Animated Gif", countryFilter, timeFilter, langFilter)}}>Animated Gif</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "AnimatedGifHttps:Animated Gif from Https", countryFilter, timeFilter, langFilter)}}>Animated Gif from Https</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Clipart:Clipart", countryFilter, timeFilter, langFilter)}}>Clipart</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Line:Line", countryFilter, timeFilter, langFilter)}}>Line</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Photo:Photo", countryFilter, timeFilter, langFilter)}}>Photo</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Shopping:Shopping", countryFilter, timeFilter, langFilter)}}>Shopping</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Transparent:Transparent", countryFilter, timeFilter, langFilter)}}>Transparent</a>
                                                
                                                
                                            </div>
                                            </OutsideClickHandler>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("licenseDrop")}  href="#" id="navbardrop" data-toggle="dropdown">
                                            {timeFilter!=="" ? <b>{timeFilter.split(":")[1]}</b> : "License"} 
                                            </a>

                                            {/* <!----mobile version time selector started------->

                                            <!-- previous version delected -->
                                            <!----mobile version time selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('licenseDrop')}
                                                >
                                            <div class="dropdown-menu" id="licenseDrop">
                                            <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Any:Any", countryFilter, timeFilter, langFilter)}}>Any</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Public:Public", countryFilter, timeFilter, langFilter)}}>Public</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Share:Share", countryFilter, timeFilter, langFilter)}}>Share</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "ShareCommercially:Share Commercially", countryFilter, timeFilter, langFilter)}}>Share Commercially</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Modify:Modify", countryFilter, timeFilter, langFilter)}}>Modify</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "ModifyCommercially:Modify Commercially", countryFilter, timeFilter, langFilter)}}>Modify Commercially</a>

                                            </div>
                                            </OutsideClickHandler>
                                        </li> </> : null}
                                        {props.type === 'videos' ? <><li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("durationDrop")}  href="#" id="navbardrop" data-toggle="dropdown">
                                            {timeFilter!=="" ? <b>{timeFilter.split(":")[1]}</b> : "Duration"} 
                                            </a>

                                            {/* <!----mobile version time selector started------->

                                            <!-- previous version delected -->
                                            <!----mobile version time selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('durationDrop')}
                                                >
                                            <div class="dropdown-menu" id="durationDrop">
                                            <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Short:Short", countryFilter, timeFilter, langFilter)}}>Short</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Medium:Medium", countryFilter, timeFilter, langFilter)}}>Medium</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "Long:Long", countryFilter, timeFilter, langFilter)}}>Long</a>

                                            </div>
                                            </OutsideClickHandler>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("resolutionDrop")}  href="#" id="navbardrop" data-toggle="dropdown">
                                            {timeFilter!=="" ? <b>{timeFilter.split(":")[1]}</b> : "Resolution"} 
                                            </a>

                                            {/* <!----mobile version time selector started------->

                                            <!-- previous version delected -->
                                            <!----mobile version time selector Ended-------> */}
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('resolutionDrop')}
                                                >
                                            <div class="dropdown-menu" id="resolutionDrop">
                                            <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "", countryFilter, timeFilter, langFilter)}}>All</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "lowerthan_360p:Lower than 360p", countryFilter, timeFilter, langFilter)}}>Lower than 360p</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "360p:360p", countryFilter, timeFilter, langFilter)}}>360p</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "480p:480p", countryFilter, timeFilter, langFilter)}}>480p</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "720p:720p", countryFilter, timeFilter, langFilter)}}>720p</a>
                                                <a class="dropdown-item-country" href="#" onClick={(e) => {updateTim(props.query, dispatch, props.type, "1080p:1080p", countryFilter, timeFilter, langFilter)}}>1080p</a>

                                            </div>
                                            </OutsideClickHandler>
                                        </li></> : null}
                                        {/* <li class="nav-item dropdown ">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("langDrop")} href="#" id="navbardrop" data-toggle="dropdown">
                                            {langFilter!=="" ? <b>{langFilter.split(":")[1]}</b> : "Languages"}
                                            </a>


                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('langDrop')}
                                                > 
                                            <div class="dropdown-menu" id="langDrop">
                                                
                                                
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "ar:Arabic", countryFilter, timeFilter, langFilter)}}>Arabic</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "zh-hans:Chinese", countryFilter, timeFilter, langFilter)}}>Chinese</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "nl:Dutch", countryFilter, timeFilter, langFilter)}}>Dutch</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "en:English", countryFilter, timeFilter, langFilter)}}>English</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "fr:French", countryFilter, timeFilter, langFilter)}}>French</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "de:German", countryFilter, timeFilter, langFilter)}}>German</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "hi:Hindi", countryFilter, timeFilter, langFilter)}}>Hindi</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "it:Italian", countryFilter, timeFilter, langFilter)}}>Italian</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "jp:Japanese", countryFilter, timeFilter, langFilter)}}>Japanese</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "pt-br:Portuguese", countryFilter, timeFilter, langFilter)}}>Portuguese</a>
                                                <a class="dropdown-item" href="#" onClick={(e) => {updateLan(props.query, dispatch, props.type, "pa:Punjabi", countryFilter, timeFilter, langFilter)}}>Punjabi</a>
                                            </div>
                                            </OutsideClickHandler>
                                        </li> */}
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={() => toggleShow("moreDrop")} href="#" id="navbardrop" data-toggle="dropdown">
                                                More Settings
                                            </a>
                                            <OutsideClickHandler
                                                    onOutsideClick={() => toggleHide('moreDrop')}
                                                > 
                                            <div class="dropdown-menu drop-menu-mb" id="moreDrop">
                                                <a class="dropdown-item" href="#">More Setting </a>
                                                <a class="dropdown-item" href="#">Search settings </a>
                                                <a class="dropdown-item" href="#">Turn on safe search </a>
                                                <a class="dropdown-item" href="#">hide private results </a>
                                                <a class="dropdown-item" href="#">Advanced search </a>
                                                <a class="dropdown-item" href="#">History </a>
                                            </div>
                                            </OutsideClickHandler>
                                        </li>

                                    </ul>
                                </div>


                            </div>

                            <div class="btn-pos hidden-xs">


                            </div>
                            <div class="icon-pos hidden-xs" id="third-top">    

                            </div>
                        </div>

                    </nav>
                </div>
        </>
        );
}

export default SubNav;