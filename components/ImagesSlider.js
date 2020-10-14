import { useEffect, useState } from "react";
import {slide} from '../public/js/all'
import Router from 'next/router';
import {imageSearch} from '../helpers/search';

const ImagesSlider = (props) => {
    const results = props.results;
    const [images, updateimages] = useState('')
    useEffect(() => {
        if (images.length < 1) {
            imageSearch(props.query).then((resp) => {
                updateimages(resp.value);
            })
        }
        try {
        if(typeof window !== 'undefined'){
            slide();
        }
    } catch (error) {
        
    }
    }, [images]);
    return (
        <>  
            {images.length > 2 ? <div class="result-content">
                                        <div class="result-title no-space">
                                            <div class="image-tile">
                                                <a href="#"> <span class="title">Images</span></a>
                                            </div>
                                        </div>
                                        {/* <!--                                   image slider starts here Please keep minimum 4 slides--> */}

                                         <div class="g-scrolling-carousel" id="g-scrolling-carousel">
                                            <div class="wrapperimage">
                                                <div id="wrapperimage" class="items thumbnail-container">
                                                    {images.map((image, index) => {
                                                        return (
                                                            <a href={image.contentUrl} target='_blank' key={index} class="slide"><div class="img-resize" style={{backgroundImage: 'url(' + image.thumbnailUrl + ')'}}></div></a>
                                                        );
                                                    })}
                                                
                                                </div>
                                            </div>
                                            <a id="prev" class="control prev"></a>
                                            <a id="next" class="control next"></a>
                                            <ul class="custom-ads-links padding-right-imge-slider">
                                                <li class="result-title result-title01 custom-ads-links-width">
                                                    <a onClick={() => Router.push('/images?q='+props.query)} class=""> <span class="title ads-link-font"><i class="  fas fa-arrow-right margin-right-image-slider"></i> More result in images
                                                        </span></a></li>

                                            </ul>
                                        </div> 
                                    </div> : null}
         </>
    );
}

export default ImagesSlider;