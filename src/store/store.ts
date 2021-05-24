import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";


export const rootReducer = combineReducers({
    tasks: tasksReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;