export default (state=[], action)=>{
    // RULES
    // Must have value apart from undefined
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;
        default:
            return state;
    }
}