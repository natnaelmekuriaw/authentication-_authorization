<template>
  <div class="wrapper">
    <div class="signUp">
      <div class="signUp-box">
        <form @submit.prevent="register">
          <img alt="Vue logo" src="../assets/logo.png" />
          <input
            type="text"
            class="form-control my-input"
            placeholder="Firstname"
            v-model="user.firstname"
            required
          />
          <input
            type="text"
            class="form-control my-input"
            placeholder="Lastname"
            v-model="user.lastname"
            required
          />
          <input
            type="text"
            class="form-control my-input"
            placeholder="Username"
            v-model="user.username"
            required
          />
          <input
            type="email"
            class="form-control my-input"
            placeholder="Email"
            v-model="user.email"
            required
          />
          <input
            type="password"
            class="form-control my-input"
            placeholder="Password"
            v-model="user.password"
            required
          />
          <input
            type="password"
            class="form-control my-input"
            placeholder="Confirm password"
            v-model="user.cpassword"
            required
          />
          <input
            type="submit"
            class="btn btn-primary"
            id="signUp-btn"
            value="Register"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "signUp",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
    };
  },
  components: {},
  computed: {},
  methods: {
    register() {
      this.$store.dispatch("register", this.user).then(()=>{
        this.$router.push({name:'dashboard'}).catch((err)=>{
          console.log(err)
          console.log("Sign up faild please try again")
        })
      })

    }
  }
}
</script>

<style>
.wrapper {
  /*background:yellow;*/

  margin-top: 0px !important;
}
.signUp {
  margin-top: 30px !important;
}
.my-input {
  border-radius: 0px !important;
  margin-top: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#signUp-btn {
  width: 340px;
  border-radius: 0px;
  font-size: 16px;
  margin-top: 10px;
  background: #0080ff;
  font-family: Tahoma, "TITILLIUM SANS", Verdana, Geneva, Tahoma, sans-serif;
}
.signUp-box {
  background-color: #ffffff;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 / 25%);
  width: fit-content;
  margin: auto;
  padding: 30px;
}
</style>
