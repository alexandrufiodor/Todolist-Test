import React, {ChangeEvent, useCallback} from 'react'
import {TaskType} from '../Todolist/Todolist'

type TaskPropsType = {
    task: TaskType
    changeTaskStatus: (id: string, isDone: boolean) => void
    removeTask: (taskId: string) => void
}

export const Task = (props: TaskPropsType) => {

    return <div key={props.task.id} className={props.task.isDone ? 'is-done' : ''}>


        <input type="checkbox" checked={props.task.isDone}
               onChange={() => props.changeTaskStatus(props.task.id, props.task.isDone)}/>
        <span>{props.task.title}</span>
        <button onClick={() => props.removeTask(props.task.id)}>
            x
        </button>
    </div>
}
