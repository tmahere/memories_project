// a reducer is a function -- that accepts the state of the web app(GPPD etc) and the action

export default(posts = [], action) =>{
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}