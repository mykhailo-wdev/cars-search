export default async (id) => {
    const { data, error } = await useFetch(`/api/car/${id}`)

    if (error.value) {
        throw createError({
            statusCode: error.value.statusCode || 500, 
            statusMessage: error.value.statusMessage || 'Unable to fetch car'
        })
    }

    return { data: data.value }
}