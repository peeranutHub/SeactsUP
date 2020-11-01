<template>
  <div class="test-p">
    <div class="extra-container">
      <h1>SeactsUP</h1>
      <form @submit.prevent="loginEmail">
        <div class="inputForm">
          <input
            type="text"
            class="email-in"
            placeholder="Email"
            v-model="email"
            required
          /><br />
          <input
            type="password"
            class="pass-in"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div>
          <label for="rememberMe"
            ><input type="checkbox" id="rememberMe" /> Remember Email</label
          >
        </div>
        <router-link to="register">register</router-link><br>
        <input type="submit" value="Submit" class="Submit" />
      </form>
      {{ getUsers }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters({ getUsers: "getUsers" }),
  },
    created: function () {
    // `this` points to the vm instance
    console.log(localStorage.user)
    if(localStorage.user != undefined){
      this.$router.push({ path: '/' })
    }
    localStorage.loginPage = true
    this.$store.dispatch('pathName', location.pathname)
  },
  methods: {
    async loginEmail() {
     this.$store.dispatch("loginEmail", [this.email, this.password]);
    },
  },
  beforeDestroy() {
    this.$store.dispatch('pathName')
  }
};
</script>

<style>
body {
  background-image: url("../assets/back-ground-login.png") !important;
}
.extra-container {
  height: 80%;
  width: 60%;
  background-color: rgba(252, 230, 251, 0.8);
  padding: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.test{
  background-color: aqua;
}
</style>