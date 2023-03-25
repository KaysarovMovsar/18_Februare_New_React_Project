const ADD_POST_ELEMENT = "ADD-POST-ELEMENT"
const UPDATE_ON_POST_CHANGE = "UPDATE-ON-POST-CHANGE"

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST_ELEMENT:
            let newsTextData = {
                id: 1,
                message: state.onChangeData,
                LikesCount: 'Like ' + 12
            }
            state.PostsData.push(newsTextData)
            state.onChangeData = '';
            return state;
        case UPDATE_ON_POST_CHANGE:
            state.onChangeData = action.postMessage
            return state;
        default:
            return state;
    }
}

export const ActCreatorAddPostElement = () => ({type: ADD_POST_ELEMENT})
export const UpdateOnPostChangeActCreator = (text) => ({type: UPDATE_ON_POST_CHANGE,  postMessage: text})

export default profileReducer;