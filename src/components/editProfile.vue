<template>
  <div>
    <form @submit.prevent="edit" style="display: flex; flex-direction: column">
      <input type="text" placeholder="คำอธิบาย" v-model="bio" />
      <input type="text" placeholder="ชื่อ" v-model="s_name" />
      <input type="text" placeholder="อีเมล" v-model="email" />
      <input type="password" placeholder="รหัสผ่าน" v-model="password" />
      <input type="text" placeholder="ปี" v-model="year" />
      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bio: "",
      s_name: "",
      email: "",
      password: "",
      year: "",
    };
  },
  methods: {
      edit() {
          this.$store.dispatch('editProfile', {bio : this.bio, s_name: this.s_name, email: this.email, password: this.password, year: this.year})
      }
  }
};
</script>

<style>
</style>