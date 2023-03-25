import ProfileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            PostsData: [
                {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
                {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
            ],
            onChangeData: 'It-kamasutra.com'
        },

        dialogPage: {

            DialogsData: [
                {id: 1, name: 'Movsar'},
                {id: 2, name: 'Ahmad'},
                {id: 3, name: 'Iman'},
                {id: 4, name: 'Bilal'},
                {id: 5, name: 'Lilia'},
            ],
            onDialogsPost: 'IT-SCHOOL.com',

            MessagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yep'},
                {id: 4, message: 'See you tomorrow'},
                {id: 5, message: 'Have a good meal!'},
            ],

            dialogPostData: [
                {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
                {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
            ],

            settingPostData: [
                {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
                {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
            ],
            onSettingPost: 'IT-NOT_ENOUGH_SCHOOL.COM',

            newsPostData: [
                {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
                {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
            ],
            onNewsPost: 'IntonotenoughSchool.ru'
        },
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._rerenderEntireTree(this._state)
    },

    addPostNewsElement (){
        let newsTextData = {
            id: 1,
            message: this._state.dialogPage.onNewsPost,
            LikesCount: 'Like ' + 12
        }
        this._state.dialogPage.newsPostData.push(newsTextData)
        this._state.dialogPage.onNewsPost = ''
        this._rerenderEntireTree(this._state)
    },


    OnPostNewsElement (postMessage){
        this._state.dialogPage.onNewsPost = postMessage
        this._rerenderEntireTree(this._state)
    },

    dialogsAddPost () {
        let dialogTextData = {
            id: 1,
            message: this._state.dialogPage.onDialogsPost,
            LikesCount: 'Like ' + 12
        }
        this._state.dialogPage.dialogPostData.push(dialogTextData)
        this._state.dialogPage.onDialogsPost = '';
        this._rerenderEntireTree(this._state)
    },

    updateOnpostDialog (postMessage) {
        this._state.dialogPage.onDialogsPost = postMessage
        this._rerenderEntireTree(this._state)
    },



    settingsAddPost () {
        let settingTextData = {
            id: 0,
            message: this._state.dialogPage.onSettingPost,
            LikesCount: 'Like ' + 12
        }
        this._state.dialogPage.settingPostData.push(settingTextData)
        this._state.dialogPage.onSettingPost = ""
        this._rerenderEntireTree(this._state)
    },

    updateSetAddPost (postMessage) {
        this._state.dialogPage.onSettingPost = postMessage
        this._rerenderEntireTree(this._state)
    },


    _rerenderEntireTree () {
        console.log("It was changed")
    },
    subscribe (observe) {
        this._rerenderEntireTree = observe
    }
}
window.state = store._state



export default store;
