const suggestions = (state = [], action) => {
    if (action.type === 'SUGGESTIONS'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default suggestions;