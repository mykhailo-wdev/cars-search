<template>
    <div class="rounded shadow mt-20">
        <car-message-card></car-message-card> 
        <car-message-card></car-message-card>
        <car-message-card></car-message-card>
        <car-message-card></car-message-card> 
        <car-message-card></car-message-card> 
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
    middleware: ['auth']
}) 
</script>