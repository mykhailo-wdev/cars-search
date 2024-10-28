<template>
    <div>
        <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white px-4 shadow-md header-height">
            <NuxtLink to="/" class="text-3xl font-mono">Cartrader</NuxtLink>
            <div v-if="user" class="flex">
                <NuxtLink to="/profile/listings" class="mr-5 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300 shadow-md transform hover:scale-105">Profile</NuxtLink>
                <p class="cursor-pointer text-lg font-semibold text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300 shadow-md inline-block" @click="logout">Logout</p>
            </div>
            <NuxtLink to="/login" v-else class="text-lg font-semibold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300 shadow-md transform hover:scale-105">Login</NuxtLink>
        </header>
    </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
    try {
        const { error } = await supabase.auth.signOut()

        if (error) {
            throw error
        }

        await $fetch('/api/_supabase/session', {
            method: 'POST',
            body: { event: 'SIGNED_OUT', session: null }
        })

        user.value = null 
        
        console.log('Ви успішно вийшли із системи')
    } catch (error) {
        console.log('Помилка при виході:', error.message)
    }

    navigateTo('/')
}

</script>

<style lang="css">
.header-height {
    height: 70px;
}
</style>