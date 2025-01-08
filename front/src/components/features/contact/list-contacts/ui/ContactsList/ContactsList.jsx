import React, { useEffect, useRef } from "react";
import { tableauContacts } from "../../api/ constants";
import { useContactsContext } from "../../../../../../context/contact/ContactsContext.jsx";
import ModalProfil from "../../../../card/ModalProfil/ModalProfil.jsx";


const ContactsList = () => {
  const { contacts, newContact } = useContactsContext();
  const cardRef = useRef()

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="h-[700px] w-[500px] overflow-x-auto mt-5">
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td className="cursor-pointer">
                {/* <button className="btn btn-ghost">
                  {contact.firstName} {contact.lastName}
                </button> */}
                <ModalProfil dialogId={`my_modal_${index}`} firstName={contact.firstName} lastName={contact.lastName} address={contact.address} phone={contact.phone} email={contact.email} file={contact.file}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
