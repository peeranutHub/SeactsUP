<template>
  <div style="padding: 0 40px; padding-bottom: 40px">
    <br /><br />

    <div class="d-flex" style="padding: 0 20px">
      <img
        src="https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg"
        alt=""
        style="width: 20%; margin-right: 50px"
      />
      <div>
        <h2>{{ club.c_name }}</h2>
        <div class="d-flex">
          <b-form-rating
            v-model="value"
            color="#FFD700"
            readonly
            show-value
            precision="1"
          ></b-form-rating>
        </div>
        <h2>50 คน</h2>
        <div style="display: flex; flex-direction: column">
          <b-button>ลงทะเบียนเข้าชมรม</b-button>
          <b-button variant="danger" style="margin-top: 25px" @click="onDelete"
            >ลบชมลม</b-button
          >
        </div>
      </div>
    </div>

    <br />

    <div style="background-color: #ffffff">
      <div>
        <h2>รายละเอียดชมรม</h2>
        <h3 style="text-indent: 50px">
          {{ club.details_club }}
        </h3>
      </div>
      <div>
        <h2>งานกิจกรรม</h2>
        <div style="display: flex; flex-direction: column">
          <div style="align-self: center"></div>
          <br />
          <h2></h2>
          <ul>
            <li style="list-style: none">{{ club.last_de }}</li>
          </ul>
        </div>
      </div>
    </div>

    <br />

    <div style="background-color: #ffffff">
      <h2>รีวิว</h2>
      <div>
        <div style="display: flex; justify-content: space-between">
          <h4>กิจกรรมสนุก พี่ๆชมรมเป็นกันเองมากครับ</h4>
          <h4>1ปีที่แล้ว</h4>
        </div>
        <div>
          <b-form-rating
            v-model="value"
            color="#FFD700"
            class="mb-2"
          ></b-form-rating>
        </div>
      </div>
    </div>

    <br />

    <div>
      <div>
        <h3>แตะเพื่อจัดอันดับ</h3>
      </div>
      <div>
        <b-form-rating
          v-model="value"
          color="#FFD700"
          class="mb-2"
        ></b-form-rating>
      </div>
    </div>
    <div>
      <b-container fluid>
        <b-row>
          <b-col sm="5">
            <b-form-textarea
              id="textarea-small"
              size="sm"
              placeholder="Small textarea"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      value: "",
      hardCode: {
        category_club: "sport and health",
        s_id: ["62021449", "62021447", "62021456", "62021478", "62021436"],
        c_id: "01",
        c_name: "badminton",
        details_club:
          "เป็นกีฬาที่ใช้ไม้เเบดของตัวเองเเละต้องขึ้นไปเล่นเเบดที่บนโดม",
        n_teacher: "ขนมปัง",
      },
    };
  },
  methods: {
    onDelete() {
      this.$store.dispatch('delclub', this.club.c_id)
    },
  },
  computed: {
    ...mapGetters({
      club: "getClub",
    }),
  },
  created() {
    this.$store.dispatch("viewClub", this.$route.params.id);
  },
  beforeDestroy() {
    this.$store.dispatch("viewClub", this.$route.params.id);
  },
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
.test {
  display: flex;
  background: gray;
  justify-content: center;
}
</style>