<script lang="ts" setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

const signOut = async () => {
  await client.auth.signOut();
  navigateTo('/');
};

definePageMeta({
  middleware: ['auth']
});
</script>

<template>
    <CmpSpacer>
        <CmpHeading h="3">Account</CmpHeading>

        <button @click="signOut">Sign out</button>

        <p>logged in as {{ user.email }}</p>

        <pre>{{ user }}</pre>
    </CmpSpacer>
</template>