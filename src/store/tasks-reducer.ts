import {v1} from "uuid";
import {TasksStateType, TaskType} from "../Components/Todolist/Todolist";


type ActionType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType

export type RemoveTaskActionType = {  type: 'REMOVE-TASK', taskId: string }

export type AddTaskActionType = { type: 'ADD-TASK', title: string}

export type ChangeTaskStatusActionType = { type: 'CHANGE-TASK-STATUS', taskId: string, isDone: boolean }


const initialState: TasksStateType = []


export const tasksReducer = (state = initialState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let stateCopy = [...state]
            let tasks = stateCopy
            stateCopy = tasks.filter((t: TaskType) => t.id !== action.taskId);

            return stateCopy
        }
        case 'ADD-TASK': {
            let task: TaskType = {id: v1(), title: action.title, isDone: false}
            let stateCopy = [...state]
            stateCopy = [task, ...stateCopy]
            return stateCopy
        }

        case 'CHANGE-TASK-STATUS': {
            let stateCopy =[...state]
            let tasks = stateCopy
            stateCopy = tasks.map( (t: TaskType) => t.id === action.taskId ? {...t, isDone: action.isDone} : t)
            return stateCopy
        }
        default:

            return state
    }
}


export const removeTaskAC = (taskId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId}
}
export const addTaskAC = (title: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title: title}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean): ChangeTaskStatusActionType => {
    return {
        type: "CHANGE-TASK-STATUS",
        taskId: taskId,
        isDone: isDone
    }
}

