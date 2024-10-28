<template>
    <div class="shadow rounded overflow-hidden flex flex-col lg:flex-row justify-between mb-4">
        <div class="flex flex-col md:flex-row">
            <img :src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
                class="w-full md:w-80 h-50 object-cover mb-3 md:mb-0 mr-0 md:mr-3"
                alt="" />
            <div class="p-3">
                <h1 class="text-xl md:text-2xl">{{ listing.name }}</h1>
                <p class="text-blue-400">${{ listing.price }}</p>
            </div>
        </div>
        <div class="p-3 flex justify-between md:justify-end items-center">
            <NuxtLink 
                class="text-blue-400 mr-5"
                :to="`/profile/listings/view/${listing.id}`"
            >View</NuxtLink>
            <p class="text-red-400 cursor-pointer" @click="emits('deleteClick', listing.id)">Delete</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    listing: Object
})

const emits = defineEmits(['deleteClick'])
const config = useRuntimeConfig()
</script> 