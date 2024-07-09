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

const add = async () => {
  const { data, error } = await client.from('branch').insert([
    {
      name: name.value,
      business_id: loggedInUser.business.id,
      location: 'POINT(-73.946823 40.807416)',
    }
  ]);

  if (!error) {
    navigateTo('/account');
  }

  uiError.value = error;
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
        </div>
    </div>
</template>