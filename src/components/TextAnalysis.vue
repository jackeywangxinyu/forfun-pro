<template>
  <div>
    <textarea v-model="inputText" placeholder="Enter your text here"></textarea>
    <button @click="analyzeText">Analyze Text</button>
    <div v-if="analysisResult">
      <h2>Analysis Result</h2>
      <pre>{{ analysisResult }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const inputText = ref('')
const analysisResult = ref(null)

const analyzeText = async () => {
  try {
    const response = await axios.post(
      'https://workers-playground-royal-unit-6c90.xinyugf521.workers.dev/api', // Replace with your Cloudflare Worker URL
      {
        messages: [
          { role: 'system', content: 'You are a friendly assistant' },
          { role: 'user', content: `Analyze the following text for typos, incorrect sentences, allusions, and provide suggestions for revisions:\n\n${inputText.value}` }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    analysisResult.value = response.data.choices[0].message.content
  } catch (error) {
    console.error('Error analyzing text:', error)
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}
button {
  margin-bottom: 20px;
}
</style>