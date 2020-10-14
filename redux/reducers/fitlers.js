export const countryFilter = (state = "", action) => {
    if (action.type === 'COUNTRYFILTER'){
        return action.payload;
    }
    else{
        return state;
    }
}

export const timeFilter = (state = "", action) => {
    if (action.type === 'TIMEFILTER'){
        return action.payload;
    }
    else{
        return state;
    }
}

export const langFilter = (state = "", action) => {
    if (action.type === 'LANGFILTER'){
        return action.payload;
    }
    else{
        return state;
    }
}
