const SETTING_ADD_POST = "SETTING-ADD-POST";
const UPDATE_SET_ADD_POST = "UPDATE-SET-ADD-POST";

let initialState = {
    settingPostData: [
        {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
        {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
    ],
    onSettingPost: 'IT-NOT_ENOUGH_SCHOOL.COM',
}

const settingsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETTING_ADD_POST: {
            let settingTextData = {
                id: 0,
                message: state.onSettingPost,
                LikesCount: 'Like ' + 12
            }
            let stateCopy = {...state}
            stateCopy.settingPostData = [...state.settingPostData]
            stateCopy.settingPostData.push(settingTextData)
            stateCopy.onSettingPost = ""
            return stateCopy;
        }
        case UPDATE_SET_ADD_POST: {
            let stateCopy = {...state}
            stateCopy.onSettingPost = [...state.onSettingPost]
            stateCopy.onSettingPost = action.postMessage
            return stateCopy;
        }
        default:
            return state;
    }
}


export const ActCreatorSettingAddPostData = () => ({type: SETTING_ADD_POST})
export const ActCreatorUpdateSetAddPost = (text) => ({type: UPDATE_SET_ADD_POST, postMessage: text})


export default settingsReducer;