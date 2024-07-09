<script setup lang="ts">
import { useContactsStore } from '~/stores/ContactsStores';

// POC
// todo - move this out of the component
const route = useRoute();
const router = useRouter();
const contactsStore = useContactsStore();
const client = useSupabaseClient();
const formattedQuery = ref(route.query.q);

const { data: postcode } = await useFetch(`https://api.postcodes.io/postcodes/${route.query.q}`, {
  transform: (response) => {
    return {
      longitude: response.result.longitude,
      latitude: response.result.latitude,
    };
  },
});

const { data: businessTypes } = await client.from('business_type').select('*');
const businessType = ref(route.query.type ?? businessTypes[0].id);
const distanceKm = ref(route.query.distance ?? 15);

// todo where clause for business type
const { data: branches, status } = useAsyncData(
  'branches',
  async () => {
    const { data } = await client.rpc('nearby_branches', {
      long: postcode.value?.longitude,
      lat: postcode.value?.latitude,
    })
    .lt('dist_meters', distanceKm.value * 1000)
    .eq('business_type_id', businessType.value);
    return data;
  },
  { watch: [businessType, distanceKm] }
);


watch([businessType, distanceKm], () => {
  router.replace({ path: route.path, query: {
    ...route.query,
    type: businessType.value,
    distance: distanceKm.value
  } });
});


</script>

<template>
  <div>
    <HeroComponent
                   class="relative flex flex-col justify-center items-center text-center before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10"
                   large="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/desktop-home-page_drdhqe.jpg"
                   medium="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720099452/upsticks%20diredtory/tablet-home-page_xfrd3l.jpg"
                   small="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720210549/upsticks%20diredtory/mobile-home-page_v2r3y7.jpg">
      <figcaption class="absolute z-10 top-1/2 transform translate-y-[-50%] left-2 right-2">
        <CmpHeading h="1" class="text-white">
          Search Results for {{ formattedQuery }}
        </CmpHeading>
      </figcaption>
    </HeroComponent>
    <section class="mx-auto py-16 px-4 flex flex-col bg-[#f2f2f2] min-h-[50vh]">
      <div class="md:container mx-auto flex flex-wrap items-start relative">
        <div class="w-full md:w-2/3-minus-2.5rem">
          <ResultComponent>
            <!-- API RESULTS -->
            <CmpSpacer>
              <CmpHeading h="3">Searched for: {{ formattedQuery }}</CmpHeading>
              <p>
                Which is:
                {{ postcode }}
              </p>

              <CmpHeading h="3">Search radius</CmpHeading>
              <input v-model="distanceKm" type="range" min="1" max="50">{{ distanceKm }} (kms)

              <CmpHeading h="3">Filter by business type</CmpHeading>
              <select v-model="businessType">
                <option v-for="optionType in businessTypes" :key="optionType.id" :value="optionType.id">
                  {{ optionType.name }}
                </option>
              </select>

              <CmpHeading h="3">Results</CmpHeading>
              <template v-if="status === 'pending'">
                loading
              </template>
              <template v-else-if="branches.length > 0">
                <ul v-for="branch in branches" :key="branch.id">
                  <li>
                    <CmpHeading h="4">{{ branch.business_name }} | {{ branch.name }}</CmpHeading>
                    <p>{{ (branch.dist_meters / 1000).toFixed(2) }}km from {{ formattedQuery }}</p>
                    <button @click="contactsStore.add(branch)">Add to group</button>
                  </li>
                </ul>
              </template>
              <template v-else>
                no results
              </template>

            </CmpSpacer>
          </ResultComponent>
          <ResultComponent>
            <nuxt-img
                      class="object-cover w-full rounded-t-lg md:w-56 md:rounded-none md:rounded-s-lg md:min-w-44"
                      src="https://www.archboldandedwards.co.uk/templates/ea-r7/images/logo.png"
                      alt="Estate Agent" />
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
                        class="max-sm:mt-8 sm:ml-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
                Email Agent
              </NuxtLink>
              <NuxtLink
                        to="/search-results"
                        class="mt-2 max-sm:mt-8 sm:ml-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
                Phone Agent
              </NuxtLink>
              <NuxtLink
                        to="/search-results"
                        class="mt-2 max-sm:mt-8 sm:ml-4 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
                Add to group contact
              </NuxtLink>
            </div>
          </ResultComponent>
        </div>
        <aside class="bg-white border rounded-lg shadow md:ml-10 p-8 w-full md:w-1/3 md:sticky top-0">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Group Contacts</h5>
          <p>Add Estate Agents to your group contact and email them together with your requests.</p>


          <pre>
            {{ contactsStore.contacts.map((c) => `${c.business_name} | ${c.name}`) }}
          </pre>
        </aside>
      </div>
    </section>
  </div>
</template>
