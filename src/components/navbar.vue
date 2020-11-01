<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color: #6f42c1">
      <b-navbar-brand>
        <b-button type="submit" style="background-color: #be5ace"
          >SEACTs UP</b-button
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">ชมรม</b-nav-item>
          <b-nav-item to="/ClubForm">สร้างชมรม</b-nav-item>
          <b-nav-item to="/profile">โปรไฟล์</b-nav-item>
          <b-button
            style="float: right; margin: 15px"
            v-if="auth.length != 0"
            v-on:click="logout()"
            >{{ auth }}</b-button
          >
          <router-link
            to="/login"
            style="
              float: right;
              margin: 15px;
              background: black;
              color: white;
              padding: 10px 15px;
              text-decoration: none;
            "
            v-if="auth.length == 0"
            >login</router-link
          >
          <div style="clear: both" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/login" });
      console.log("logout");
    },
  },
  created: function () {
    // `this` points to the vm instance
    console.log(localStorage.user);
    if (localStorage.user != undefined) {
      this.auth = localStorage.user;
    }
  },
};
</script>

<style>
</style>