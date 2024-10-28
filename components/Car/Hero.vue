<template>
    <div>
    <!-- HOME HERO -->
        <div class="relative h-[calc(100vh-70px)] w-100 bg-no-repeat bg-cover bg-bottom bg-[url('@/assets/hero-bg.webp')]">
            <div class="z-10 absolute w-full h-full flex justify-center items-center">
                <div class="text-center w-full md:w-1/2 px-2">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif mb-10 text-white">Find your drive</h1>
                    <!-- HOME SEARCH -->
                    <car-search-bar></car-search-bar>
                    <!-- HOME SEARCH -->
                </div>
            </div>
            <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
        </div>
    <!-- HOME HERO -->
    </div>
</template>