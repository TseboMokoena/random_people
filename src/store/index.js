import Vue from 'vue'
import Vuex from 'vuex'

import people from './People'

Vue.use(Vuex)


export default function () {
  const Store = new Vuex.Store({
    modules: {
      people
    }
  })

  return Store
}
