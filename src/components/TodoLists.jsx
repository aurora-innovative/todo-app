import React from 'react';
import Button from './Button';

const TodoLists = ({todos, handleDelete}) => {
  
    return (
        <div className='flex flex-col gap-3'>

            {
                todos.map((todo) => {
                    return <div key={todo.id} className='flex items-center gap-3'>
                        <span>{todo.id}.</span>
                        <h3>{todo.text}</h3>
                        <Button onClick={()=>handleDelete(todo.id)} btnText='Remove' />
                    </div>
                })
            }
        </div>
    );
};

export default TodoLists;