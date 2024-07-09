<script setup lang="ts">

const searchQuery = ref('');
</script>

<template>
    <input
        v-model="searchQuery"
        type="email"
        placeholder="Enter postcode, town or city"
        class="w-full sm:w-96 bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none rounded"
    >
    <NuxtLink :to="`/search?q=${searchQuery}`" class="max-sm:mt-8 sm:ml-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
        Search
    </NuxtLink>
</template>