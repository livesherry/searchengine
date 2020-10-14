import {handleSubmit} from '../helpers/searchBar';
const RelatedSearchs = (props) => {
    const results = props.results;
    const dispatch = props.dispatch;
    return (
        <>
            <div class="search-title strelated">
                                    <span class="light-grey"> Searches related to {props.query} </span>
                                </div>
            <div class="related-searches-title">

            <div class="related-searches-result">
                <div class="related-searches-inside">
                    <ul className="related-tag-line padding-for-related-serach-bottom">
                    { 'relatedSearches' in results ? results.relatedSearches.value.map((item, index) => {
                                return (
                                    <li  className="relatedtag" style={{float: 'left', height: 'fit-content', padding: '10px 10px', margin: '5px 5px 5px 0', lineHeight: '1.2', borderRadius: '30px', border: '0.5px solid #dfe1e5', transition: 'all .1s ease-in', WebkitTransition: 'all .1s ease-in', cursor: 'pointer', color: '#1a0dab'}}>
                                    <a className="tag-title" onClick={(e) => handleSubmit(e, dispatch, props.type, item.text)}>{item.text}</a><i class="fas fa-chevron-right float-right hidden-sm hidden-lg hidden-md"></i>
                                </li>
                                );
                            }) : null}


                    </ul>

                </div>
            </div>
            </div>
        </>
    );
}

export default RelatedSearchs;