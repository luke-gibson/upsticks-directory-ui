export const useContactsStore = defineStore('ContactsStore', () => {
    const contacts = ref([]);

    const add = (branch) => {
        contacts.value.push(branch);
    };

    return {
        contacts,
        add
    };

});