<template>
  <div class="home">
    <router-link :to="{ name: 'login' }" v-if="!loggedIn">
      <h4>LogIn |</h4>
    </router-link>
    <router-link :to="{ name: 'signup' }">
      <h4>SignUp</h4>
    </router-link>
    <router-link :to="{ name: 'dashboard' }">
      <h4>| DashBoard |</h4>
    </router-link>
    <router-link :to="{ name: 'login' }">
      <input
        type="button"
        value="Log Out"
        class="btn btn-danger"
        v-if="loggedIn"
        @click="logOut"
      />
    </router-link>
    <router-link :to="{ name: 'vuetify' }">
      <h4>Vuetify</h4>
    </router-link>

  </div>
</template>

<script>
// @ is an alias to /src
import { authComputed } from "../store/helper.js";

export default {
  name: "Home",
  components: {},
  computed: {
    ...authComputed,
  },
  created(){

  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
    },
  },
};
</script>

<style scoped>
h4 {
  display: inline;
}
a {
  text-decoration: none;
  color: #000000;
}
a:focus,
a:active {
  text-decoration: underline;
  color: #0080ff;
}
</style>
