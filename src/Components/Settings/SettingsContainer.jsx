import Settings from "./Settings";
import {connect} from "react-redux";
import {ActCreatorSettingAddPostData, ActCreatorUpdateSetAddPost} from "../../redux/settings-reducer";




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