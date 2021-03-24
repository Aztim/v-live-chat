<template>
  <form @submit.prevent="handleSubmit" action="">
      <input type="email" required placeholder="email" v-model="emal">
      <input type="password" required placeholder="password" v-model="password">
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(email.value, password.value)
    }

    return {email, password, handleSubmit}
    // return (displayName.value, email.value, password.value)
  }
}
</script>

<style>

</style>