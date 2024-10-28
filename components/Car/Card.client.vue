<template>
    <div class="relative shadow-md border rounded-lg w-full overflow-hidden cursor-pointer">
        <img class="absolute w-5 right-3 top-2 z-20" 
            :src="favored ? heartFilled : heartOutline" 
            alt="" 
            @click="emit('favor', car.id)" 
        />
        <div class="flex flex-col xl:flex-row h-auto" @click="navigateTo(`/car/${car.name}-${car.id}`)">
            <NuxtImg  
                :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`" 
                alt=""
                class="w-full h-[260px] md:h-[300px] xl:w-[40%] xl:h-auto object-cover"
            />
            <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <h1 class="text-base md:text-lg font-semibold text-blue-700">{{ car.name }}</h1>
                    <p class="text-sm md:text-base text-gray-700 mt-1 line-clamp-3">{{ car.description }}</p>
                </div>
                <h1 class="mt-4 text-base md:text-lg font-bold text-gray-800">${{ car.price }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import heartFilled from '@/assets/heartFilled.png'
import heartOutline from '@/assets/heartOutline.png'
const props = defineProps({
    car: Object,
    favored: Boolean
})
const emit = defineEmits(['favor'])

const config = useRuntimeConfig()


</script>