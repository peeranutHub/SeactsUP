<template>
  <div id="app">
    <navbar v-if="pathName !== '/login' " />
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import navbar from "./components/navbar";
export default {
  components: {
    navbar,
  },
  computed: {
    ...mapGetters({ pathName: "getPath" }),
  },
};
</script>
