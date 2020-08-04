import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const timeleft = parseInt(process.env.VUE_APP_TIMELEFT)
const timeleftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)

export default new Vuex.Store({
  state: {
    todos: [],
    timerList: ['肩膀放鬆', '頸部放鬆', '我的計時器 1', '我的計時器 2', '我的計時器 3', '我的計時器 4', '我的計時器 5', '我的計時器 6', '我的計時器 7', '我的計時器 8', '我的計時器 9', '我的計時器 10', '我的計時器 11'],
    // 剩多少時間
    timeleft,
    // 可選鈴聲
    alarm: 'alarm1.mp3',
    // 目前
    current: '',
    // 是否休息中
    isBreak: false,
    progressNow: 0,
    viewWidth: 96,
    // 目前登入的使用者
    user: '',
    username: '',
    workoutStep: []
  },
  mutations: {
    login (state, data) {
      state.user = data[0]
      state.username = data[1]
    },
    logout (state) {
      state.user = ''
    },
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      state.todos.push({ name: data, edit: false, model: data })
    },
    dragTodo (state, data) {
      state.todos = data
    },
    delTodo (state, index) {
      state.todos.splice(index, 1)
    },
    editTodo (state, data) {
      state.todos[data].edit = !state.todos[data].edit
    },
    cancelTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].model = state.todos[data].name
    },
    saveTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].name = state.todos[data].model
    },
    start (state) {
      if (state.isBreak) {
        state.current = '休息一下'
      } else if (!state.isBreak) {
        state.showProgress = 0
        state.current = state.todos[0].name
        state.todos.splice(0, 1)
      }
    },
    countdown (state, data) {
      state.timeleft--
      state.progressNow += data
      if (state.progressNow >= 100) {
        state.progressNow = 100
      }
    },
    finish (state) {
      if (state.todos.length > 0) {
        state.isBreak = !state.isBreak
      }
      state.current = ''
      state.timeleft = state.isBreak ? timeleftBreak : timeleft
    },
    showProgress (state, data) {
      state.progressNow += data
      if (state.progressNow >= 100) {
        state.progressNow = 100
      }
    },
    reset (state) {
      state.progressNow = 0
    },
    changeWidth (state, data) {
      state.viewWidth = data
    },
    addSec (state, data) {
      state.workoutStep.push(data)
    },
    clearSec (state) {
      state.workoutStep = ''
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    timerList (state) {
      return state.timerList
    },
    user (state) {
      return state.user
    },
    username (state) {
      return state.username
    },
    alarm (state) {
      return state.alarm
    },
    todos (state) {
      return state.todos
    },
    timeleft (state) {
      return state.timeleft
    },
    current (state) {
      return state.current
    },
    isBreak (state) {
      return state.isBreak
    },
    progressNow (state) {
      return state.progressNow
    },
    getWidth (state) {
      return state.viewWidth
    },
    workoutStep (state) {
      return state.workoutStep
    }
  },
  plugins: [createPersistedState()]
})
