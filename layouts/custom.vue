<template>
    <div>
        <nav-bar></nav-bar>
        <div class="mx-auto mt-4 max-w-7xl space-7-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16">
            <slot />
        </div>
    </div>
</template>

<style>

::-webkit-scrollbar {
  width: 12px; 
  background-color: #f0f0f0; 
}
::-webkit-scrollbar-thumb {
  background-color: #4a90e2; 
  border-radius: 10px; 
  border: 3px solid #f0f0f0;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #357ab8; 
}

* {
  scrollbar-width: thin; 
  scrollbar-color: #4a90e2 #f0f0f0; 
}

* {
  transition: background-color 0.3s, color 0.3s;
}
</style>