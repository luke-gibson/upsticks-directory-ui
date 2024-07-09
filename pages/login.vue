<script setup lang="ts">
const client = useSupabaseClient();
const email = ref('');
const password = ref('');
const uiError = ref('');

const login = async () => {
  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) uiError.value = error;

  navigateTo('/account');
};

</script>

<template>
  <div>
    <HeroComponent
                   class="relative flex flex-col justify-center items-center text-center before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10"
                   large="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/desktop-home-page_drdhqe.jpg"
                   medium="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/tablet-home-page_xfrd3l.jpg"
                   small="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720210549/upsticks%20diredtory/mobile-home-page_v2r3y7.jpg">
      <figcaption class="absolute z-10 top-1/2 transform translate-y-[-50%] left-2 right-2">
        <h1 class="text-3xl font-bold text-white">Business Login</h1>
      </figcaption>
    </HeroComponent>

    <div class="border-4">

      <CmpSpacer>
        <div v-if="uiError">
          {{ uiError }}
        </div>
        <CmpHeading h="3">Login</CmpHeading>
        email: <input v-model="email" type="text">
        password: <input v-model="password" type="text">
        <button @click="login">login</button>
      </CmpSpacer>
    </div>

    <section class="mx-auto bg-[#f2f2f2] h-[50vh]">
      <form class="w-full max-w-sm mx-auto py-20">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
id="inline-full-name"
                   class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                   type="text" value="Jane Doe">
          </div>
        </div>
        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
id="inline-password"
                   class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                   type="password" placeholder="******************">
          </div>
        </div>
        <div class="text-sm text-center ml-2 mb-6">
          <NuxtLink class="text-[#2B5773] hover:text-[#37759c]" to="/">Forgotten password?</NuxtLink>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3" />
          <div class="md:w-2/3">
            <button
class="transition-colors bg-[#E2883C] hover:bg-[#be7335] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
