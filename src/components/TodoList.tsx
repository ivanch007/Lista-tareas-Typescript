import { useState } from "react"
import { TaskList } from "./TaskList"

export const TodoList = () => {
  const [newTask, setNewTask] = useState<string>('')
  const [taskList, setTaskList] = useState<string[]>([])

  const handleAddTask = () => {
    if (newTask.trim() === '') return
    setTaskList(previousTask => [...previousTask, newTask])
    setNewTask('')

  }

  const handleDeleteTask = (index: number) => {
    setTaskList(task => task.filter((_, i) => i !== index))
  }


  return (

    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => { setNewTask(e.target.value) }}
          placeholder="ingresa tarea"
        />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDeleteTask}></TaskList>
    </div>
  )
}