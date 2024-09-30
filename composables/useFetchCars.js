export default async function fetchCars(city, filters) {
    const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
        query: {
            ...filters, 
        }
    })

    if (error.value) {
        throw createError({
            statusCode: error.value.statusCode || 500, 
            statusMessage: error.value.statusMessage || 'Unable to fetch cars'
        })
    }

    return { data: data.value, refresh }
}
