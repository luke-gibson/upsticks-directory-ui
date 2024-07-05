<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="flex">
        <li class="mr-6">
            <NuxtLink class="text-gray-800 hover:text-[#E2883C] transition-colors duration-300 font-bold flex items-center" to="/log-in"><span class="mr-0 md:mr-2"><IconsLogin></IconsLogin></span> <span class="hidden md:block">Log in</span></NuxtLink>
        </li>
        <li>
            <NuxtLink class="text-gray-800 hover:text-[#E2883C] transition-colors duration-300 font-bold flex items-center" to="/business-registration"><span class="mr-0 md:mr-2"><IconsAddUser></IconsAddUser></span> <span class="hidden md:block">Business Registration</span></NuxtLink>
        </li>
    </ul>
  </nav>
</template>