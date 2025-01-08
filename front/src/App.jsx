import { useState } from "react";
import Header from "./components/common/layout/header/Header.jsx";
import ContactsList from "./components/features/contact/list-contacts/ui/ContactsList/ContactsList.jsx";
import ContactSearch from "./components/features/contact/search-contacts/ui/ContactSearch/ContactSearch.jsx";
import { tableauContacts } from "./components/features/contact/list-contacts/api/ constants.js";
import { ContactsContextProvider } from "./context/contact/ContactsContext.jsx";

export default function App() {
  return (
    <>
      <div className="container mx-auto h-screen py-8">
        <ContactsContextProvider>
          <Header />
          <ContactSearch />
          <ContactsList />
        </ContactsContextProvider>
      </div>
    </>
  );
}
