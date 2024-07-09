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
    <div>
        <div v-if="uiError">
            {{ uiError }}
        </div>
        <div>
            <CmpHeading h="2">Add Branch</CmpHeading>
            name: <input v-model="name" type="text" >
            lat: <input v-model="lat" type="text" >
            lon: <input v-model="lon" type="text" >
            <button @click="add">add</button>


            <CmpHeading h="3">Temporary get lon lat from postcode</CmpHeading>
            <input v-model="postcode" type="text">
            <button @click="getLatLon">get lat lon</button>
        </div>
    </div>
</template>