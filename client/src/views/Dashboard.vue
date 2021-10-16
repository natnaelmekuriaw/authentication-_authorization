<template>
<div class="wrapper">
    <div class="dashboard">
        <div class='dashboard-box'>
            <form>
                <img alt="Vue logo" src="../assets/logo.png" />
                 <div v-if="user.firstname">
                    <label  class="form-control my-input"   >{{user.firstname}}</label>
                    <label  class="form-control my-input"   >{{user.lastname}}</label>
                    <label  class="form-control my-input"   >{{user.username}}</label>
                    <label  class="form-control my-input"   >{{user.email}}</label>
                    <label  class="form-control my-input"   >{{user.password}}</label>
                    <input type="button" class='btn btn-primary' id="dashboard-btn" value='Register'  >
                 </div>
                 <div v-else>
                    <h3>Please <router-link :to="{name:'signup'}">Signup</router-link> first or <router-link :to="{name:'login'}">Login</router-link> if you alredy hava an account</h3>
                 </div>

            </form>
        </div>
    </div>
</div>
</template>

<script>

import axios from 'axios'
export default {
    name : 'dashboard',
    data() {
        return{
              user : {
                firstname:"",
                lastname:"",
                username: "",
                email:"",
                password:"",

                },
        }
    },
    components:{

    },
    created(){
         return axios.get('http://localhost:3000/api/dashboard')
         .then(result=>{
             console.log("=====\n",result.data)
             this.user = result.data.user
             })
         .catch(err=>console.log(err))
    },
    computed: {

        },
    methods:{

}
}
</script>

<style>
.wrapper{
   /*background:yellow;*/

    margin-top:0px!important;
}
.dashboard{
    margin-top:30px!important;
}
.my-input{
    border-radius: 0px!important;
    margin-top:10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#dashboard-btn{
    width:340px;
    border-radius: 0px;
    font-size: 16px;
    margin-top:10px;
    background: #0080ff;
    font-family:Tahoma,'TITILLIUM SANS', Verdana, Geneva, Tahoma, sans-serif;
}
.dashboard-box{
    background-color:#ffffff;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 / 25%);
    width:fit-content;
    margin: auto;
    padding: 30px;
}
</style>