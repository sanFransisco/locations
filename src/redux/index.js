import { createStore } from 'redux';
import { appReducer } from './appReducer';

//get cache
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('items');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
  }; 

//configures the application store 
//initialize the store with local storage
const KEY_GOOGLE = 'AIzaSyC4fAJGAGpHvx4wcET9J-zXQrW0v9mohmE'
let cache = loadState();
export const appStore = createStore(appReducer, {
    display: { display:''  },
    manager: {
        key:
            `https://maps.googleapis.com/maps/api/js?key=${KEY_GOOGLE}&v=3.exp&libraries=geometry,drawing,places`,
        items:cache, inputs: {}, activeCategories: [], editCategoryID: ''
    }
});
