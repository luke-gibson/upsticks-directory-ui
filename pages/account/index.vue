<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

const client = useSupabaseClient();

const signOut = async () => {
  await client.auth.signOut();
  navigateTo("/");
};

const loggedInUser = await useLoggedInUser();

// get branches for this business
const { data: branches } = await client
  .from("branch")
  .select(`*`)
  .eq("business_id", loggedInUser.business.id);
</script>

<template>
  <div class="bg-[#f2f2f2]">
    <HeroComponent
      class="relative flex flex-col justify-center items-center text-center before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10"
      large="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/desktop-home-page_drdhqe.jpg"
      medium="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/tablet-home-page_xfrd3l.jpg"
      small="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720210549/upsticks%20diredtory/mobile-home-page_v2r3y7.jpg"
    >
      <figcaption
        class="absolute z-10 top-1/2 transform translate-y-[-50%] left-2 right-2"
      >
        <h1 class="text-3xl font-bold text-white">Welcome back {{ loggedInUser.business.name }}</h1>        
      </figcaption>
    </HeroComponent>

    <section class="md:container mx-auto py-16 px-4 flex flex-col">
      <div class="flex justify-between">
        <CmpHeading h="3" class="text-3xl mt-8 block text-center">{{ loggedInUser.business.name }} Branches</CmpHeading>
        <NuxtLink class="mt-8 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none" to="/account/branch/add">Add another branch</NuxtLink>    
      </div>
      <div class="flex justify-center flex-wrap mt-8">              
        <CardComponent v-for="branch in branches" :key="branch.id">
          <IconsEstateAgent/>
          <h3 class="text-gray-800 text-xl font-semibold mb-3 mt-3">{{ branch.name }}</h3>      
          <NuxtLink class="flex items-center font-bold mt-3 text-[#2B5773] hover:text-[#E2883C] transition-all" to="/estate-agent">
            Edit branch <IconsRightArrow class="inline-block ml-3 pt-1"/>
          </NuxtLink>
        </CardComponent>
      </div>      
    </section>
  </div>
</template>
