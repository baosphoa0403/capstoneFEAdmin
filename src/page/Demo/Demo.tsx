import React from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../redux/modules/albums/action/demoAct/action';
const Demo: React.FC = () => {
  const dispatch = useDispatch();
  const demoAction = (onDemo: any): void => {
    const callbackSuccess = (): void => {
      // handle here
    };
    const callbackError = (): void => {
      // handle here
    };
    dispatch(action.demoAction(onDemo, callbackSuccess, callbackError));
  };
  return (
    <div>
      <button onClick={demoAction}></button>
    </div>
  );
};

export default Demo;
