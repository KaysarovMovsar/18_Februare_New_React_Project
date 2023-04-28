import News from "./News";
import {ActCreatorAddPostNewsElement, UpdateCreatorOnPostNewsElement} from "../../redux/news-reducer";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        newsPostData: state.newsPage.newsPostData,
        onNewsPost: state.newsPage.onNewsPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostNewsElements: () => {
            dispatch(ActCreatorAddPostNewsElement())
        },
        OnPostNewsElements: (text) => {
            dispatch(UpdateCreatorOnPostNewsElement(text))
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;