<template>
  <div style="padding: 0 40px; padding-bottom: 40px;">
    <br><br>

    <div class="d-flex" style="padding: 0 20px;">
      <img
        src="https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg"
        alt=""
        style="width: 20%; margin-right: 50px;"
      />
      <div>
        <h2>ชมรมช่างภาพมหาวิทยาลัยพะเยา</h2>
        <div class="d-flex">
          <b-form-rating v-model="value" color="#FFD700" readonly show-value precision="1"></b-form-rating>
        </div>
          <h2>50 คน</h2>
        <b-button>ลงทะเบียนเข้าชมรม</b-button>
      </div>
    </div>

    <br>

    <div style="background-color: #FFFFFF;">
      <div>
        <h2>รายละเอียดชมรม</h2>
        <h3
          style="text-indent: 50px"
        >เป็นชมรมของคนชอบถ่ายภาพ หลงไหลในภาพถ่าย เข้ามาเป็นครอบครัวช่างถ่ายภาพหมาวิทยาลับกับเราได้เลย</h3>
      </div>
      <div>
        <h2>งานกิจกรรม</h2>
        <div style="display: flex; flex-direction: column;">
          <div style="align-self: center;">
            <img src="https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg" />
          </div>
          <br />
          <h2>กิจกรรมที่ทำในปีที่เเล้ว</h2>
          <ul>
            <li style="list-style: none;">กิจกรรมไปถ่ายรูปให้เวียง</li>
            <li style="list-style: none;">กิจกรรมถ่ายรูปงาน UP ambassador</li>
            <li style="list-style: none;">ถ่ายรูปงานรับน้องเข้าหอ</li>
          </ul>
        </div>
      </div>
    </div>

    <br>

    <div style="background-color: #FFFFFF;">
      <h2>รีวิว</h2>
      <div>
        <div style="display: flex; justify-content: space-between;">
          <h4>กิจกรรมสนุก พี่ๆชมรมเป็นกันเองมากครับ</h4>
          <h4>1ปีที่แล้ว</h4>
        </div>
        <div>
        <b-form-rating v-model="value" color="#FFD700" class="mb-2"></b-form-rating>
        </div>
      </div>
    </div>

    <br>

    <div>
      <div>
        <h3>แตะเพื่อจัดอันดับ</h3>
      </div>
      <div>
        <b-form-rating v-model="value" color="#FFD700" class="mb-2"></b-form-rating>
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
export default {
  data() {
    return {
      empty: "https://www.flaticon.com/svg/static/icons/svg/860/860827.svg",
      fill: "https://www.flaticon.com/svg/static/icons/svg/2107/2107957.svg",
      value: 3.5,
    };
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>