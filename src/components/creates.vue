<template>
  <div>
      <div>
        <h2 style="text-indent: 50px">
          การสร้างชมรมจะต้องมีนิสิตจาก 7 คณะ ต้องมีกรรมการชมรมทั้งหมด15คน เเละผู้ที่เป็นประธานต้องมีเกรดใน
          ภาคเรียนที่ผ่านมาไม่ต่ำกว่า 2.00 หากท่านลงการสมัครสร้างชมรมกรุณาเข้าไปทำแบบฟอร์ม
          ในลิ้งต่อไปนี้เพื่อนำไปเป็นหลักฐานในการสร้างชมรม
        </h2>
      </div>

      <br><br><br>

      <div>
          <h2>แบบฟอร์มขออนุญาตจัดตั้งชมรม</h2>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    computed: {
      ... mapGetters({x: 'getterI'})
    },
  }
</script>

<style>

</style>