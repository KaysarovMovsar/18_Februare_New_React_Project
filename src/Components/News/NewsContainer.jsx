import React from "react";
import News from "./News";
import {ActCreatorAddPostNewsElement, UpdateCreatorOnPostNewsElement} from "../../redux/news-reducer";



const NewsContainer = (props) => {
    let state = props.store.getState()
    const addPostNewsElement = () => {
        props.store.dispatch(ActCreatorAddPostNewsElement())
    }

    const OnPostNewsElement = (text) => {
        props.store.dispatch(UpdateCreatorOnPostNewsElement(text))
    }

    return (<News addPostNewsElement = {addPostNewsElement}
                  OnPostNewsElement = {OnPostNewsElement}
                  newsPostData = {state.newsPage.newsPostData}
                  onNewsPost = {state.newsPage.onNewsPost}/>)
}

export default NewsContainer;