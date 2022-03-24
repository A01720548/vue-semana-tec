<script setup>
import { auth } from '../main'

</script>
<template>
  <div class="container">
    <h1 class="display-1">Welcome, {{ auth.currentUser.displayName }}</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.display-1 {
  color: white;
}
</style>