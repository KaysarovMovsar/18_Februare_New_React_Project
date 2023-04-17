const DIALOGS_ADD_POST = "DIALOGS-ADD-POST"
const UPDATE_ONPOST_DIALOG = "UPDATE-ONPOST-DIALOG"

let initialState = {
    dialogPostData: [
        {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
        {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
    ],
    onDialogsPost: 'IT-SCHOOL.com',

    DialogsData: [
        {id: 1, name: 'Movsar'},
        {id: 2, name: 'Ahmad'},
        {id: 3, name: 'Iman'},
        {id: 4, name: 'Bilal'},
        {id: 5, name: 'Lilia'},
    ],

    MessagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yep'},
        {id: 4, message: 'See you tomorrow'},
        {id: 5, message: 'Have a good meal!'},
    ],
}

const dialogsReducer = (state= initialState, action) => {

    switch (action.type) {
        case DIALOGS_ADD_POST:
            let dialogTextData = {
                id: 1,
                message: state.onDialogsPost,
                LikesCount: 'Like ' + 12
            }
            state.dialogPostData.push(dialogTextData)
            state.onDialogsPost = '';
            return state;
        case UPDATE_ONPOST_DIALOG:
            state.onDialogsPost = action.postMessage
            return state;
        default:
            return state;
    }
}


export const ActCreatorDialogsPostData = () => ({type : DIALOGS_ADD_POST})
export const ActCreatorOnPostDialogsData = (text) => ({type : UPDATE_ONPOST_DIALOG, postMessage: text})

export default dialogsReducer;