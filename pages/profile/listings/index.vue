<template>
    <div>
        <div class="flex justify-between mt-24 items-center">
            <h1 class="text-6xl">My Listings</h1>
            <NuxtLink to="/profile/listings/create" 
                class="w-9 
                h-9 
                bg-blue-400 
                flex 
                justify-center 
                items-center 
                rounded-full 
                text-white 
                font-bold 
                cursor-pointer
                ">+</NuxtLink>
        </div>
        <div class="shadow rounded p-3 mt-5">
            <car-listing-card 
                v-for="listing in listings" 
                :key="listing.id"
                :listing="listing"
                @delete-click="handleDelete"
            >
            </car-listing-card>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
    middleware: ['auth']
})

const user = useSupabaseUser()
const {data: listings, refresh} = await useFetch(
    `/api/car/listings/user/${user.value.id}`
)

const handleDelete = async (id) => {
    await $fetch(`/api/car/listings/${id}`, {
        method: 'delete'
    })
    listings.value = listings.value.filter((listing) => listing.id !== id)
}

</script>