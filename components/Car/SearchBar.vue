<template>
    <div>
        <div class="font-serif w-full max-w-[1000px] mx-auto text-2xl rounded-full bg-white flex justify-between overflow-hidden drob-shadow-2xl mx-auto">
            <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" 
                placeholder="Search by city..."
                :class="cityError ? 'border-red-500 border-2 rounded-tr-none rounded-br-none' : ''"
                v-model="city"
                >
            <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Search</button>
        </div>
    </div>
</template>

<script setup>
const city = ref('')
const cityError = ref(false)

const handleSearch = () => {
    if(!city.value) {
        return cityError.value = true
    }
    navigateTo(`/city/${city.value}/car`)
}
</script>