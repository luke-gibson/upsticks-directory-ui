export const useLoggedInUser = async () => {
  const client = useSupabaseClient();
  const { data } = await client.auth.getUser();

  const { data: profile } = await client
    .from('profile')
    .select(`*, business(name)`)
    .eq('id', data.user.id)
    .single();

  return {
    user: data.user,
    business: {
      id: profile?.business_id,
      name: profile?.business?.name
    },
    profile
  };
};