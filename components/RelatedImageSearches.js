import {handleSubmit} from '../helpers/searchBar';
const RelatedImageSearches = (props) => {
    
    try{
        // console.log(props.results)
        return (
            <div class="g-scrolling-carousel" id="g-scrolling-carousel">
                                        <div class="wrapperimage wrapperimg">
                                        <div class="items nowrap thumbnail-containerimg" id="wrapperimg">
                                                {props.results.map((term, index) => {
                                                    return (<div key={index} class="relatedtag suggimg"><a onClick={(e) => handleSubmit(e, props.dispatch, props.page, term.displayText)} href="#" class="tag-title">{term.displayText} </a></div>);
                                                })}
                                            </div>
                                        </div>
                                        <a id="previmg" class="control prev leftarrowimage"></a>
                                        <a id="nextimg" class="control next rightarrowimage"></a>
    
            </div>
        );
    }catch(error){
        return null;
    }
}

export default RelatedImageSearches;