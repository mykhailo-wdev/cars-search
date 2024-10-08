<template>
    <div class="rounded shadow mt-20">
        <car-message-card v-for="message in messages" :key="message.id" :message="message"></car-message-card> 
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
    middleware: ['auth']
}) 

const route = useRoute()
const { data: messages } = useFetch(`/api/car/listings/${route.params.id}/message`)
</script>