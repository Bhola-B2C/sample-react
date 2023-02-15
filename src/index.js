import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
        </button>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
