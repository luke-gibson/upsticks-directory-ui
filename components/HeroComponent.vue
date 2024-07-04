<script setup lang="ts">
    const props = defineProps({
        large: {
            type: String,
            required: true
        },
        medium: {
            type: String,
            required: true
        },
        small: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <figure class="relative w-full  bg-gray-800 overflow-hidden">
        <picture>
            <source :srcset="large" media="(min-width: 1024px)">
            <source :srcset="medium" media="(min-width: 768px)">
            <img :src="small" alt="Hero Image" class="w-full object-cover">
        </picture>
    </figure>
    <slot/>
</template>