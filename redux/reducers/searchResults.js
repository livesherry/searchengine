const searchResults = (state = {}, action) => {
    if (action.type === 'SEARCHRESULTS'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default searchResults;