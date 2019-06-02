export default{
  state: {
  	lang: 'en'
  },
  mutations: {
  	setLang(store, lang){
  		store.lang = lang
  	}
  },
  actions: {
  	changeLang({commit}, lang){
  		commit('setLang', lang)
  	}
  },
  getters: {
  	getLang(store) {
  		return store.lang
  	}
  }
}
