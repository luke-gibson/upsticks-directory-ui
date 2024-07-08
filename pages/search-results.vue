<script setup lang="ts"></script>

<template>
  <HeroComponent
    class="relative flex flex-col justify-center items-center text-center before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10"
    large="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/desktop-home-page_drdhqe.jpg"
    medium="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/tablet-home-page_xfrd3l.jpg"
    small="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720210549/upsticks%20diredtory/mobile-home-page_v2r3y7.jpg"
  >
    <figcaption class="absolute z-10 top-1/2 transform translate-y-[-50%] left-2 right-2">
      <h1 class="text-3xl font-bold text-white">Search Results for PO7 5UY</h1>
    </figcaption>
  </HeroComponent>

  <section/>

  <section class="mx-auto py-16 px-4 flex flex-col bg-[#f2f2f2] min-h-[50vh]">
    <div class="md:container mx-auto flex flex-wrap items-start relative">
      <div class="w-full md:w-2/3-minus-2.5rem">
        <ResultComponent>
          <nuxt-img
            class="object-cover w-full rounded-t-lg md:w-56 md:rounded-none md:rounded-s-lg md:min-w-44"
            src="https://www.archboldandedwards.co.uk/templates/ea-r7/images/logo.png"
            alt="Estate Agent"
          />
          <div class="flex flex-row justify-between p-0 mt-6 md:mt-0 md:p-10 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Archbold &amp; Edwards | Waterlooville
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              00000 000 000 | info@example.com
            </p>
          </div>
          <div class="flex flex-row w-full text-center pr-6">
            <NuxtLink
              to="/search-results"
              class="max-sm:mt-8 sm:ml-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none"
            >
              Email Agent
            </NuxtLink>
            <NuxtLink
              to="/search-results"
              class="mt-2 max-sm:mt-8 sm:ml-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none"
            >
              Phone Agent
            </NuxtLink>
            <NuxtLink
              to="/search-results"
              class="mt-2 max-sm:mt-8 sm:ml-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none"
            >
              Add to group contact
            </NuxtLink>
          </div>
        </ResultComponent>

       
      </div>
      <aside class="bg-white border rounded-lg shadow md:ml-10 p-8 w-full md:w-1/3 md:sticky top-0">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Group Contacts</h5>
        <p>Add Estate Agents to your group contact and email them together with your requests.</p>
      </aside>
    </div>
  </section>
</template>
