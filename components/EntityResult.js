import { useEffect, useState } from "react";
import {entitySearch} from '../helpers/search';

const EntityResult = (props) => {
    const [entity, updateEntity] = useState('');
    useEffect(() => {
        if (entity.length < 1) {
            entitySearch(props.query).then((resp) => {
                updateEntity(resp);
            })
        }
    }, [props.query, entity]);
    return (
        <>
            {Object.prototype.toString.call(entity) === '[object Object]' ? 'entities' in entity ? 
                <>
                <div class="result-body-content">
                            <div class="people-section">
                                <div class="book-row">
                                    <div class="book-name">
                                    {entity.entities.value[0].name}
                                    </div>

                                    <div class="book-share">
                                        <a href="#"><img src="/images/share-people.png"/></a>
                                    </div>
                                    <div class="book-image" style={{background: 'url('+ ('image' in entity.entities.value[0] ? entity.entities.value[0].image.thumbnailUrl : null) + ')'}}>
                                        {/* <a href="#"><img src={'image' in entity.entities.value[0] ? entity.entities.value[0].image.thumbnailUrl : null}/></a> */}
                                    </div>
                                </div>
                                <div class="p-d">
                                {entity.entities.value[0].description}…<a href={'image' in entity.entities.value[0] ? entity.entities.value[0].image.provider[0].url : null} target="_blank">Read more</a>
                                    <div class="wikipedia-icon">
                                        <i class="fab fa-wikipedia-w"></i>
                                        <a href={'image' in entity.entities.value[0] ? entity.entities.value[0].image.provider[0].url : null} target="_blank">See more on Wikipedia</a>
                                    </div>
                                </div>
                                <div class="wiki-data-fetch">
                                    Data from: <a href={'image' in entity.entities.value[0] ? entity.entities.value[0].image.provider[0].url : null} target="_blank">Wikipedia</a> <br/>Text under <a href={'image' in entity.entities.value[0] ? entity.entities.value[0].image.provider[0].url : null} target="_blank">CC-BY-SA   </a> 
                                </div>
                            </div>

                            {/* <div class="see-also">
                                <div class="col-md-12 see-also-first-section">
                                    See results for
                                </div>

                                <a href="#" class="see-also-row">


                                    <div class="see-also-content-section">

                                        <div class="ca-result-name">Madame Bovary</div> 
                                        <div class="main-content-see-also">Madame Bovary is a 2014 German-Belgian-American drama film and Bored in her marriage to a country doctor and stifled…</div>
                                    </div>
                                    <div class="see-also-image-section" style={{background: "url('data:image/jpeg;base64,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')"}}>

                                    </div>
                                </a>
                                <a href="#" class="see-also-row">


                                    <div class="see-also-content-section">

                                        <div class="ca-result-name">Madame Bovary</div> 
                                        <div class="main-content-see-also">Madame Bovary is a 2014 German-Belgian-American drama film…</div>
                                    </div>
                                    <div class="see-also-image-section" style={{background: "url('data:image/jpeg;base64,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')"}}>

                                    </div>
                                </a>
                            </div> */}
                        </div>
                {/* <div class="result-body-content">
                                    <div class="people-section">
                                        <div class="r">
                                            <div class="c-1">
                                                <div class="h-n">
                                                    {entity.entities.value[0].name}
                                                </div>
                                                <div class="d">
                                                    {entity.entities.value[0].entityPresentationInfo.entityTypeHints[0]}
                                                </div>
                                            </div>
                                            <div class="c-3">
                                                <div class="i">
                                                    <img src={'image' in entity.entities.value[0] ? entity.entities.value[0].image.thumbnailUrl : null}></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wiw">
                                              <a href={entity.entities.value[0].url} target="_blank"> {entity.entities.value[0].url}</a>
                                        </div>
                                        <div class="p-d">
                                            {entity.entities.value[0].description} <a href={'image' in entity.entities.value[0] ? entity.entities.value[0].image.provider[0].url : null} target="_blank">More</a>
                                         
                                        </div>
                                    </div>

                                 
                                </div>  */}
                                </> 
                                : null : null}
            
        </>
    );
}

export default EntityResult;