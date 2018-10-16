import { createStore, combineReducers } from 'redux';

// Store Creation

export default () => {
    const store = createStore(combineReducers({}));

    return store;
};
