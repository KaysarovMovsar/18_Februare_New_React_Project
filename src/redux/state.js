
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
            newsPostData: [
                {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
                {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
            ]
        },
    },
    getState() {
        return this._state
    },

    addPostElement () {
        let newsTextData = {
            id: 1,
            message: this._state.profilePage.onChangeData,
            LikesCount: 'Like ' + 12
        }
        this._state.profilePage.PostsData.push(newsTextData)
        this._state.profilePage.onChangeData = '';
        this._rerenderEntireTree(this._state)
    },
    updateOnPostChange (postMessage) {
        this._state.profilePage.onChangeData = postMessage
        this._rerenderEntireTree(this._state)
    },

    dispatch(action) {
        if(action.type === "ADD-POST-ELEMENT"){
            let newsTextData = {
                id: 1,
                message: this._state.profilePage.onChangeData,
                LikesCount: 'Like ' + 12
            }
            this._state.profilePage.PostsData.push(newsTextData)
            this._state.profilePage.onChangeData = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === "UPDATE-ON-POST-CHANGE"){
            this._state.profilePage.onChangeData = action.postMessage
            this._rerenderEntireTree(this._state)
        }
    },

    addPostNewsElement (postMessage){
        let newsTextData = {
            id: 1,
            message: postMessage,
            LikesCount: 'Like ' + 12
        }

        this._state.dialogPage.newsPostData.push(newsTextData)
        this._rerenderEntireTree(this._state)
    },
    dialogsAddPost (postMessage) {
        let dialogTextData = {
            id: 1,
            message: postMessage,
            LikesCount: 'Like ' + 12
        }
        this._state.dialogPage.dialogPostData.push(dialogTextData)
        this._rerenderEntireTree(this._state)
    },
    settingsAddPost (postMessage) {
        let settingTextData = {
            id: 0,
            message: postMessage,
            LikesCount: 'Like ' + 12
        }
        this._state.dialogPage.settingPostData.push(settingTextData)
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
