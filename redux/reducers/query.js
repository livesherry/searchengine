const query = (state = '', action) => {
    if (action.type === 'UPDATEQUERY'){
        return action.payload;
    }
    else{
        return state;
    }

}
export default query;