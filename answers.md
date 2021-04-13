- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  The regular expression .match(/\d+/)[0] is to fund the last number in the string. It is used to extract the id of the item from it url.
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  Redux Persist takes Redux state object and saves it to persisted storage. Then on app launch it retrieves this persisted state and saves it back to redux.
  
- What does `combineReducers` do? Why are we using it? 
  The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

- How does the "Reset to Fresh Exploration" feature work?
  When we click on "Reset to Fresh Exploration" button, it will trigger the reset event, which dispatch the RESET_ALL action in all the 3 reducers. The RESET_ALL action empties the state in the store which means set all items to be unexplored.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
  All the 3 lists share the same style/pattern. Using `ItemList` by only passing the different items and title can avoid the duplicate code for all those 3 components.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  Saving the whole list of films is not time and storage efficient.
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  . create general component which can be used by passing different argument for the componets sharing the same pattern
  . fetch the data only when needed for better app performance
  . use persist reducer to provide better user experience when they revisit the app
  . the component hierarchy is clear
  
- Which Star Wars character would make the best React developer, and why?
 :)
