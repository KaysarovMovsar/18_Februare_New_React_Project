import {ActCreatorDialogsPostData, ActCreatorOnPostDialogsData} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        DialogsData: state.dialogPage.DialogsData,
        MessagesData: state.dialogPage.MessagesData,
        dialogPostData: state.dialogPage.dialogPostData,
        onDialogsPost: state.dialogPage.onDialogsPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dialogsAddPost: () => {
            dispatch(ActCreatorDialogsPostData())
        },
        onDialogsPosts: (text) => {
            dispatch(ActCreatorOnPostDialogsData(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;