<template>

  <div class="register">
      <registers />
  </div>
  
   
</template>

<script>

import registers from '@/components/registers.vue'

export default {
    name: 'register',
    components: {
        registers
    }
}
</script>

<style>
.login{
    max-width: 600px;
    
}
</style>
