import React, { createContext, useContext, useEffect, useState } from 'react'
import { tableauContacts } from '../../components/features/contact/list-contacts/api/ constants.js';

const contactsContext = createContext({
  contacts : [{}],
  setContacts : () => {},
  newContacts : [{}],
  setNewContacts : () => {},
  newArrayContacts : [{}],
  handleAdd : () => {},

});

export const ContactsContextProvider = ({children}) => {
  const [contacts, setContacts] = useState(tableauContacts);
 
  const date = new Date().getTime()

  const [ newContact, setNewContact ] = useState({
    index : date,
    lastName : "",
    firstName : "",
    email : "",
    address : "",
    phone : "",
    file : "",
  })

  const handleAdd = () => { 
    const newDataContact = [...contacts, newContact]
    setContacts(newDataContact)
  }

  useEffect(() => {
    if (newContact.phone !== "") {
      handleAdd();
    }
  }, [newContact])
  
  return (
    <contactsContext.Provider value={{contacts, setContacts, newContact, setNewContact, handleAdd}}>
      {children}
    </contactsContext.Provider>
  )
}

export const useContactsContext = () => useContext(contactsContext);