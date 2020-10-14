import {combineReducers} from 'redux';
import query from './query';
import suggestions from './suggestions';
import searchResults from './searchResults';
import {countryFilter, timeFilter, langFilter} from './fitlers';

const rootReducer = combineReducers({
    query,
    suggestions,
    searchResults,
    countryFilter,
    timeFilter,
    langFilter,
});

export default rootReducer;