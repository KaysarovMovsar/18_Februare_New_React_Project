import {rerenderEntireTree} from "../render";

const state = {


    profilePage: {
        PostsData : [
            {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
            {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
        ],

        newPostText: 'it-kamasutra'

    },

    dialogPage :{
        DialogsData : [
            {id: 1, name: 'Movsar'},
            {id: 2, name: 'Ahmad'},
            {id: 3, name: 'Iman'},
            {id: 4, name: 'Bilal'},
            {id: 5, name: 'Lilia'},
        ],

        MessagesData : [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yep'},
            {id: 4, message: 'See you tomorrow'},
            {id: 5, message: 'Have a good meal!'},
        ]
    },
}

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
