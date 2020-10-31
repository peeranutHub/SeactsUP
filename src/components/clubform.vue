<template>
  <div>
    <br>
    <div class="d-flex">
      <h2>อาจารย์ที่ปรึกษา1:</h2>
      <input v-model="advisor1" type="advisor1">
    </div>
    <div class="d-flex">
      <h2>อาจารย์ที่ปรึกษา2:</h2>
      <input v-model="advisor2" type="advisor2">
    </div>
    <br>
    <div>
      <h2>รายชื่อคณะกรรมการของชมรม</h2>
    </div>

    <div>
      <div class="d-flex">
        <h2>ตำแหน่ง:</h2>
        <input v-model="positionclub" type="">
      </div>
      <div class="d-flex">
        <h2>ชื่อ-นามสกุล:</h2>
        <input v-model="name" type="">
      </div>
      <div class="d-flex">
        <h2>รหัสนิสิต:</h2>
        <input v-model="id" type="">
      </div>
      <div class="d-flex">
        <h2>คณะ:</h2>
        <input v-model="fselected" type="">
      </div>
      <div class="d-flex">
        <h2>สาขา:</h2>
        <input v-model="mselected" type="">
      </div>
      <div class="d-flex">
        <h2>ชั้นปี:</h2>
        <input v-model="year" type="">
      </div>
      <div class="d-flex">
        <h2>เกรดเฉลี่ย:</h2>
        <input v-model="gpa" type="">
      </div>
      <div class="d-flex">
        <h2>เบอร์โทร:</h2>
        <input v-model="phonenumber" type="">
      </div>
      <div class="d-flex">
        <h2>Email:</h2>
        <input v-model="email" type="">
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      positionclub: '',
      name: '',
      id: '',
      board: '',
      branch: '',
      year: '',
      gpa: '',
      phonenumber: '',
      email: '',
    }
},
computed: {
    ... mapGetters({positionclub: 'getterPOSITIONCLUB', id:'getterID', board: 'getterBOAED', branch: 'getterBRANCH', 
                    year: 'getterYEAR',gpa: 'getterGPA',phonenumber: 'getterPHONENUMBER',email: 'getterEMAIL',
                    name: 'getterNAME'}),
},
  methods: {
    form(){
      this.$store.dispatch('information', [this.positionclub,this.id,this.board,this.branch,this.year,this.gpa,
                                          this.phonenumber,this.email,this.name])
    }
  }
}
</script>

<style>

</style>