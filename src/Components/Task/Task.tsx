import React, {useState} from 'react'
import s from './Task.module.css';
import {TaskType} from '../Todolist/Todolist'

type TaskPropsType = {
    task: TaskType
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
}

export const Task = (props: TaskPropsType) => {
    let [remove, setRemove] = useState(false)

    return <div className={s.task}
                onMouseEnter={() => setRemove(true)}
                onMouseLeave={() => setRemove(false)}>

        <input type="checkbox"
               className={s.isDone_input}
               checked={props.task.isDone}
               onChange={() => props.changeTaskStatus(props.task.id, props.task.isDone)}/>
        <span className={props.task.isDone ? s.is_done : ''}>{props.task.title}</span>
        {
            remove &&
            <button className={s.remove_button} onClick={() => props.removeTask(props.task.id)}>
                ×
            </button>
        }

    </div>
}
