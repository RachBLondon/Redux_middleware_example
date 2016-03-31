export default function({ dispatch }){
  return next => action =>{
      //if the action does not have a payload or its done, middleware does care
      if(!action.payload || !action.payload.then){
        //need to pass on the middleware we arent going to use.
        return next(action)
      }
      //make sure the actions promise resolves

      action.payload
        .then(function(repsonse){
          const newAction = { ...action, payload: response }
          dispatch(newAction);
        });
    // console.log('We a have a promise', action);
  }
}
