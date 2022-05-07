import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counterReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/local-storage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(()=> {
    saveState({
        counter:store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store