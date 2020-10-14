const NewsSection = (props) => {
    console.log("NewSection")
    console.log(props.results)
    return (
        <>
            { 'news' in props.results ? props.results.news.map((item, index) => {
                return (<>
                    <div class="news-section" key={index}>
                                    <div class="news-row-desktop">
                                        <div class="news-img-desktop">
                                            <a href={item.url}> <img src={'image' in item ? item.image.thumbnail.contentUrl : null}></img></a>
                                        </div>
                                        <div class="news-content-desktop">
                                            <a href={item.url}>{item.name}</a>
                                            <div class="blog-name-date">
                                                <span class="website-name">{item.provider[0].name} </span> <span class="published-date"> - {item.datePublished.split("T")[0]}</span>
                                            </div>
                                            <p>{item.description}</p>
                                            
                                        </div>
                                    </div>
                                    <div class="news-row-mobile">
                                         <div class="news-content-mobile-section">
                                             <a href={item.url}><div class="news-logo-icon">
                                               
                                             </div>
                                              <div class="news-content">
                                              {item.name}
                                             </div>
                                                 </a>
                                             <div class="time-hr">
                                                    <img src={'image' in item.provider[0] ? item.provider[0].image.thumbnail.contentUrl : null}></img>  {item.provider[0].name} - {item.datePublished.split("T")[0]}
                                                 </div>
                                          
                                            
                                        </div>
                                        <div class="news-img-mobile">
                                               <div class="news-logo">
                                                   <img src={'image' in item ? item.image.thumbnail.contentUrl : null}></img>
                                             </div>
                                        </div>
                                       
                                    </div>
                                </div>
                </>);
            }) : null}
            
        </>
    );
}

export default NewsSection;