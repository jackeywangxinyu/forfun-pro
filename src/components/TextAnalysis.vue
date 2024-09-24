<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
    <textarea 
      v-model="inputText" 
      placeholder="Enter your text here" 
      class="w-full h-40 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
    ></textarea>
    <button 
      @click="analyzeText" 
      class="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
    >
      Analyze Text
    </button>
    <div v-if="loading" class="mt-6 p-4 bg-gray-100 rounded-md shadow-inner text-center">
      <h2 class="text-xl font-semibold mb-2">Analyzing...</h2>
      <div class="loader"></div>
    </div>
    <div v-if="analysisResult && !loading" class="mt-6 p-4 bg-gray-100 rounded-md shadow-inner max-h-60 overflow-y-auto">
      <h2 class="text-xl font-semibold mb-2">Analysis Result</h2>
      <pre class="whitespace-pre-wrap text-gray-800">{{ analysisResult }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const inputText = ref('')
const analysisResult = ref(null)
const loading = ref(false)

const analyzeText = async () => {
  loading.value = true
  analysisResult.value = null
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
    console.log(response.data);
    analysisResult.value = response.data.result.response
  } catch (error) {
    console.error('Error analyzing text:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>