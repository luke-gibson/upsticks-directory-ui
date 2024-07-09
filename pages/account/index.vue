<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
});

const client = useSupabaseClient();

const signOut = async () => {
  await client.auth.signOut();
  navigateTo('/');
};

const loggedInUser = await useLoggedInUser();

// get branches for this business
const { data: branches } = await client
  .from('branch')
  .select(`*`)
  .eq('business_id', loggedInUser.business.id);

</script>

<template>
    <CmpSpacer>
        <CmpHeading h="3">Account</CmpHeading>

        <button @click="signOut">Sign out</button>

        <CmpHeading h="3">Branches</CmpHeading>
        <NuxtLink to="/account/branch/add">Add another branch</NuxtLink>
        <ul>
          <li v-for="branch in branches" :key="branch.id">
              {{ branch.name }}
          </li>
        </ul>

        <p>Logged in user:</p>

        <pre>{{ loggedInUser }}</pre>
    </CmpSpacer>
</template>