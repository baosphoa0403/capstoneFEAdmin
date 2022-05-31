import ActionType from '../modules/albums/action/demoAct/action-type';

// refer fromJS from "immutable"

// const initialState = fromJS({
//   type: null,
//   payload: null,
//   error: null,
//   isLoading: false,
//   infoDemo: null
// });

// export default (state: any = initialState, action: any) => {
//   switch (action.type) {

//     case ActionType....:
//       return state
//         .set('type', fromJS(action.type))
//         .set('isLoading', false)
//         .set('payload', fromJS(action.payload))
//         .set('error', null);

// similar ----> Any isLoading, payload, and error states can be actively set to null or valid depending on the action's needs.

//     v..v
//     default:
//       return state;
//   }
// };
