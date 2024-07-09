<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="flex space-x-4 items-center">
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
        <li>
            <NuxtLink class="text-gray-800 hover:text-[#E2883C] transition-colors duration-300 font-bold flex items-center" to="/business-registration"><span class="mr-0 md:mr-2"><IconsAddUser/></span> <span class="hidden md:block text-sm">Business Registration</span></NuxtLink>
        </li>
    </ul>
  </nav>
</template>