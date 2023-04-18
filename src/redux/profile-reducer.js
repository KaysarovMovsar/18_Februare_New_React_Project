const PROFILE_PAGE_ADD = 'PROFILE-PAGE-ADD';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initializeState = {
    postData: [
        {id: 1, message: 'Hello, Who prefer React', LikesCount: 'Like ' + 12},
        {id: 2, message: 'I can try to search info', LikesCount: 'Like ' + 15},
        {id: 3, message: 'Perhaps, but it need a time', LikesCount: 'Like ' + 29}
    ],
    onPostText: 'it-incubator.com'
};

const profileReducer = (state = initializeState, action) => {

    switch (action.type ) {
        case PROFILE_PAGE_ADD:
            let setProfile =
                {
                    id: 1,
                    message: state.onPostText,
                    LikesCount: 'Like ' + 12
                }
            state.postData.push(setProfile);
            state.onPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.onPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const profilePageAddActionCreator = () => ({type: PROFILE_PAGE_ADD});
export const onPostChangedActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;