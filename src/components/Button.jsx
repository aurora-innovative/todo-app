import React from 'react';

const Button = ({btnText="Button", onClick}) => {
    return (
        <button onClick={onClick} className="px-8 py-2 ml-3 hover:bg-green-600 bg-green-400 text-gray-900 font-bold rounded-md">{btnText}</button>
    );
};

export default Button;