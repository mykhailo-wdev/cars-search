<template>
    <div>
        <div class="mt-32 flex">
            <car-side-bar></car-side-bar>
            <NuxtPage/>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const {toTitleCase} = useUtilities()
useHead({
    title: `${route.params.make1 ? toTitleCase(route.params.make1) : 'Cars'} in ${toTitleCase(route.params.city)}`
})

definePageMeta({
    layout: "custom"
})

</script>