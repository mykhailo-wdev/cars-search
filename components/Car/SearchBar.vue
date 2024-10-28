<template>
    <div>
        <div class="font-serif w-full max-w-[1000px] mx-auto text-2xl rounded-none sm:rounded-2xl flex flex-col sm:flex-row justify-between overflow-hidden shadow-2xl bg-transparent sm:bg-white">
            <input type="text" class="py-3 px-5 w-full text-xl sm:text-2xl rounded-[0.25rem] sm:rounded-full focus:outline-none" 
                placeholder="Search by city...e.g.Toronto"
                :class="cityError ? 'border-red-500 border-2 rounded-tr-none rounded-br-none' : ''"
                v-model="city"
                @keyup.enter="handleSearch"
                >
            <button class="bg-sky-500 px-10 text-white border-sky-600 rounded mt-4 py-2 sm:mt-0" @click="handleSearch">Search</button>
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