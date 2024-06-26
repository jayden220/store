<template lang="">
    <div>
        {{$store.state.aboutMe}}
        <!-- {{$store.state.education}} -->
         <!-- <div v-for="project in projectData()" :key="project.name"></div>  -->
        <!-- <h1>{{projects}}</h1>  -->
    </div>
</template>
<script>
export default {
    // methods:{
    //     projectData(){
    //         return this.$store.state.projects
    //     }
    // },
    computed:{
        getAboutMe(){
           return this.$store.dispatch('getAboutMe')
        },
        getEducation(){
            return this.$store.dispatch('getEducation')
        }
    },

    mounted(){
        this.getAboutMe
    }
}
</script>
<style>
    
</style>