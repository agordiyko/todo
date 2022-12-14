import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className='flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full'
    >
      <div className='flex justify-between w-full'>
        <button 
          className='flex cursor-pointer'
          onClick={() => changeTodo(todo._id)}
        >
          <Check isCompleted={todo.isCompleted} />
          <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
        </button>
        <button onClick={() => removeTodo(todo._id)}>
          <BsTrash
            size={22}
            className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
          />
        </button>
      </div>
    </div>
  )
}

export default TodoItem