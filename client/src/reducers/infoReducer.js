export default function infoReducer(state = { info: {}, sign: {} }, action){
  switch(action.type) {
  case 'SET_INFO':
    return {...state, info: action.payload.account, sign: action.payload.sign };
  default: return state;
  }
}
