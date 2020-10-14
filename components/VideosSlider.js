import { useEffect, useState } from "react";
import {slidev} from '../public/js/all'
import Router from 'next/router';
import {videoSearch} from '../helpers/search';

const VideoSlider = (props) => {
    const results = props.results;
    const [videos, updateVideos] = useState('')
    useEffect(() => {
        if (videos.length < 1) {
            videoSearch(props.query).then((resp) => {
                updateVideos(resp.value);
            })
        }
        try {
            if(typeof window !== 'undefined'){
                slidev();
            }
    } catch (error) {
        
    }
    }, [videos]);
    return (
        <>
            {'videos' in results ? videos.length > 2 ?  <div class="result-content">
                                        <div class="result-title no-space">
                                            <div class="image-tile">
                                                <a href="#"> <span class="title">Videos </span></a>
                                            </div>
                                        </div>

                                        <div class="g-scrolling-carousel-v" id="g-scrolling-carousel-v">
                                            <div class="wrappervideos">
                                                <div class="itemsv thumbnail-containervideos" id="wrappervideos">
                                                    {videos.length >1 ? videos.map((video, index) => {
                                                        return (
                                                            <div class="news__item1" key={index}>
                                                        <div class="news__img2" style={{backgroundImage: 'url(' + video.thumbnailUrl + ')'}}>
                                                            {/* <img src={video.thumbnailUrl} alt="news"></img> */}
                                                        </div>  

                                                        <div class="news_content">
                                                            <p class="ytb-content"><a href={video.contentUrl}>{video.name.slice(0, 45)}...</a> </p>
                                                            <br/>
                                                            <div class="report-safe">

                                                                <small class="small-width1"><a href={video.contentUrl} class="youtube-link color-fff"><i class="fab fa-youtube color-fff"></i> {video.publisher[0].name} <i class="fas fa-arrow-right color-fff"></i></a></small>
                                                                <small class="small-width"><small class="color-fff">{video?.datePublished.split("T")[0]}</small></small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                        );
                                                    }) : null}

                                                </div>
                                            </div>
                                            <ul class="custom-ads-links padding-right-imge-slider">
                                                <li class="result-title result-title01 custom-ads-links-width">
                                                    <a href="#" class="" onClick={() => Router.push('/videos?q='+props.query)}> <span class="title ads-link-font"><i class="  fas fa-arrow-right margin-right-image-slider"></i> More result in videos
                                                        </span></a></li>

                                            </ul>
                                            <a id="prevv" class="controln prevn"></a>
                                            <a id="nextv" class="controln nextn"></a>
                                        </div>

                                    </div> : null : null}
         </>
    );
}

export default VideoSlider;