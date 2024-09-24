<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <header class="text-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Text Analysis Tool</h1>
      <p class="text-gray-600">Analyze your text for typos, incorrect sentences, allusions, and get suggestions for revisions.</p>
    </header>
    <textarea 
      v-model="inputText" 
      placeholder="Enter your text here" 
      class="w-full h-40 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
    ></textarea>
    <button 
      @click="analyzeText" 
      class="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
    >
      Analyze Text
    </button>
    <div v-if="analysisResult" class="mt-6 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Analysis Result</h2>
      <pre class="whitespace-pre-wrap text-gray-700">{{ analysisResult }}</pre>
    </div>
    <footer class="text-center mt-8 text-gray-500">
      <p>&copy; 2023 Text Analysis Tool. All rights reserved.</p>
    </footer>
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
    console.log(response.data);
    analysisResult.value = response.data.result.response
  } catch (error) {
    console.error('Error analyzing text:', error)
  }
}
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>