<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TextAnalysis from './components/TextAnalysis.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-gray-100 to-white flex flex-col items-center justify-center p-4 font-sans">
    <HelloWorld msg="To 立德兄" class="mb-8 text-center" />
    <TextAnalysis />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.font-sans {
  font-family: 'Roboto', sans-serif;
}
</style>
