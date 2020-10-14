export const updateQuery = (query) => {
    return (
        {
            type: 'UPDATEQUERY',
            payload: query,
        }
    );
}

export const updateSuggestions = (suggestion) => {
    return (
        {
            type: 'SUGGESTIONS',
            payload: suggestion,
        }
    );
}

export const updateSearchResults = (searchResults) => {
    return (
        {
            type: 'SEARCHRESULTS',
            payload: searchResults,
        }
    );
}

export const updateCountryFilter = (countryCode) => {
    return (
        {
            type: 'COUNTRYFILTER',
            payload: countryCode,
        }
    );
}

export const updateTimeFilter = (timeCode) => {
    return (
        {
            type: 'TIMEFILTER',
            payload: timeCode,
        }
    );
}

export const updateLangFilter = (langCode) => {
    return (
        {
            type: 'LANGFILTER',
            payload: langCode,
        }
    );
}