<template>
  <div>
    <div class="userData">
      <button
        type="button"
        class="btn btn-secondary"
        value="input"
        @click="showEdit = !showEdit"
      >
        Edit</button
      ><br />
      <img
        src="../assets/avatar.png"
        alt="avatar"
        style="height: 200px; weight: auto"
      />
      <div v-if="!showEdit">
        <p>ชื่อ {{ user.s_name }}</p>
        <p>รหัสนิสิต {{ user.s_id }}</p>
        <p>ชั้นปี {{ user.year }}</p>
        <p>คณะ {{ user.board }}</p>
        <p>สาขา {{ user.board_branch }}</p>
        <div>
          <span>ชมรมของฉัน</span>
          <p>ชมรมที่นิสิตคนนี้สร้าง</p>
          <span>{{ user.create }}</span>
        </div>
        <div>
          <span>ชมรมที่เข้าร่วม</span>
          <span>{{ user.myClub }}</span>
        </div>
      </div>
      <div v-else>
        <editProfile />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import editProfile from "../components/editProfile";
export default {
  components: {
    editProfile
  },
  data() {
    return {
      showEdit: false,
      foo: {
        board_branch: "SE",
        s_id: "62021449",
        email: "peera@gmail.com",
        s_name: "peeranut",
        board: "ICT",
        myClub: ["กระดานดำ", "เเบดมินตัน", "คนพิเศษ"],
        s_Lname: "moonrut",
      },
    };
  },
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
};
</script>

<style>
.userData {
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
</style>