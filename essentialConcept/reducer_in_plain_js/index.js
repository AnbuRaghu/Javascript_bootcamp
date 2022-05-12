// reducers - helps us manage app state
// (state, action) => newState;

// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }; 
//     case 'DECREMENT':  
//       return { ...state, count: state.count - 1 }; 
//     default:
//       return state;
//   }  
// }

// counterReducer(0, { type: 'INCREMENT' }); // 1
// const result = counterReducer(1, { type: 'DECREMENT' }); // 0
// console.log(result === 0);

const initialUser = {
  name: 'Mark',
  email: 'mark@gmail.com'  
};

function userReducer(state, action) {
  switch (action.type) {
     case "CHANGE_NAME":
       return { ...state, name: action.payload.name };
     case "CHANGE_EMAIL":
       return { ...state, email: action.payload.email };
     default:
       return state; 
  }  
}

const result = userReducer(initialUser, { type: 'CHANGE_EMAIL', payload: { email: 'mark@compuserve.com' } });
console.log(result.email === 'mark@compuserve.com');
// action.payload.name;
// { type: 'CHANGE_EMAIL', payload: { email: 'joe@gmail.com' } }