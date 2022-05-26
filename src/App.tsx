import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'components/Button/Button';
import Login from 'page/Login/Login';

function App(): JSX.Element {
  const abc = (): string => {
    console.warn('dasd');
    console.warn('hi');

    return 'hello ';
  };
  abc();
  console.warn('hello');
  return (
    <div className='app'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <Button />
        <Login />
      </header>
    </div>
  );
}

export default App;
