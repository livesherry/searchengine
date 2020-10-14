const SingleImage = (props) => {
    return (
        <>
        {'imagesData' in props.results ? props.results.imagesData.value.map((image, index) => {
            {/* console.log(image?.thumbnail?.width) */}
            return (
                <React.Fragment key={index}>
                <div style={{width: image?.thumbnail?.width}} class="resultitem " tabIndex="0" onKeyDown={(e)=> {console.log(e.keyCode)}}>
                                        <div class="bg-fr-image box myClass" data-gal={index + 1 } data-imgwidth={image.thumbnail.width} data-imgheight={image.thumbnail.height} data-pos="150" style={{backgroundImage: "url(" + image.thumbnailUrl + ")"}}>
                                        </div>

                                        <div class="detailview" id={"gal" + (index + 1)}>
                                            <div class="container-fluid">
                                                <div class="carousel ">
                                                    <div class="row">
                                                        <div class="col-6 col-md-6 col-sm-6">
                                                        </div>
                                                        <div class="col-6 col-md-6 col-sm-6 text-right">
                                                            <a href="#detailClose" class="detailClose remove close-imagesinner">×</a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="delail-view-img">
                                                                <a href={image.contentUrl} target="_blank"><img src={image.contentUrl} class="img-fluid" alt=""/></a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 text-left">
                                                            <div class="detailview-text">
                                                                <h2>{image.name}</h2>
                                                                <p>Images may be subject to copyright. Find out more</p>
                                                                <p>{image.hostPageDisplayUrl}</p>
                                                                <p><span>{image.width} x {image.height}</span></p>
                                                                <a href={image.hostPageUrl} target="_blank"><button type="button" class="detail-view-btn">Visit page <i class="fas fa-external-link-alt" aria-hidden="true"></i></button></a>
                                                                <a href={image.contentUrl} target="_blank"><button type="button" class="detail-view-btn">View Images <i class="fas fa-images" aria-hidden="true"></i></button></a>






                                                            </div>    
                                                        </div>
                                                    </div>    
                                                    <a class="carousel-control-prev detailPrev" style={{cursor: 'pointer'}}>
                                                        <span class="fas fa-chevron-left" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next detailNext" style={{cursor: 'pointer'}}>
                                                        <span class="fas fa-chevron-right" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                </React.Fragment>
            );
        }) : null}
        
        </>
    );
}

export default SingleImage;