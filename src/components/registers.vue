<template>
  <div class="test-p">
    <div class="extra-container">
      <div>
        <img src="../assets/logo.png" alt="">
      </div>
      <h1>Register</h1>
      <form @submit.prevent="loginEmail">
        <div>
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
          
        </div>
        <router-link to="/login">login</router-link>
        <br>
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
  methods: {
    loginEmail() {
      this.$store.dispatch("registerEmail", [this.email, this.password]);
     
    },
  },
};
</script>

<style>
.extra-container {
  height: 80%;
  width: 60%;
  background-color: rgba(252, 230, 251, 0.7);
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