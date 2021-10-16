import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userLogin: {},
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload()
    }
  },
  actions: {
    register({commit}, credentials) {
      alert("REGISTERING USER ....")

      return axios.post('http://localhost:3000/api/register', credentials)
      .then(data => {
        console.log("Data ", data.data)
        commit('SET_USER_DATA', data.data)
        })
        .catch(err=>console.log(err))
    },

      login({commit}, credentials) {
        alert("LOGGING IN ....")
        //console.log('credentials',credentials)
        return axios.post('http://localhost:3000/api/login', credentials)
          .then((data)=>{
            console.log('Login Result ', data.data)
            commit('SET_USER_DATA',data.data)
          })
          
    },
      
    logOut({commit}) {
      alert("LOGGING OUT");
      commit("CLEAR_USER_DATA")
      }
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
    
  },
  modules: {
  }
})
