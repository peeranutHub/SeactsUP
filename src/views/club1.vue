<template>
  <div style="width: 80vw; margin: auto">
    <b-card class="box-club">
      <img :src="getFoo.img" alt="" />
      <div>{{getFoo.name}}</div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clubs: [
        {
          id: 1,
          name: "club1",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 2,
          name: "club2",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 3,
          name: "club3",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 4,
          name: "club4",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 5,
          name: "club5",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 6,
          name: "club6",
          img: "https://picsum.photos/600/300/?image=25",
        },
      ],
    };
  },
 computed: {
     getFoo() {
         const id = this.$route.params.id
         const club = this.clubs.find(c => c.id == id)
         return club
     }
 }
};
</script>

<style scoped>
.box-club {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
  margin-right: 5px;
}
</style>