export const getAllContact = ({contacts}) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return name.toLocalLowerCase().includes(normalizedFilter);
  });
  return result;
};
