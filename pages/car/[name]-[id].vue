<template>
    <div v-if="car">
        <car-detail-hero :car="car"></car-detail-hero>
        <car-detail-attributes :features="car.features"></car-detail-attributes>
        <car-detail-description :description="car.description"></car-detail-description>
        <car-detail-contact></car-detail-contact>
    </div>
</template>

<script setup>
const route = useRoute()
const {toTitleCase} = useUtilities()
const { data: car } =  await useFetchCar(route.params.id)
useHead({
    title: toTitleCase(route.params.name)
})
definePageMeta({
    layout: 'custom'
})


</script>