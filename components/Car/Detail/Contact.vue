<template>
    <div class="mt-10">
        <div class="flex w-[600px] justify-between">
            <input v-model="message.name" type="text" class="border p-1" placeholder="name">
            <input v-model="message.email" type="text" class="border p-1" placeholder="email">
            <input v-model="message.phone" type="text" class="border p-1" placeholder="phone">
        </div>
        <div class="flex mt-4 w-[600px]">
            <textarea v-model="message.message" class="border p-1 w-full" placeholder="message"></textarea>
        </div>
        <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4" @click="onSubmit" :disabled="disabledButton">Submit</button>
        <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
        <p v-if="successMessage" class="mt-3 text-green-400">{{ successMessage }}</p>
    </div>
</template>

<script setup>
const route = useRoute()

const message = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const errorMessage = ref('')
const successMessage = ref('')

const disabledButton = computed(() => {
    for(let key in message.value) {
        if(!message.value[key]) return true
    }
    return false
})

const clearMessages = () => {
    setTimeout(() => {
        successMessage.value = ''
        errorMessage.value = ''
    }, 3000) 
}

const onSubmit = async () => {
    try {
        const response = await $fetch(`/api/car/listings/${route.params.id}/message`, {
            method: 'post',
            body: message.value
        });
        message.value = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
        successMessage.value = 'Message sent!!!'
        errorMessage.value = ''
        clearMessages() 
    } catch (err) {
        errorMessage.value = err.statusMessage || 'Error';
        successMessage.value = ''
        clearMessages()  
    }
}
</script>
