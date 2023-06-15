
export const reducer = (state, action) => {
  switch(action.type) {
        case 'ADDONE' : return {...state, count: state.count+1}
        case 'ADDNUM' : return {...state, name: action.payload}
        case 'ADD' : return {...state, count: state.count + +state.name}
        default: return state
      
}
}




// case 'ADDONE' : return state= state +1
// case 'ADDTEN' : return state= state +10
// default: return state