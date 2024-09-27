<template>
  <div class="h-screen flex items-center justify-center bg-[#f1f1f1]">
    <div v-if="loading" class="text-center">
      <div class="new-loader"></div> 
    </div>
    <div v-else-if="successMsg" class="text-center">
      <div class="text-green-600 text-xl mb-4">{{ successMsg }}</div>
      <router-link to="/login" class="text-indigo-600 hover:text-indigo-800 font-semibold">Login</router-link>
    </div>

    <!-- Форма реєстрації -->
    <div v-else class="flex-1 flex items-center justify-center">
      <form @submit.prevent="signUp" class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h2 class="text-2xl font-bold text-center">Sign Up</h2>

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

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseAuthClient()

const email = ref('')
const password = ref('') 
const errorMsg = ref(null)
const successMsg = ref(null)
const loading = ref(false) 

async function signUp() {
  errorMsg.value = null 
  successMsg.value = null
  loading.value = true 

  if (!email.value || !password.value) {
    errorMsg.value = 'Email and password are required'
    loading.value = false 
    return
  }

  try {
    const { error } = await client.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (error) throw error

    setTimeout(() => {
      loading.value = false
      successMsg.value = 'You have successfully registered!' 
      email.value = '' 
      password.value = ''
    }, 2000) 
  } catch (error) {
    loading.value = false 
    errorMsg.value = error.message
  }
}
</script>

<style scoped>
.new-loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
