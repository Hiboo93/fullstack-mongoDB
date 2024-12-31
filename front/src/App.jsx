import { useState } from "react";
import Header from "./components/common/layout/header/Header.jsx";
import ContactsList from "./components/features/contact/list-contacts/ui/ContactsList/ContactsList.jsx";
import ContactSearch from "./components/features/contact/search-contacts/ui/ContactSearch/ContactSearch.jsx";


export default function App() {
  const [ contacts, setContacts ] = useState();

  return (
    <>
      < div className="container mx-auto h-screen py-8">
        <Header />
        <ContactSearch />
        <ContactsList />
      </ div >
    </>
  )
}