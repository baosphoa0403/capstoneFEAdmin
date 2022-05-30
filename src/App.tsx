import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'components/Button/Button';
import Login from 'page/Login/Login';
import { Counter } from 'features/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'redux/store';
import { action_pending_fetch_albums, Albums } from 'redux/modules/albums/albumsSlice';
import { CircularProgress } from '@mui/material';
// import axios from 'axios';

function App(): JSX.Element {
  const abc = (): string => {
    return 'hello ';
  };
  const albums = useSelector((state: RootState) => state.album.albums);
  const loading = useSelector((state: RootState) => state.album.loading);
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(action_pending_fetch_albums());
  }, [dispatch]);

  abc();
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
        {loading && <CircularProgress />}
        {!loading && (
          <ul>
            {albums.map((item: Albums, index: number) => {
              return (
                <li key={index}>
                  {item.id}-{item.title}
                </li>
              );
            })}
          </ul>
        )}

        <Counter />
        <Button />
        <Login />
      </header>
    </div>
  );
}

export default App;
