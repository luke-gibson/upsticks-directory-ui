export default defineNuxtRouteMiddleware(async (context) => {
  const client = useSupabaseClient();
  const { error } = await client.auth.getUser();
  if (error) {
    return navigateTo('/login');
  }
});