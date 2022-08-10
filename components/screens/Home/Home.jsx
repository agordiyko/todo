import React, {useState} from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
    {
        _id : 'wedfr',
        title : 'Finish the essay collaboration',
        isCompleted : false,
    },
    {
        _id : 'wedfryy',
        title : 'Read next chapter of the book',
        isCompleted : false,
    },
    {
        _id : 'wafgdfr',
        title : 'Send the finished assignment',
        isCompleted : false,
    },
]


const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    return (
    <div className='h-screen text-white w-4/5 mx-auto'>
        <h1 className='text-2xl text-center mb-5 font-bold'>Todo for junior</h1>
        <CreateTodoField setTodos={setTodos} />
        {todos.map( todo => (
            <TodoItem
                key={todo._id} 
                todo={todo} 
                changeTodo={changeTodo}
                removeTodo = {removeTodo}
            />
        ))}
    </div>
    )
}

export default Home