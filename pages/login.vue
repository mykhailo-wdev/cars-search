<template>
    <div class="h-screen flex">
      <div class="flex-1 flex items-center justify-center bg-[#f1f1f1]">
        <form @submit.prevent="signInWithEmail" class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
          <h2 class="text-2xl font-bold text-center">Log In</h2>
  
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          <!-- Error Message -->
          <div v-if="errorMsg" class="text-red-600 text-sm">
            {{ errorMsg }}
          </div>
  
          <!-- Success Message -->
          <div v-if="successMsg" class="text-green-600 text-sm">
            {{ successMsg }}
          </div>
  
          <!-- Submit Button -->
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const client = useSupabaseAuthClient()
const router = useRouter()
const email = ref('')
const password = ref('')
const errorMsg = ref(null)
const successMsg = ref(null)

async function signInWithEmail() {
  errorMsg.value = null
  successMsg.value = null

  if (!email.value || !password.value) {
    errorMsg.value = 'Email and password are required'
    return
  }

  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value, 
      password: password.value, 
    })
    
    if (error) throw error

    successMsg.value = 'Login successful!'
    email.value = ''
    password.value = ''
    router.push('/') 

  } catch (error) {
    errorMsg.value = error.message
  }
}
</script>
