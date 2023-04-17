const ADD_POST_NEWS_ELEMENT = "ADD-POST-NEWS-ELEMENT"
const ON_POST_NEWS_ELEMENT = "ON-POST-NEWS-ELEMENT"

let initialState = {
    newsPostData: [
        {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
        {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
    ],
    onNewsPost: 'NonthreateningSchool.ru'
}

const newsReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_POST_NEWS_ELEMENT:
            let newsTextData = {
                id: 1,
                message: state.onNewsPost,
                LikesCount: 'Like ' + 12
            }
            state.newsPostData.push(newsTextData)
            state.onNewsPost = '';
            return state;
        case ON_POST_NEWS_ELEMENT:
            state.onNewsPost = action.message
            return state;
        default:
            return state;
    }
}


export const ActCreatorAddPostNewsElement = () => ({type: ADD_POST_NEWS_ELEMENT})
export const UpdateCreatorOnPostNewsElement = (text) => ({type: ON_POST_NEWS_ELEMENT, message: text})

export default newsReducer;