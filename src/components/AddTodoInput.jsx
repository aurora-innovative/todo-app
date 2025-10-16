import React, { useState } from 'react';
import Button from './Button';

const AddTodoInput = ({handleInput}) => {
      const [text, setText] = useState("")
      const handleChange = (e) => {
        setText(e.target.value)
      }

    return (
        <div>
            <input value={text} onChange={handleChange} type="text" placeholder="add todo..." className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-md" />
            <Button onClick={()=>handleInput(text)} btnText='Add' />
        </div>
    );
};

export default AddTodoInput;