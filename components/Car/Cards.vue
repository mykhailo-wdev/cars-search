<template>
    <div class="w-full">
        <car-card v-for="car in cars" :key="car.id" :car="car"></car-card>
    </div>
</template>

<script setup>
const { cars } = useCars()
</script>