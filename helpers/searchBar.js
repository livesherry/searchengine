import {SUGGESTIONKEY} from './config';
import {updateQuery, updateSuggestions} from '../redux/actions/search';
import Router from 'next/router';
import {search} from './search';

export async function handleSubmit(e, dispatch, type, query, offset=1) {
    const lukallSafeSearchesMade = localStorage.getItem('lukallSafeSearchesMade');
    if (lukallSafeSearchesMade === null || lukallSafeSearchesMade === undefined || lukallSafeSearchesMade === 'undefined'){
        localStorage.setItem('lukallSafeSearchesMade', 0);
    }else{
        localStorage.setItem('lukallSafeSearchesMade', parseInt(lukallSafeSearchesMade)+1);
    }
    console.log(`Safe Searches Made: ${localStorage.getItem('lukallSafeSearchesMade')}`)
    e.preventDefault();
    await dispatch(updateSuggestions([]));
    await dispatch(updateQuery(query));
    query = encodeURIComponent(query);
    // console.log(`Encoded Submit QuERY: ${query}`)
    query = query.split('%20').join('+')
    // console.log(`Submit QuERY: ${query}`)
    search(query, dispatch, type, offset);
    Router.push('/' + type + '?q=[query]', '/' + type + '?q='+query);
}

export async function handlePaginationSearch(e, dispatch, type, query, offset=1, freshness='', country='', lang='en') {
    await dispatch(updateSuggestions([]));
    await dispatch(updateQuery(query));
    e.preventDefault();
    search(query, dispatch, type, offset, freshness, country, lang);
}

export async function handleChange(e, dispatch, query) {
    query = e.target.value;
    query = encodeURIComponent(query);
    query = query.split('%20').join('+')
    await dispatch(updateQuery(e.target.value));
    const res = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q=' + query, {
        headers: {
            'Ocp-Apim-Subscription-Key': SUGGESTIONKEY,
        },
    });
    const data = await res.json();

    await dispatch(updateSuggestions(data.suggestionGroups[0].searchSuggestions));
}
