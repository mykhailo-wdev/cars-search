<template>
    <div class="w-full">
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
const { cars } = useCars()
const favorite = useLocalStorage('favorite', {})

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