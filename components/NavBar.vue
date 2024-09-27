<template>
    <div>
        <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
            <NuxtLink to="/" class="text-3xl font-mono">cartrader</NuxtLink>
            <div v-if="user" class="flex">
                <NuxtLink to="/profile/listings" class="mr-5">profile</NuxtLink>
                <p class="cursor-pointer" @click="logout">Logout</p>
            </div>
            <NuxtLink to="/login" v-else>Login</NuxtLink>
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

        localStorage.removeItem('supabase.auth.token')

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