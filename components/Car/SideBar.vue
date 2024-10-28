<template>
    <div>
        <div class="shadow border w-64 mr-10 md:mr-0 z-30 ">
            <!-- LOCATION START -->
            <div class="p-5 flex flex-col md:flex-row justify-between md:items-center items-start relative cursor-pointer border-b">
                <h3> Location</h3>
                <h3 class="text-blue-800 capitalize font-bold cursor-pointer bg-blue-100 hover:bg-blue-300 active:bg-blue-400 transition duration-200 rounded p-2 shadow-md" @click="updateModal('location')">{{ route.params.city }}</h3>
                <div v-if="modal.location" class="absolute border shadow p-5 top-1 -m-1 bg-white z-50 w-[160px] sm:w-[160px] md:w-[160px] lg:w-[280px] right-1 md:left-56">
                <input type="text" class="w-full border p-1 rounded" v-model="city">
                <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="onChangeLocation">Apply</button>
                </div>
            </div>
            <!-- LOCATION END -->

            <!-- MAKES START -->
            <div class="p-5 flex flex-col md:flex-row justify-between md:items-center items-start relative cursor-pointer border-b">
                <h3>Make</h3>
                <h3 class="text-blue-800 capitalize font-bold cursor-pointer bg-blue-100 hover:bg-blue-300 active:bg-blue-400 transition duration-200 rounded p-2 shadow-md" @click="updateModal('make')">
                    <!-- {{ route.params.make || "Any" }} -->
                    {{ route.params.make1 || "Any" }}
                </h3>
                <div class="absolute border shadow p-5 top-1 -m-1 bg-white z-50 w-[160px] sm:w-[160px] md:w-[45vw] lg:w-[35vw] max-h-[400px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 right-1 md:left-56"
                    v-if="modal.make"
                >
                    <h4 
                        v-for="make in makes" 
                        :key="make" 
                        @click="onChangeMake(make)"
                        >
                        {{ make }}
                    </h4>
                </div>
            </div>
            <!-- MAKES END -->

            <!-- PRICE START -->
            <div class="p-5 flex flex-col md:flex-row justify-between md:items-center items-start relative cursor-pointer border-b">
                <h3>Price</h3>
                <h3 class="text-blue-800 capitalize font-bold cursor-pointer bg-blue-100 hover:bg-blue-300 active:bg-blue-400 transition duration-200 rounded p-2 shadow-md" @click="updateModal('price')">{{ priceRangeText }}</h3>
                <div class="absolute border shadow p-5 top-1 -m-1 bg-white z-50 w-[160px] sm:w-[160px] md:w-[160px] lg:w-[280px] right-1 md:left-56"
                    v-if="modal.price"
                >
                    <input 
                        class="w-full border p-1 rounded" 
                        type="text" 
                        placeholder="Min" 
                        v-model="priceRange.min" 
                    />
                    <input 
                        class="w-full border p-1 rounded" 
                        type="text" 
                        placeholder="Max" 
                        v-model="priceRange.max" 
                    />
                    <button class="bg-blue-400 w-full mt-2 rounded text-white p-1"
                        @click="onChangePrice"
                    >
                    Apply</button>
                </div>
            </div>
            <!-- PRICE END -->
        </div>
    </div>
</template>

<script setup>
const {makes} = useCars()
const route = useRoute()
const router = useRouter()
const modal = ref({
    make: false,
    location: false,
    price: false
})

const city = ref('')
const priceRange = ref({
    min: '',
    max: ''
})

const priceRangeText = computed(() => {
    const minPrice = route.query.minPrice
    const maxPrice = route.query.maxPrice

    if(!minPrice && !maxPrice) return 'Any'
    else if(!minPrice && maxPrice) {
        return `< $${maxPrice}`
    }
    else if(minPrice && !maxPrice) {
        return `> $${minPrice}` 
    }
    else {
        return `$${minPrice}-$${maxPrice}` 
    }
})

const updateModal = (key) => {
    modal.value[key] = !modal.value[key]
}

const onChangeLocation = () => {
    if(!city.value) return
    if(!isNaN(parseInt(city.value))) {
        throw createError({
            statusCode: 400,
            message: 'Invalid city format'
        })
    }
    updateModal('location')
    navigateTo(`/city/${city.value}/car/${route.params.make1}`)
    city.value = ''
}

const onChangeMake = (make) => {
    updateModal('make')
    navigateTo(`/city/${route.params.city}/car/${make}`)
}

const onChangePrice = () => {
    updateModal('price')
    if(priceRange.value.max && priceRange.value.min) {
        if(priceRange.value.min > priceRange.value.max) return
    }
    router.push({
        query: {
            minPrice: priceRange.value.min,
            maxPrice: priceRange.value.max
        }
    })
}

</script>