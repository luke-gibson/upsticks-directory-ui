export const useContactsStore = defineStore('ContactsStore', () => {
  const contacts = ref([]);

  const add = (branch) => {
    if (!contacts.value.some(contact => contact.id === branch.id)) {
      contacts.value.push(branch);
    }
  };

  const remove = (id) => {
    contacts.value = contacts.value.filter(contact => contact.id !== id);
  };

  return {
    contacts,
    add,
    remove
  };
});