<template>
    <div class="w-full">
        <div v-if="cars.length === 0">
            <p>No cars of this model available.</p>
        </div>
        <car-card 
            v-for="car in cars" 
            :key="car.id" 
            :car="car" 
            @favor="handleFavorite"
            :favored="car.id in favorite"
        >
        </car-card>
    </div>
</template>

<script setup>
const favorite = useLocalStorage('favorite', {})
const props = defineProps({
    cars: Array
})

const handleFavorite = (id) => {
    if(id in favorite.value) {
        delete favorite.value[id]
    } else {
        favorite.value = {
            ...favorite.value,
            [id]: true
        }
    }
} 
</script>