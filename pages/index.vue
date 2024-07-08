<script setup lang="ts"></script>

<template>
  <HeroComponent
    large="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/desktop-home-page_drdhqe.jpg"
    medium="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/tablet-home-page_xfrd3l.jpg"
    small="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720210549/upsticks%20diredtory/mobile-home-page_v2r3y7.jpg"
  >
    <figcaption class="bg-[#2B5773] lg:pt-9 px-6 py-8 lg:pb-12 lg:px-9 lg:max-w-screen-md mx-auto lg:rounded-lg mg:rounded-lg lg:mt-[-150px] relative">
      <div class="mx-auto text-center text-[#E2883C]">
        <h2 class="text-4xl font-extrabold mb-4">Thinking of moving?</h2>
        <p class="text-base text-white max-w-[450px] mx-auto">
          Search the UK's finest choice of estate agents, conveyancers, removals and mortgage brokers
        </p>
        <div class="mt-10">
          <Search/>
        </div>
      </div>
    </figcaption>
  </HeroComponent>

  <section class="bg-[#f2f2f2]">
    <div class="md:container mx-auto py-16 px-4 flex flex-col">
      <h2 class="text-gray-800 text-4xl font-extrabold text-center mb-4">
        Find your moving solutions
      </h2>
      <p class="text-gray-800 text-center mb-14 text-base max-w-[600px] mx-auto">
        The UK’s finest companies are here to help get you moving, providing top-notch services and solutions tailored to meet your unique needs.
      </p>
      <div class="flex justify-center flex-wrap">
        <CardComponent>
          <IconsEstateAgent/>
          <h3 class="text-gray-800 text-xl font-semibold mb-3 mt-3">Estate Agents</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Tailor our product to suit your needs Tailor our product to suit your needs.
          </p>
          <NuxtLink class="flex items-center font-bold mt-3 text-[#2B5773] hover:text-[#E2883C] transition-all" to="/estate-agent">
            read more <span class="inline-block ml-3 pt-1"><IconsRightArrow/></span>
          </NuxtLink>
        </CardComponent>

        <CardComponent>
          <IconsMortgageBroker/>
          <h3 class="text-gray-800 text-xl font-semibold mb-3 mt-3">Mortgage Brokers</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Your data is protected by the latest security measures.
          </p>
          <NuxtLink class="flex items-center font-bold mt-3 text-[#2B5773] hover:text-[#E2883C] transition-all" to="/">
            read more <span class="inline-block ml-3 pt-1"><IconsRightArrow/></span>
          </NuxtLink>
        </CardComponent>

        <CardComponent>
          <IconsConveyancing/>
          <h3 class="text-gray-800 text-xl font-semibold mb-3 mt-3">Conveyancers</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Experience blazing-fast performance with our product.
          </p>
          <NuxtLink class="flex items-center font-bold mt-3 text-[#2B5773] hover:text-[#E2883C] transition-all" to="/">
            read more <span class="inline-block ml-3 pt-1"><IconsRightArrow/></span>
          </NuxtLink>
        </CardComponent>

        <CardComponent>
          <IconsRemovalsVue/>
          <h3 class="text-gray-800 text-xl font-semibold mb-3 mt-3">Removals</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Tailor our product to suit your needs Tailor our product to suit your needs.
          </p>
          <NuxtLink class="flex items-center font-bold mt-3 text-[#2B5773] hover:text-[#E2883C] transition-all" to="/" >
            read more <span class="inline-block ml-3 pt-1"><IconsRightArrow/></span>
          </NuxtLink>
        </CardComponent>

        <CardComponent>
          <IconsGraph/>
          <h3 class="text-gray-800 text-xl font-semibold mb-3 mt-3">EPCs</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Tailor our product to suit your needs Tailor our product to suit your needs.
          </p>
          <NuxtLink class="flex items-center font-bold mt-3 text-[#2B5773] hover:text-[#E2883C] transition-all" to="/" >
            read more <span class="inline-block ml-3 pt-1"><IconsRightArrow/></span>
          </NuxtLink>
        </CardComponent>
        <CardComponent>
          <IconsTools/>
          <h3 class="text-gray-800 text-xl font-semibold mb-3 mt-3">Property Surveyors</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Tailor our product to suit your needs Tailor our product to suit your needs.
          </p>
          <NuxtLink class="flex items-center font-bold mt-3 text-[#2B5773] hover:text-[#E2883C] transition-all" to="/" >
            read more <span class="inline-block ml-3 pt-1"><IconsRightArrow/></span>
          </NuxtLink>
        </CardComponent>
      </div>
    </div>
  </section>

  <section class="bg-[#f2f2f2] pb-16">
    <IconsGreyLogo class="container mx-auto w-72"/>
  </section>
</template>
