import profileReducer from "./profile-reducer";
import settingsReducer from "./settings-reducer";
import newsReducer from "./news-reducer";
import dialogsReducer from "./dialogs-reducer";



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


        },
        settingsPage: {
            settingPostData: [
                {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
                {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
            ],
            onSettingPost: 'IT-NOT_ENOUGH_SCHOOL.COM',
        },

        newsPage: {
            newsPostData: [
                {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
                {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
            ],
            onNewsPost: 'NonthreateningSchool.ru',},


    getState() {
        return this._state
    },

    subscribe (observe) {
        this._rerenderEntireTree = observe
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._rerenderEntireTree(this._state)

        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._rerenderEntireTree(this._state)

        this._state.dialogPage = settingsReducer(this._state.dialogPage, action)
        this._rerenderEntireTree(this._state)

        this._state.dialogPage = newsReducer(this._state.dialogPage, action)
        this._rerenderEntireTree(this._state)

    },

    _rerenderEntireTree () {
        console.log("It was changed")
    },
}}

window.state = store._state



export default store;

