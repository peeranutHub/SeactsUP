<template>
  <div>
    <div class="ml-auto" style="max-width: 25rem; display: flex: justify-content: flex-end;">
      <b-dropdown id="dropdown-1" text="Filter" class="m-md-2">
        <b-dropdown-item>วันที่ลง</b-dropdown-item>
        <b-dropdown-item>ตามตัวอักษร</b-dropdown-item>
        <b-dropdown-item>จำนวนสมาชิก</b-dropdown-item>
      </b-dropdown>
      <input type="search" />

      <b-button size="lg" style="background: #6F42C1;"  class="m-md-2">
      <b-icon icon="search" aria-label="Help"></b-icon>
      </b-button>
    </div>

    <div class="card-container">
      <b-card
        v-for="i in OP"
        :key="i.c_id"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        class="box-club"
      >
        <router-link :to="`viewClub/${i.c_id}`">{{ i.c_name}}</router-link>
      </b-card>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
export default {
  data() {
    return {};
  },
  methods: {
    goto(i) {
      console.log(i);
    },
  },
  computed: {
    ...mapGetters({
      OP: "getterDATA",
    }),
  },
  created() {
    this.$store.dispatch("dataclubs");
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