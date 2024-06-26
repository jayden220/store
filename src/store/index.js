import { createStore } from 'vuex'

export default createStore({
  state: {
    // where we store our data 
    // data -> propertyname and null is the value of the property
    // must create placeholders
    education: null,
    aboutMe: null,
    skills: null,
    projects: null,
    testimonials: null,
    

  },
  mutations: {
    //                                     used to change or update the state and only thing that can do this
    //                                     payload is info parsed into function
    //                                     commiting a mutation below is an example
    // updateData(state,payload){
    //   state.data = payload
    setAboutMe(state, payload){
      state.aboutMe = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
    setEducation(state, payload){
      state.education = payload
    },
    setTechSkills(state, payload){
      state.techskills = payload
    },
    setSoftSkills(state, payload){
      state.softskills = payload
    },
    setTestimonials(state, payload){
      state.testimonials = payload
    }
  },
  actions: {
    // run all async code
    // dispatching call and fetch data
    // theState represents everything
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://jayden220.github.io/first-API/data/data.json')
      let data = await fetchedInfo.json()
      let aboutMe,projects,education,techskills,softskills,testimonials = data
      commit('setAboutMe',aboutMe)
      commit('setProjects',projects)
      commit('setEducation',education)
      commit('setTechSkills',techskills)
      commit('setSoftSkills',softskills)
      commit('setTestimonials',testimonials)
      console.log(data);
    }
    
  },
  modules: {
    // used to seperate code for readability
  },
  getters: {
    // used to get things not normally used , take function inside inside use .filter
  }
})
