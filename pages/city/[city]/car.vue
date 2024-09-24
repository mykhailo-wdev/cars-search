<template>
    <div>
        <nav-bar></nav-bar>
        <div class="mx-auto mt-4 max-w-7xl space-7-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <div class="mt-32 flex">
                <car-side-bar></car-side-bar>
                <NuxtPage/>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
useHead({
    title: `${route.params.make1 ? toTitleCase(route.params.make1) : 'Cars'} in ${toTitleCase(route.params.city)}`
})

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
</script>