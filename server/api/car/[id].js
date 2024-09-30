import cars from '@/data/cars.json'

export default defineEventHandler((event) => {
    const { id } = event.context.params;

    // Знайти автомобіль за його ID
    const car = cars.find(c => c.id === parseInt(id))

    // Перевірити, чи існує автомобіль
    if (!car) {
        throw createError({
            statusCode: 404,
            message: `Car with ID of ${id} doesn't exist`
        });
    }

    return car; 
});
