import { createStore } from 'vuex';
import axiosClient from '../axiosClient';

const store = createStore({
  state() {
    return {
        searchedMeals:[]
    };
  },
  mutations: {
    // accept state and meals -- which is to be searched and found
    setSearchedMeals(state, meals) {
        state.searchedMeals = meals;
      }
  
  },
  actions: {
    // accepts object which whenver we desturcutre it we take commit from there and keyword 
    searchMeals({ commit }, keyword) {
      axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            //commit the mutation to save and receive data inside store
            // specify mutation name -- setSearchedMeals
          commit('setSearchedMeals', data.meals);
        })
        .catch(error => {
          console.error('Error searching meals:', error);
        });
    }
  },

  getters: {
    // Your getter functions go here
  }
});

export default store;
