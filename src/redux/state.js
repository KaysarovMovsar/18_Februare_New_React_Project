
const ADD_POST_ELEMENT = "ADD-POST-ELEMENT"
const UPDATE_ON_POST_CHANGE = "UPDATE-ON-POST-CHANGE"


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
import post from "../Components/Profile/MyPosts/Post/Post";
import {rerenderEntireTree} from "../rerender";

import {rerenderEntireTree} from "../render";


const state = {


    profilePage: {
        PostsData: [
            {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
            {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
        ],
        onChangeData: 'It-kamasutra.com'



        newPostText: 'it-kamasutra'

    },
    getState() {
        return this._state
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


export const ActCreatorAddPostElement = () => {
    return {
        type: ADD_POST_ELEMENT
    }
}
export const UpdateOnPostChangeActCreator = (text) => {
    return {
        type: UPDATE_ON_POST_CHANGE,  postMessage: text
    }
}


export default store;
export let settingsAddPost = (postMessage) => {
    let settingTextData = {
        id: 0,
        message: postMessage,
        LikesCount: 'Like ' + 12
    }
    state.dialogPage.settingPostData.push(settingTextData)
    rerenderEntireTree(state)
}
//sxscdvcfv

window.state = state


export let addPost = () =>{
    let newPost = {
        id: 1,
        message: state.profilePage.newPostText,
        LikesCount: 'Like ' + 12

    }
    state.profilePage.PostsData.push(newPost)
    state.profilePage.newPostText('')
    rerenderEntireTree(state)
}

export default state;

export let updateNewPostText = (newText) =>{

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
