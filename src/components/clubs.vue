<template>
<div>  
  <div class="ml-auto ">
    <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
    </b-dropdown>
    <input type="search">
    <b-button>ค้นหา</b-button>
    <!-- login -->
    <b-button style="float:right;margin:15px;" v-if="auth.length != 0" v-on:click="logout()">{{auth}}</b-button>
    <router-link to="/login" style="float:right;margin:15px;background:black;color:white;padding:10px 15px;text-decoration:none;"  v-if="auth.length == 0">login</router-link>
    <div style="clear:both;"/>
    <!-- login -->
  </div>

  <div class="card-container">
  <b-card
    v-for="i in club" :key="i.id" :img-src="i.img" img-alt="Image" img-top tag="article" class="box-club">
    <!-- <b-button href="#" variant="primary" @click="goto(i.id)">{{i.name}}</b-button> -->
    <router-link :to="`club1/${i.id}`">{{i.name}}</router-link>
  </b-card>
  </div>
  
  
</div>
</template>
<script>
export default {
  data() {
    return {
      
      auth: '',
      club: [
        {
          id: 1, name: "club1", img: "https://picsum.photos/600/300/?image=25" 
        },
        {
          id: 2, name: "club2", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 3, name: "club3", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 4, name: "club4", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 5, name: "club5", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 6, name: "club6", img: "https://picsum.photos/600/300/?image=25"
        },
      ]
      
    }
  },
  methods: {
    goto(i){
      console.log(i);
    },
    logout() {
      localStorage.removeItem('user');
      this.$router.push({ path: '/login' })
      console.log('logout')
    }
  },
    created: function () {
    // `this` points to the vm instance
    console.log(localStorage.user)
    if(localStorage.user != undefined){
      this.auth = localStorage.user
    }
  },
}
</script>

<style scoped>

  .card-container {
    display: grid;
    grid-template-columns: repeat(5, 250px);
  }
  .box-club{
    max-width: 20rem; 
    display: flex; 
    justify-content: space-between;
    margin-top: 5px;
    margin-right: 5px;
  }
</style>