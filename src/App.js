import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [state, setCounter] = React.useState({counter: 0});
    const handleClick = () => {
        setCounter(state => {
            return {
                counter: state.counter + 1
            }
        })
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>{state.counter}</h1>
                <button className="button" onClick={handleClick}>
                    Click Me !
                </button>
            </header>
        </div>
    );
};

export default App;
