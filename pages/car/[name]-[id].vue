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
const {cars} = useCars()
useHead({
    title: toTitleCase(route.params.name)
})

definePageMeta({
    layout: 'custom'
})

const car = computed(() => {
    return cars.find((c) => {
        return c.id === parseInt(route.params.id)
    })
})

if(!car.value) {
    throw createError({
        statusCode: 404, 
        message: `Car with ID  of ${route.params.id} doesn't exist`
    })
}


</script>