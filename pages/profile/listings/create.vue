<template>
    <div>
        <div class="mt-24">
            <h1 class="text-6xl">Create a new Listing</h1>
        </div>
        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <car-ad-select 
                title="Make *" 
                :options="makes" 
                name="make"
                @change-input="onChangeInput"
            >
        </car-ad-select>
        <car-ad-input 
            v-for="input in inputs" 
            :key="input.id" 
            :title="input.title" 
            :name="input.name"
            :placeholder="input.placeholder"
            @change-input="onChangeInput"
        ></car-ad-input>
        <car-ad-textarea
            title="Description *" 
            name="description"
            placeholder=""
            @change-input="onChangeInput"
        ></car-ad-textarea>
        <car-ad-image
            @change-input="onChangeInput"
        ></car-ad-image>
        <button class="bg-blue-400 text-white rounded py-2 px-7 mt-3" 
            :disabled="false"
            @click="handleSubmit"
        >Submit</button>
        <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import { number } from 'joi';

definePageMeta({
    layout: 'custom',
    middleware: ['auth']
}) 

const { makes } = useCars()
const user = useSupabaseUser()

const info = useState('adInfo', () => {
    return {
        make: '',
        model: '',
        year: '',
        miles: '',
        price: '',
        city: '',
        seats: '',
        features: '',
        description: '',
        image: 'sddsvsd'

    }
})

const errorMessage = ref('')

const onChangeInput = (data, name) => {
    info.value[name] = data 
}

const inputs = [
    {
        id: 1,
        title: 'Model *',
        name: 'model',
        placeholder: 'Civic' 
    },
    {
        id: 2,
        title: 'Year *',
        name: 'year',
        placeholder: '2019' 
    },
    {
        id: 3,
        title: 'Price *',
        name: 'price',
        placeholder: '10000' 
    },
    {
        id: 4,
        title: 'Miles *',
        name: 'miles',
        placeholder: '10000' 
    },
    {
        id: 5,
        title: 'City *',
        name: 'city',
        placeholder: 'Austin' 
    },
    {
        id: 6,
        title: 'Number of Seats *',
        name: 'seats',
        placeholder: '5' 
    },
    {
        id: 7,
        title: 'Features *',
        name: 'features',
        placeholder: 'Leather Interior, No Accidents' 
    }
]

const isButtonDisabled = computed(() => {
    for(let key in info.value) {
        if(!info.value[key]) return true
    }
    return false
})


const handleSubmit = async () => {
    const body = Object.assign({}, {
    make: info.value.make,
    model: info.value.model,
    year: parseInt(info.value.year),
    miles: parseInt(info.value.miles),
    price: parseInt(info.value.price),
    city: info.value.city.toLowerCase(),
    features: info.value.features.split(', '),
    description: info.value.description,
    image: info.value.image,
    numberOfSeats: parseInt(info.value.seats),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id
});

    delete body.seats;

    try {
        const response = await $fetch('/api/car/listings', {
            method: 'post',
            body
        });
        navigateTo('/profile/listings');
    } catch (err) {
        console.error('FetchError:', err);
        errorMessage.value = err.statusMessage || 'An error occurred while creating the listing.';
    }
};




</script>