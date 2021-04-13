### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
  REdux is a library for state management. It is very useful for managing larger applications with quite a bit of state. It helps solve the issue of prop-drilling.

- What are three features of the Redux developer tool in Chrome?
  We can see what action is taken for each step, check the change of the states for each action, and find the difference of states betwen actions. 

- What is a store?
  A store is the centralized place where states are stored.

- What is a reducer?
  Reducer is the function which tells store what changes to make to the state.

- What is an action?
  Redux actions are simple instructions that tell reducer(s) how to adjust state.

- What is an action creator?
  Action creator is a function that creates an action.

- How does data flow in a React/Redux application?
. Store is created, which dispatches an initial action
. Reducers returns the initial state
. useSelector runs for all components connected to store
  . Provides the data for these components
  . Triggers render
. On dispatch, any connected components that receive new data from useSelector will re-render

- What is the purpose of the `<Provider>` component?
  Provider accepts a prop of a Redux store. So all the components inside are able to have access to the states in the store.

- What is the purpose of the `useSelector` hook? What does it return?
  We can access values from the store with the useSelector hook. useSelector accepts a callback.
  The callback has access to the store as its first argument, and should return whatever data we want from the store

- Describe the `useDispatch` hook. What do you use it for?
  useDispatch lets us dispatch actions to the store. useSelector reads from the store, if any action should be taken, just use useDispatch to do it.

- What is redux-thunk and why would you use it?
  Redux-thunk is a middleware to Redux which can let us have actions that are "thunks" which can dispatch multiple times and can dispatch asynchronously.

- What are propTypes?
  PropTypes exports a range of validators that can be used to make sure the data you receive is valid. 

- Describe the `useCallback` hook.  What is it used for?
  useCallback is a built-in hook that accepts a function and an array of dependencies.
  It returns a function that won’t be re-declared on subsequent renders, as long as the dependencies don’t change. This allows you to add functions as dependencies to useEffect without hitting infinite render issues

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
  If your state management doesn't need all the Redux features, use useState, useReducer and useContext. If your state management needs Redux as one global state container with middleware, introduce Redux to your application to handle state logic in complex and large applications.

  Use useState for basic and simple/small size applications.
  Use useState + useReducer + useContext for advanced/medium size applications.
  Use useState/useReducer + Redux for complex/large size applications.