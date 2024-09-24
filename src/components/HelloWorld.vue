<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-4xl font-bold text-gray-800 drop-shadow-lg font-beautiful">{{ msg }}</h1>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.font-beautiful {
  font-family: 'Pacifico', cursive;
}
</style>
