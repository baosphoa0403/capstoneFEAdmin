import ActionType from './action-type';

export const demoAction = (data: any, callbackSuccess: any, callbackError: any): any => ({
  type: ActionType.DEMO_ACTION_START,
  data,
  callbackSuccess,
  callbackError,
  payload: null,
  error: null
});

export const demoActionSuccessAction = (result: any): any => ({
  type: ActionType.DEMO_ACTION_SUCCESS,
  payload: result,
  error: null
});

export const demoActionErrorAction = (error: Error): any => ({
  type: ActionType.DEMO_ACTION_ERROR,
  payload: null,
  error: error
});

// declare the equivalent action here

// Example:

export const getListDemoAction = (params: any, callbackSuccess: any): any => ({
  type: ActionType.GET_LIST_DEMO_ACTION,
  params,
  callbackSuccess,
  payload: null,
  error: null
});
