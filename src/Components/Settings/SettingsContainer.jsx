import Settings from "./Settings";
import {ActCreatorSettingAddPostData, ActCreatorUpdateSetAddPost} from "../../redux/settings-reducer";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        settingPostData : state.settingsPage.settingPostData,
        onSettingPost : state.settingsPage.onSettingPost
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        settingsAddPosts: () => {
            dispatch(ActCreatorSettingAddPostData())
        },
        updateSetAddPosts: (text) => {
            dispatch(ActCreatorUpdateSetAddPost(text))
        }
    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;