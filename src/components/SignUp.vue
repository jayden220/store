<template lang="">
    <div id = "parent">
        <form @submit.prevent ="formSubmit">
            <h1>Sign Up Form</h1>
                    <label>Email:</label>
                    <input type="email" required v-model="email">
                    <label>Password: </label>
                    <input type="password" required v-model="password">
            
            <label>Role:</label>
            <select>
                    <option value="developer">Web Developer</option>
                    <option value="designer">Web Designer</option>
                    <option value=""></option>
            </select>
                    <label>Languages</label>
                    <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt='addLanguage()'>
                    <button type="submit">submit</button>
                <div v-for="lang,index in languages" :key="index+1">
                        <p id="para" @click='deleteLang(lang)'>
                            {{ index+1 }}:{{ lang }}
                        </p>
                </div>
                <div class="terms">
                    <!-- v-model on a checkbox registers a boolean as true when checked -->
                    <input type="checkbox" required v-model="terms">
                    <label>Accept Terms and Conditions</label>
                </div>
                <h4>People wanted in your team</h4>
                <div>
                   <input type="checkbox" value="Mario" v-model="names">
                   <label>Mario</label>
                </div>
                <div>
                   <input type="checkbox" value="Dean" v-model="names">
                   <label>Dean</label>
                </div>
                <div>
                   <input type="checkbox" value="Luigi" v-model="names">
                   <label>Luigi</label>
                </div>
        </form>
                <div>
                    <p>Email:{{ email }}</p>
                    <p>Password:{{ password }}</p>
                    <p>role:{{ role }}</p>
                    <p>Terms:{{ terms }}</p>
                    <p>People:{{names}}</p>
                    <p>Current Language:{{ currentLanguage }}</p>
                    <p>Languages:{{ languages }}</p>
                </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            email: '',
            password:'',
            role:'',
            terms:false,
            names:[],
            currentLanguage:'',
            languages:['something', 'nothing']
        }
    },
    methods:{
        formSubmit(){
            console.log('Page reload');
            this.email =''
            this.password = ''
            this.terms = false
            this.currentLanguage = ''
            this.role = ''
        },
        keyfinder(event){
            console.log(event);
        },
        deleteLang(lang){
            this.languages = this.languages.filter(item=> item !=lang)
        },
        addLanguage(){
            if(!this.languages.includes(this.currentLanguage)){
                this.languages.push(this.currentLanguage)
            } 
        }
    }
    
}
</script>
<style lang="">
    
</style>