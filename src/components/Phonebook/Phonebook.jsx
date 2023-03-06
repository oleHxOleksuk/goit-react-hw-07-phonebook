import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from "react";

import { setFilter } from 'redux/filter/filter-slice';

import {fetchAllContact, fetchAddContact, fetchDeleteContact} from "../../redux/contacts/contacts-operation";

import { getFilteredContacts} from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

import styles from './phonebook.module.scss'

import ContactList from '../ContactList/ContactList';
import ContactFilter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

const Phonebook = () => {

    const filteredContacts = useSelector(getFilteredContacts);

    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllContact())
    }, [dispatch])

    const handleAddContact = ({ name, number }) => {
      dispatch(fetchAddContact({name, number}))
      };

    const handleDeleteBook= (id) => {
     dispatch(fetchDeleteContact(id))
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
