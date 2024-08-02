<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
});

const client = useSupabaseClient();
const uiError = ref('');

const loggedInUser = await useLoggedInUser();

// form
const lat = ref('');
const lon = ref('');
const name = ref('');
const postcode = ref('');

const add = async () => {
  const { data, error } = await client.from('branch').insert([
    {
      name: name.value,
      business_id: loggedInUser.business.id,
      location: `POINT(${lon.value} ${lat.value})`,
    }
  ]);

  if (!error) {
    navigateTo('/account');
  }

  uiError.value = error;
};

const getLatLon = async () => {
  const { result: postcodeData } = await $fetch(`https://api.postcodes.io/postcodes/${postcode.value}`);

  lat.value = postcodeData.latitude;
  lon.value = postcodeData.longitude;
};
</script>

<template>
    <div class="bg-[#f2f2f2]">
        <div v-if="uiError">
            {{ uiError }}
        </div>
        <div>
          <HeroComponent
            class="relative flex flex-col justify-center items-center text-center before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10"
            large="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/desktop-home-page_drdhqe.jpg"
            medium="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/tablet-home-page_xfrd3l.jpg"
            small="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720210549/upsticks%20diredtory/mobile-home-page_v2r3y7.jpg"
          >
            <figcaption
              class="absolute z-10 top-1/2 transform translate-y-[-50%] left-2 right-2"
            >
              <h1 class="text-3xl font-bold text-white">Create more {{ loggedInUser.business.name }} branches</h1>        
            </figcaption>
          </HeroComponent>
          <section class=" mx-auto py-16 px-4 flex flex-col bg-[#f2f2f2] min-h-[50vh]">
            <form class="md:container mx-auto">
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Branch Location
                  </label>
                  <div class="relative">
                    <input    
                      v-model="name"            
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text" 
                      placeholder="e.g: Portsmouth"
                      >
                  </div>
                </div>

                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Postcode
                  </label>
                  <div class="relative">
                    <input                          
                      v-model="postcode"            
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text" 
                      placeholder="Postcode"
                      >
                  </div>
                </div>

                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <button 
                    class="mt-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none" 
                    @click.prevent="getLatLon">Get Lon and Lat</button>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Latitude
                  </label>
                  <div class="relative">
                    <input        
                      v-model="lat"         
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text" 
                      placeholder="latitude"
                      
                      >
                  </div>
                </div>

                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Longitude
                  </label>
                  <div class="relative">
                    <input                        
                      v-model="lon"             
                      class="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text" 
                      placeholder="longitude"
                      
                      >
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <button 
                  class="mt-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none" 
                  @click="add">Add Branch</button>
                </div>               
              </div>
            </form>
          </section>
        </div>
    </div>
</template>