import React from "react";
import Mypost from "./MyPost";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        onPostText: state.profilePage.onPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        profilePageAdd: () => {
            dispatch(profilePageAddActionCreator());
        },
        onPostChanged: (text) => {
            dispatch(onPostChangedActionCreator(text))
        }
    }
}

const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost);

export  default MypostContainer;