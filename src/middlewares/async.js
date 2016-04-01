export default function({ dispatch }){
  return next => action =>{
      //if the action does not have a payload or its done, middleware does care
      if(!action.payload || !action.payload.then){
        //need to pass on the middleware we arent going to use.
        return next(action)
      }
      //make sure the actions promise resolves
      action.payload
        .then(function(response){
          const newAction = { ...action, payload : response };
          dispatch(newAction);
        });

  }
}


// //In ES5
// export default function ({ dispatch }){
//   return function(next){
//     return function (action){
//       if(!action.payload || !action.payload.then){
//         return next(action)
//       }
//       action.payload
//         .then(function(response){
//           const newAction = { ...action, payload : response };
//           dispatch(newAction);
//         });
//     }
//   }
// }
