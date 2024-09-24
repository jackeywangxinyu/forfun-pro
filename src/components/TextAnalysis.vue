<template>
  <div class="max-w-2xl mx-auto p-4">
    <textarea 
      v-model="inputText" 
      placeholder="Enter your text here" 
      class="w-full h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
    <button 
      @click="analyzeText" 
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Analyze Text
    </button>
    <div v-if="analysisResult" class="mt-6 p-4 bg-gray-100 rounded-md">
      <h2 class="text-xl font-semibold mb-2">Analysis Result</h2>
      <pre class="whitespace-pre-wrap">{{ analysisResult }}</pre>
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