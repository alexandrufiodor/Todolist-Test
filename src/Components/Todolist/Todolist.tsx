import React from 'react'
import s from './Todolist.module.css';
import {Task} from "../Task/Task";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from '../../store/store';
import {addTaskAC, changeTaskStatusAC, removeTaskAC} from "../../store/tasks-reducer";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksStateType = Array<TaskType>


export const Todolist = () => {

    const dispatch = useDispatch();
    const tasks = useSelector<AppRootState, Array<TaskType>>(state => state.tasks)


    return <div className={s.todolist_section}>
        <div className={s.header}>
            <AddItemForm addItem={(title) => dispatch(addTaskAC(title))}/>
        </div>
        <div className={s.tasks_list}>
            {
                tasks.map(t => {
                        return <Task key={t.id}
                                     task={t}
                                     removeTask={() => dispatch(removeTaskAC(t.id))}
                                     changeTaskStatus={() => dispatch(changeTaskStatusAC(t.id, !t.isDone))}/>
                    }
                )
            }
        </div>

        {tasks.length > 0 &&
        <div className={s.footer}>
            {tasks.length} items lefts
        </div>
        }

    </div>
}