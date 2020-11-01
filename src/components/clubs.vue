<template>
  <div>
    <div class="ml-auto">
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
      <input type="search" />
      <!-- login -->

      <!-- login -->
    </div>

    <div class="card-container">
      <b-card
        v-for="i in club"
        :key="i.id"
        :img-src="i.img"
        img-alt="Image"
        img-top
        tag="article"
        class="box-club"
      >
        <!-- <b-button href="#" variant="primary" @click="goto(i.id)">{{i.name}}</b-button> -->
        <router-link :to="`club1/${i.id}`">{{ i.name }}</router-link>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      club: [
        {
          id: 1,
          name: "kradandum",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 2,
          name: "badminton",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 3,
          name: "Inu",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 4,
          name: "konphiset",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 5,
          name: "changphab",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: 6,
          name: "cover dance",
          img: "https://picsum.photos/600/300/?image=25",
        },
      ],
    };
  },
  methods: {
    goto(i) {
      console.log(i);
    },
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 250px);
}
.box-club {
  max-width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-right: 5px;
}
</style>