// npm install @reduxjs/toolkit react-redux

// redux
// the main data holder library

// react-redux
// plugin for react-developers to easily work with redux

// TBC move these functions
// utilities generation
String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1);
};

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import { combineReducers } from '@reduxjs/toolkit';

let rootReducer = combineReducers({
  authSlice: authSlice.reducer
});

// configureStore() ka function store bnanata h
export let meraStore = configureStore({
  reducer: rootReducer
  // customerSlice:customerSlice.reducer
});
