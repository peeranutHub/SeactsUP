<template>
  <div>
    <b-form-rating id="rating-sm" color="#FFD700" v-model="value" size="sm"></b-form-rating>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>