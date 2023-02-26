import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import { getFilteredContacts, getAllContact } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

import styles from './phonebook.module.scss'

import ContactList from '../ContactList/ContactList';
import ContactFilter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

const Phonebook = () => {

    const filteredContacts = useSelector(getFilteredContacts);
    const allContact = useSelector(getAllContact);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const isDublicate = (name) => {
      const normalized = name.toLowerCase();
      const result  = allContact.find(({ name }) => {
        return name.toLowerCase() === normalized;
      });
      return Boolean(result );
    }

    const handleAddContact = ({ name, number }) => {
      if (isDublicate(name)) {
        alert(`${name} is already in contacts`);
        return false;
      }
      const action = addContact({ name, number});
      dispatch(action);
    };

    const handleDeleteBook= (id) => {
      const action = deleteContact(id);
      dispatch(action);
  };

  const handleFilter = ({ target }) => {
    dispatch (setFilter(target.value))
  };

    const isContacts = Boolean(filteredContacts.length)

    return (
      <div>
        <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
        <h2>Contact</h2>
        <ContactFilter value={filter} handleChange={handleFilter} />
        {isContacts &&<ContactList removeContact={handleDeleteBook} items={filteredContacts} />}
        {!isContacts && <p>No contacts in list</p>}
        </div>
      </div>
    );
}
export default Phonebook;
