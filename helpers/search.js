
import { SEARCHKEY } from './config';
import { updateSearchResults } from '../redux/actions/search';

export async function newsSearch (query, offset=1, freshness='', country='', lang=''){
    const offsetNews = (offset-1)*10;
    const result = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=' + query +'&count=8&offset=' + offsetNews + '&cc=' + country + '&freshness=' + freshness + '&setLang=' + lang, {
        headers: {
            'Ocp-Apim-Subscription-Key': SEARCHKEY,
        },
    });
    const data = await result.json();
    return data;
}

export async function entitySearch (query){
    const result = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/entities?q=' + query +'&mkt=en-US', {
        headers: {
            'Ocp-Apim-Subscription-Key': SEARCHKEY,
        },
    });
    const data = await result.json();
    return data;
}

export async function videoSearch (query, offset=1, freshness='', country='', lang=''){
    const offsetVideos = (offset-1)*30;
    const result = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/videos/search?q=' + query +'&count=20&mkt=en-US&offset=' + offsetVideos + '&cc=' + country + '&setLang=' + lang, {
        headers: {
            'Ocp-Apim-Subscription-Key': SEARCHKEY,
        },
    });
    const data = await result.json();
    return data;
}

export async function imageSearch (query, offset=1, freshness='', country='', lang=''){
    if (freshness === '') {
        freshness = 'month';
    }
    const offsetImages = (offset-1)*30;
    const result = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' + query +'&count=30&mkt=en-US&offset=' + offsetImages + '&cc=' + country + '&freshness=' + freshness + '&setLang=' + lang, {
        headers: {
            'Ocp-Apim-Subscription-Key': SEARCHKEY,
        },
    });
    const data = await result.json();
    
    return data;
}

export async function search(query, dispatch, type="search", offset=1, freshness='', country='', lang='en:English') {
    query = encodeURIComponent(query);
    query = query.split('%20').join('+')
    if (query === undefined){
        return null;
    }

    if (country !== ""){
        country = country.split(":")[0];
    }

    if (lang !== ""){
        lang = lang.split(":")[0];
    }
    
    if (freshness !== ""){
        freshness = freshness.split(":")[0];
    }

    // console.log(country)
    // console.log(freshness)
    // console.log(lang)
    const offsetSearch = (offset-1)*10;
    // console.log(query)
    const res = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/search?q=' + query +'&count=10&offset=' + offsetSearch + '&cc=' + country + '&freshness=' + freshness + '&setLang=' + lang, {
        headers: {
            'Ocp-Apim-Subscription-Key': SEARCHKEY,
        },
    });
    
    const data = await res.json();
    
    if(type==="search"){
        // const entity = await entitySearch(query);
        // data.entity = await entity;
        dispatch(updateSearchResults(data));
    }

    if (type==="news"){
        const newsData = await newsSearch (query, offset, freshness, country, lang);
        data.news = await newsData.value;
    }

    if (type==="videos"){
        const videosData = await videoSearch(query, offset, freshness, country, lang);
        data.videos = await videosData.value;
        data.videosData = await videosData;
    }

    if (type==="images"){
        const imagesData = await imageSearch(query, offset, freshness, country, lang);
        data.images = await imagesData.value;
        data.imagesData = await imagesData;
    }
    

    dispatch(updateSearchResults(data));
    return data;
}