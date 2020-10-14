import ImagesSlider from "./ImagesSlider";
import NewsSlider from "./NewsSlider";
import VideosSlider from "./VideosSlider";

const SingleSearchResult = (props) => {
    const results = props.results;
    return (
        <>
            {'webPages' in results ? <>{results.webPages.value.map((item, index) => {
                                                        return (<React.Fragment key={index}>
                                                            <div class="result-content" >
                                                            <div class="result-title">
                                                                <a href={item.url}> <span class="title">{item.name}‎</span></a>
                                                            </div>
                                                            <div class="result-link">
                                                                <a href={item.url}><span class="title-link">{item.url}</span></a>
                                                            </div>
                                                            <div class="description">
                                                                <p class="description-result">{item.snippet.slice(0,100)}...</p>
                                                            </div>
                                                        </div>
                                                        {index === 2 && props.page === 1 ? <><ImagesSlider results={results} query={props.query}></ImagesSlider><VideosSlider results={results} query={props.query}></VideosSlider><NewsSlider results={results} query={props.query}></NewsSlider></>:null}
                                                        </React.Fragment>
                                                        );
                                                    })} </>
                                                
                                                : null}
         </>
    );
}

export default SingleSearchResult;