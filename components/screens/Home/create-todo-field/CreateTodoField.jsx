import React, {useState} from 'react'

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false
            },
            ...prev, 
        ])
        setTitle('')
    }


    return (
        <div className='flex items-center mb-4 rounded-2xl border-zinc-800 border-2 p-5 w-full mt-10'>
            <input 
                className='bg-transparent w-full border-none outline-none'
                type="text"
                onChange={e => setTitle(
                    e.target.value
                )}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                placeholder='Add new task'
            />
        </div>
    )
}

export default CreateTodoField