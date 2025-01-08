import React, { useEffect, useRef, useState } from "react";
import Card from "../CardProfil/Card.jsx";
import CardEdit from "../CardProfil/CardEdit.jsx";

const ModalProfil = ({
  firstName,
  lastName,
  dialogId,
  address,
  phone,
  email,
  file,
}) => {
  const dialogRef = useRef(null);

  const [onEdit, setOnEdit] = useState(false);

  const handleEditMode = () => {
    setOnEdit(true);
  };

  const handleEditClose = () => {
    setOnEdit(false);
  };
  // useEffect(() => {
  //   console.log(firstName);

  // }, [])

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   // On va stocker le fichier tel quel
  //   // Ou alors on pourrait stocker un "URL.createObjectURL(file)" pour prévisualiser
  //   setNewContact({
  //     ...newContact,
  //     file: file,
  //   });
  // };

  // const openModal = () => {
  //   document.getElementById(dialogId).showModal();
  // };

  // const closeModal = () => {
  //   document.getElementById(dialogId).close();
  // };

  return (
    <div>
      <button
        className="btn btn-ghost"
        onClick={() => document.getElementById(dialogId).showModal()}
      >
        {firstName} {lastName}
      </button>
      <dialog ref={dialogRef} id={dialogId} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Name : {firstName} {lastName}
          </h3>
          <br />
          {onEdit ? (
            <CardEdit
              handleEditClose={handleEditClose}
              address={address}
              phone={phone}
              email={email}
              file={file}
              handleEditMode={handleEditMode}
            />
          ) : (
            <Card
              address={address}
              phone={phone}
              email={email}
              file={file}
              handleEditMode={handleEditMode}
            />
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalProfil;
