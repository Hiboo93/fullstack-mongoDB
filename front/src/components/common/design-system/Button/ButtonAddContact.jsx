import React, { useState } from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { MdEmail, MdAddAPhoto } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useContactsContext } from "../../../../context/contact/ContactsContext.jsx";

const ButtonAddContact = () => {
  const { setNewContact, handleAdd, contacts } = useContactsContext();

  const [isCreated, setIsCreated] = useState(false);

  const handleToast = (icCreated) => {
    if (!isCreated) {
      setIsCreated(true);
    } else {
      setIsCreated(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    setNewContact(data);
    if (data.firstName !== "") {
      handleToast();
    }
    e.currentTarget.reset();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_add").showModal()}
      >
        Add Contact
      </button>
      <dialog id="my_modal_add" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Add Contact</h3>
          <p className="py-4">Click the button below to close</p>
          <form action="" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <FaUser />
              </svg>
              <input
                type="text"
                name="lastName"
                className="grow"
                placeholder="Last name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <FaUser />
              </svg>
              <input
                type="text"
                name="firstName"
                className="grow"
                placeholder="First name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <MdEmail />
              </svg>
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <FaMapMarkerAlt />
              </svg>
              <input
                type="text"
                name="address"
                className="grow"
                placeholder="Address"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <FaPhone />
              </svg>
              <input
                type="tel"
                name="phone"
                className="grow"
                placeholder="Phone"
                required
              />
            </label>

            <label
              htmlFor="file"
              className="input input-bordered flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <MdAddAPhoto />
              </svg>
              <input
                type="file"
                name="file"
                className="grow"
                placeholder="Choisir photo"
                id="file"
              />
            </label>

            <button className="btn btn-secondary" type="submit">
              Valider
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>

          {isCreated && (
            <div className="toast toast-top toast-start relative">
              <div className="alert alert-success">
                <span>Created contact successfully !</span>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};

export default ButtonAddContact;
