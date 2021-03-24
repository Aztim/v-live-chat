<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="emal">
      <input type="password" required placeholder="password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(displayName.value)
    }

    return {displayName, email, password, handleSubmit}
    // return (displayName.value, email.value, password.value)
  }
}
</script>

<style>

</style>