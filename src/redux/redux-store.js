import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import settingsReducer from "./settings-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    newsPage: newsReducer,
    settingsPage: settingsReducer,
})

let store = createStore(reducers)

window.store = store

export default store;