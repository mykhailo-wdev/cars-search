<template>
    <div>
        <nav-bar></nav-bar>
        <div class="mx-auto mt-4 max-w-7xl space-7-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <car-detail-hero></car-detail-hero>
            <car-detail-attributes></car-detail-attributes>
            <car-detail-description></car-detail-description>
            <car-detail-contact></car-detail-contact>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
useHead({
    title: toTitleCase(route.params.name)
})

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

</script>