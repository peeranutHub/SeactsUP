<template>

  <div class="Login">
      <logins />
  </div>
  
   
</template>

<script>

import logins from '@/components/logins.vue'

export default {
    name: 'login',
    components: {
        logins
    }
}
</script>

<style>
.login{
    max-width: 600px;
    
}
</style>
