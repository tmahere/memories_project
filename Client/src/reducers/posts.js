// a reducer is a function -- that accepts the state of the web app(GPPD etc) and the action

export default(posts = [], action) =>{
    switch (action.type){
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload._id);
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id == action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}