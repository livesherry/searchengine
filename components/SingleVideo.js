function calculateDate(videoDate){
    videoDate = new Date(videoDate);
    const today = new Date();
    let dateDiff = (today-videoDate)/(1000*3600*24);
    const hours = (Math.ceil(24/((dateDiff % 1).toFixed(1).substring(2)))).toString();
    const days = Math.floor(dateDiff).toString();
    let dateCalculated = '';
    if (days!=='0' && days!=='Infinity' && days!=='infinity'){
        dateCalculated = dateCalculated + days + ' days ';
    }
    if (hours!=='0' && hours!=='Infinity' && hours!=='infinity'){
        dateCalculated = dateCalculated + hours + ' hours ';
    }
    return dateCalculated;
}

const SingleVideo = (props) => {
    return (<>
        {'videosData' in props.results && props.results.videosData.value.length > 2 ? props.results.videosData.value.map((video) => {
            const dateCalculated = calculateDate(video.datePublished);
            let duration = "";
            if ('duration' in video) {
            duration = video.duration.substring(2).split("M");
            console.log(duration)
            if (duration.length < 2){
                duration = duration[0].substring(0, duration[0].length - 1)
            }else{
            duration = duration[0] + ":" + duration[1].substring(0, duration[1].length - 1);
            }
            }
            else{
                duration = "--:--"
            }
            return (<>
                <li class="col-video-grid">
                    <a href={video.hostPageUrl} target="_blank"  >
                    <div class="video-width" style={{backgroundImage: 'url(' + video.thumbnailUrl + ')'}}>
                                                <div class="video-duration-time"><i class='fas'>&#xf04b;</i> <span>{duration}</span></div>
                                            </div>
                                            <div class="video-section-content">
                                                <div class="video-title">
                                                    <p>{video.name}</p>
                                                </div>
                                                <div class="video-bottom-section">
                                                    <div class="video-player-name">
                                                        <div class="our-green"><i class="fab fa-youtube"></i> {'publisher' in video ? video.publisher[0].name : null} <i class='fas'>&#xf105;</i>  {'creator' in video ? video.creator.name : null}  </div> {video.viewCount} views <i class='fas'>&#xf105;</i> {dateCalculated} ago
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                </li>
            </>);
        }) : null}
    </>);
}

export default SingleVideo;