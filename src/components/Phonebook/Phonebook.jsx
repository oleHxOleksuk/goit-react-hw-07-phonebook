import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/actions';

import styles from './phonebook.module.scss'

import ContactList from '../ContactList/ContactList';
import ContactFilter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

const Phonebook = () => {

    const contacts = useSelector(store => store.contacts);
    const [filter, setFilter] = useState("");

    const dispatch = useDispatch();

    const isDublicate = (name) => {
      const normalized = name.toLowerCase();
      const result  = contacts.find(({ name }) => {
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

  const handleFilter = ({ target }) => setFilter(target.value);

  const getFilteredContacts = () => {
    if (!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  }
    const filterContacts = getFilteredContacts();
    const isContacts = Boolean(filterContacts.length)
    return (
      <div>
        <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
        <h2>Contact</h2>
        <ContactFilter handleChange={handleFilter} />
        {isContacts &&<ContactList removeContact={handleDeleteBook} items={filterContacts} />}
        {!isContacts && <p>No contacts in list</p>}
        </div>
      </div>
    );
}
export default Phonebook;
