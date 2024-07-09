<script setup lang="ts">
import { useContactsStore } from "~/stores/ContactsStores";

// POC
// todo - move this out of the component
const route = useRoute();
const router = useRouter();
const contactsStore = useContactsStore();
const client = useSupabaseClient();
const formattedQuery = ref(route.query.q);

const { data: postcode } = await useFetch(
  `https://api.postcodes.io/postcodes/${route.query.q}`,
  {
    transform: (response) => {
      return {
        longitude: response.result.longitude,
        latitude: response.result.latitude,
      };
    },
  }
);

const { data: businessTypes } = await client.from("business_type").select("*");
const businessType = ref(route.query.type ?? businessTypes[0].id);
const distanceKm = ref(route.query.distance ?? 15);

// todo where clause for business type
const { data: branches, status } = useAsyncData(
  "branches",
  async () => {
    const { data } = await client
      .rpc("nearby_branches", {
        long: postcode.value?.longitude,
        lat: postcode.value?.latitude,
      })
      .lt("dist_meters", distanceKm.value * 1000)
      .eq("business_type_id", businessType.value);
    return data;
  },
  { watch: [businessType, distanceKm] }
);

watch([businessType, distanceKm], () => {
  router.replace({
    path: route.path,
    query: {
      ...route.query,
      type: businessType.value,
      distance: distanceKm.value,
    },
  });
});
</script>

<template>
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
        <CmpHeading h="1" class="text-white">
          Search Results for {{ formattedQuery }}
        </CmpHeading>
      </figcaption>
    </HeroComponent>
    <!-- <section>
      <CmpHeading h="3">Searched for: {{ formattedQuery }}</CmpHeading>
      <p>Which is: {{ postcode }}</p>
    </section> -->
    <section class="mx-auto py-8 px-4 flex flex-col bg-[#f2f2f2] min-h-[50vh]">
      <div class="md:container mx-auto flex items-top mb-8">
        <div class="w-1/4 mr-16">
          <CmpHeading h="3" class="block mb-2">Select by business type</CmpHeading>

          <select
            v-model="businessType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option
              v-for="optionType in businessTypes"
              :key="optionType.id"
              :value="optionType.id"
            >
              {{ optionType.name }}
            </option>
          </select>
        </div>
        <div class="w-1/4 flex flex-col">
          <CmpHeading h="3" class="w-full mb-2">Search radius</CmpHeading>
          <div class="flex">
            <input v-model="distanceKm" type="range" min="1" max="50" class="mr-5" />
            {{ distanceKm }} (kms)
          </div>
        </div>
      </div>
      <div class="md:container mx-auto flex flex-wrap items-start relative">
        <div class="w-full md:w-2/3-minus-2.5rem">
          <template v-if="status === 'pending'"> loading </template>
          <template v-else-if="branches.length > 0">
            <ResultComponent v-for="branch in branches" :key="branch.id">
              <div class="h-full max-w-80 rounded-l-lg">
                <nuxt-img
                  class="rounded-l-lg object-cover"
                  src="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720559105/placeholder_hf9t8s.jpg"
                  alt="placeholder"
                />
              </div>
              <CmpSpacer class="py-4 px-6">
                <CmpHeading h="4">
                  {{ branch.business_name }} | {{ branch.name }}
                </CmpHeading>
                <p>
                  {{ (branch.dist_meters / 1000).toFixed(2) }}km from
                  {{ formattedQuery }}
                </p>
                <p class="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae augue
                  sit amet lacus viverra rutrum. Sed at vulputate urna. Donec ex dui,
                  ornare vel ante nec.
                </p>
                <div class="flex">
                  <button
                    @click="contactsStore.add(branch)"
                    class="mt-8 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none mr-6"
                  >
                    Add to group
                  </button>
                  <button
                    class="mt-8 bg-[#E2883C] hover:bg-[#be7335] text-[#2B5773] text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none"
                  >
                    More info
                  </button>
                </div>
              </CmpSpacer>
            </ResultComponent>
          </template>
          <template v-else> no results </template>
        </div>

        <aside
          class="bg-white border rounded-lg shadow md:ml-10 p-8 w-full md:w-1/3 md:sticky top-0"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Group Contacts
          </h5>
          <p>
            Add Estate Agents to your group contact and email them together with your
            requests.
          </p>
          <pre>
            {{ contactsStore.contacts.map((c) => `${c.business_name} | ${c.name}`) }}
          </pre>
        </aside>
      </div>
    </section>
  </div>
</template>
