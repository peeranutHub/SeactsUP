<template>
  <div class="home">
    <clubs/>
  </div>
</template>

<script>
// @ is an alias to /src
import clubs from '@/components/clubs.vue'

export default {
  name: 'Home',
  components: {
    clubs
  }
}
</script>
