import  { createStore } from 'vuex'

const store = createStore({
  state: {
    y:0,
    dark: true
  },
  getters:{
    height:state => {
      return state.y
    },
    dark:state=>{
      return state.dark
    }
  },
  mutations: {
    setHeight:(state,y)=>{
      state.y = y
    },
    changeTheme:(state)=>{
      state.dark = !state.dark
    }
  },
  actions: {

  }
})

export default store