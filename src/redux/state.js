import post from "../Components/Profile/MyPosts/Post/Post";

const state = {
    profilePage: {
        PostsData : [
            {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
            {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
        ],



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
        ],

        dialogPostData : [
            {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
            {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
        ],

        settingPostData : [
            {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
            {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
        ],
        newsPostData : [
            {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
            {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},
        ]
    },
}

export let addPostElement = (postMessage) => {
    let newsTextData = {
        id: 1,
        message: postMessage,
        LikesCount: 'Like ' + 12
    }

    state.dialogPage.newsPostData.push(newsTextData)
}

export let dialogsAddPost = (postMessage) => {
    let dialogTextData = {
            id: 1,
            message: postMessage,
            LikesCount: 'Like ' + 12
        }

    state.dialogPage.dialogPostData.push(dialogTextData)
}

export let settingsAddPost = (postMessage) => {
    let settingTextData = {
        id: 0,
        message: postMessage,
        LikesCount: 'Like ' + 12
    }
    state.dialogPage.settingPostData.push(settingTextData)

}


export default state;
