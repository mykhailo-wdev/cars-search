<template>
    <div>
        <car-cards v-if="cars.length" :cars="cars"></car-cards>
        <h1 v-else class="text-red-600 text-2xl font-bold text-center mt-4 mb-2 p-4 border border-red-500 bg-red-100 rounded-lg shadow-md">No cars fond with filters</h1>
    </div>
</template>

<script setup>
const route = useRoute()

const { data: cars, refresh } = await useFetchCars(route.params.city, {
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
    make: route.params.make1
})

watch(() => route.query, () => {
    window.location.reload(true)
})


</script>
