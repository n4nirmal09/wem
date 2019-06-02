import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		shared: shared
	}
})
