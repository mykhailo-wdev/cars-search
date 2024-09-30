import cars from '@/data/cars.json'

export default defineEventHandler((event) => {
    const { city } = event.context.params
    const { make, minPrice, maxPrice } = getQuery(event)

    if (!city) {
        return {
            status: 400,
            message: 'City parameter is required'
        }
    }

    let filteredCars = cars.filter(car => {
        return car.city.toLowerCase() === city.toLowerCase()
    })

    if (filteredCars.length === 0) {
        return {
            status: 404,
            message: 'No cars found for this city'
        }
    }

    if (make) {
        filteredCars = filteredCars.filter(car => {
            return car.make.toLowerCase() === make.toLowerCase()
        })
    }

    if (minPrice) {
        filteredCars = filteredCars.filter(car => car.price >= Number(minPrice))
    }

    if (maxPrice) {
        filteredCars = filteredCars.filter(car => car.price <= Number(maxPrice))
    }

    return filteredCars
})
