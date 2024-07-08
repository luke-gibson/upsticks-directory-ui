<script setup lang="ts"></script>

<template>
  <footer class="md:container mx-auto py-8 flex items-center justify-center md:justify-between flex-wrap">
    <div class="w-full md:w-1/2 flex justify-center md:justify-start">
      <NuxtLink to="/" class="mx-3 text-sm hover:text-[#E2883C] transition-colors">Site map</NuxtLink>
      <NuxtLink to="/" class="mx-3 text-sm hover:text-[#E2883C] transition-colors">Terms of Use</NuxtLink>
      <NuxtLink to="/" class="mx-3 text-sm hover:text-[#E2883C] transition-colors">Privacy Policy</NuxtLink>
      <NuxtLink to="/log-in" class="mx-3 text-sm hover:text-[#E2883C] transition-colors">Admin</NuxtLink>
    </div>
    <div class="flex md:justify-end justify-center md:mt-0 mt-4 w-full md:w-1/2">
      <NuxtLink to="/" class="mx-2 hover:text-[#E2883C] transition-colors">
        <IconsFacebook/>
      </NuxtLink>
      <NuxtLink to="/" class="mx-2 hover:text-[#E2883C] transition-colors">
        <IconsXsocial/>
      </NuxtLink>
      <NuxtLink to="/" class="mx-2 hover:text-[#E2883C] transition-colors">
        <IconsInstagram/>
      </NuxtLink>
      <NuxtLink to="/" class="mx-2 hover:text-[#E2883C] transition-colors">
        <IconsYoutube/>
      </NuxtLink>
    </div>
  </footer>
</template>
