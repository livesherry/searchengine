import { useEffect, useState } from "react";
import {sliden} from '../public/js/all'
import Router from 'next/router';
import {newsSearch} from '../helpers/search';

const NewsSlider = (props) => {
    const results = props.results;
    const [news, updateNews] = useState('')
    const [noNews, updateNoNews] = useState(0)
    useEffect(() => {
        if (news.length < 1 && noNews === 0) {
            newsSearch(props.query).then((resp) => {
                if (resp.value.length > 1){
                    updateNews(resp.value);
                }else{
                    updateNoNews(1);
                }
                
            })
        }
        try {
            if(typeof window !== 'undefined' && noNews === 0){
                sliden();
            }
    } catch (error) {
        
    }
    }, [news]);
    return (
        <>
            {news.length > 2 ? <div class="result-content">

<div class="result-title no-space">
    <div class="image-tile">
        <a href="#"> <span class="title">News </span></a>
    </div>
</div>

<div class="g-scrolling-carousel-n" id="g-scrolling-carousel-n">
    <div class="wrappernews">
        <div class="itemsn thumbnail-containernews" id="wrappernews">
            
            {news.length > 2 ? news.map((item, index)=>{
                let backURL = "/images/news.png";
                if (item.provider[0].image !== undefined) {
                    backURL = item.provider[0].image.thumbnail.contentUrl;
                 }else{
                    backURL = "/images/news.png";
                 }
                return (<a href={item.url} class="news__item newsClass" key={index}>
                <div class="news__img1" style={{backgroundImage: 'url(' + backURL + ')'}}>
                {/* <img src={item.provider[0].image !== undefined ? item.provider[0].image.thumbnail.contentUrl : "/images/news.png"} alt="news"></img> */}
                {/* <img src="/images/news.png" alt="news"></img> */}
                </div>
                <div class="news_content1">
                    <p>{item.name.slice(0, 45)}...</p><br></br>
                    <div className="report-safe"><small><b class="s-green">{item.provider[0].name} - </b>{item.datePublished.split("T")[0]}</small></div>

                </div>
            </a>);
            }) : null}
            
        </div>
    </div>
    <ul class="custom-ads-links padding-right-imge-slider">
        <li class="result-title result-title01 custom-ads-links-width">
            <a href="#" class="" onClick={() => Router.push('/news?q='+props.query)}> <span class="title ads-link-font"><i class="  fas fa-arrow-right margin-right-image-slider"></i> More result in news
                </span></a></li>

    </ul>
    <a id="prevn" class="controln prevn"></a>
    <a id="nextn" class="controln nextn"></a>
</div>

</div> : null}
         </>
    );
}

export default NewsSlider;