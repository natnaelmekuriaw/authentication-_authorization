<template>
<div class="wrapper">
    <div class="login">
        <div id="welcome" class="welcome">
        <h1 id="wel-header">Welcome Back</h1>
        <p>Login and Have access to great things  on my things  on my   site to great things on my site dfbhkjdn  sjhbdfjbdfj hbfjhbfjdfkjj fbvjh fbjhdfbvj ss to great things on my sitedfbhkjdn d</p>
        </div>
        <div class='login-box'>
            <form @submit.prevent="login">
                <img alt="Vue logo" src="../assets/logo.png" />
                <input type='text' id='my-input1' class="form-control" placeholder="Username" v-model="user.username" required>
                <input type='password' class="form-control " id='my-input2' placeholder="Password" v-model="user.password" required>
                <!--<input type='submit' class='btn btn-primary ' id="login-btn" value='Please Login'  >-->

                <LoginBtn />
            </form>
            <label id="err"><span id="er">err</span>{{err}}</label>
        </div>
    </div>
</div>
</template>

<script>
import LoginBtn from '../components/LoginBtn.vue'
export default {
    name : 'Login',
    data() {
        return{
              user : {
                username: "",
                password:""},
                err:null
        }
    },
    components:{
        LoginBtn,
    },
    computed: {
        },
    methods:{
        login(){
            var targetElement = document.getElementById("err");
            targetElement.className = "";
            // targetElement = document.getElementById("wel-header");
            // targetElement.classname = "still";

            this.$store.dispatch("login",{
                username:this.user.username,
                password:this.user.password
                })
            .then(()=>{
                this.$router.push({name:'dashboard'})
            })
             .catch(err=>{
                 var targetElement = document.getElementById("welcome");
                 targetElement.classList.add("still");
                 console.log(err.response.data.err)
                 this.err=err.response.data.err;
                  targetElement = document.getElementById("err");
                 targetElement.className = "err";
                //  if(this.err){

                //  }
                 })
        }
    }
}
</script>

<style>
.wrapper{
   /*background:yellow;*/
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top:0px!important;
}
.login{
    margin-top:90px;
    margin-bottom:200px;
}
#my-input1,#my-input2{
    border-radius: 0px;
    border:1px solid rgb(225, 220, 220);
    margin-top:10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(0 153 153 / 40%);
}
#my-input1:hover,#my-input1:focus,#my-input2:hover,#my-input2:focus{
    color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.159);
}
#login-btn{
   /* width:340px;
    border-radius: 0px;
    font-size: 16px;
    margin-top:10px;
    background: #0080ff;
    font-family:Tahoma,'TITILLIUM SANS', Verdana, Geneva, Tahoma, sans-serif;*/
   }

.login-box{
    display:inline-block;
}
.login-box:hover{
    box-shadow: 0 0.15rem 1.75rem 0 rgb(0 153 153 / 100%);
}
.welcome,.welcome h1{
    display: inline-block;
    margin-top: 0px;
}
.welcome h1{
    margin-top: 5px;
    font-size:42px;
    font-weight:bold
}

.welcome p{
    margin: 0px;
}
.welcome{
    margin: auto;
    cursor:pointer;
    width:400px;
    height: 274px;
    padding: 30px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(0 153 153 / 70%);
}
.welcome:hover{

    z-index: 1000;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(0 153 153 / 100%);
}

.welcome:hover~.login-box{
    z-index: 900;
}
.still{
    display: inline-block;
    margin-top:0px!important;
}

.still p,.still h1{
    display: inline-block;
}

.login-box{

    background-color:#ffffff;
    /*box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 / 25%);*/
    box-shadow: 0 0.15rem 1.75rem 0 rgb(0 153 153 / 70%);
    width:400px;
    height: 274px;
    margin: auto;
    padding: 30px;
    z-index: 0;
}
#er{
    color: #fff !important;
    margin-left: -20px;
    cursor: pointer;
    visibility: hidden;
}
#err{
    position: relative;
    color:crimson;
    font-size:15px;
    padding-top:14px;
}
.err{
    animation-name:slide;
    animation-duration:0.5s;
}
@keyframes slide {
  0%   { left:-30px; }
  25%  { left:30px; }
  50%  { left:-30px; }
  75%  { left:30px; }
  100% { left:-30px; }
  }
</style>