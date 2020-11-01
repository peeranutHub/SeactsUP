<template>
  <div>
    <div class="userData">
        <button type="button" class="btn btn-secondary" value="input">Edit</button><br>
      <img
        src="../assets/avatar.png"
        alt="avatar"
        style="height: 200px; weight:auto; "
      />
      <p>ชื่อ จากdatabase</p>
      <p>รหัสนิสิต จากdatabase</p>
      <p>ชั้นปี จากdatabase</p>
      <p>คณะ จากdatabase</p>
      <p>สาขา จากdatabase</p>
      <div>
        <span>ชมรมของฉัน</span>
        <p>ชมรมที่นิสิตคนนี้สร้าง จากdatabase</p>
      </div>
      <div>
        <span>ชมรมที่เข้าร่วม</span>
        <p>ชมรมที่เข้าร่วม จากdatabase</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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