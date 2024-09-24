<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TextAnalysis from './components/TextAnalysis.vue'
</script>

<template>
  <HelloWorld msg="To 立德兄" style="font-family: 'Brush Script MT', 'KaiTi', cursive; font-size: 24px; color: #fff; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);" />
  <TextAnalysis />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
