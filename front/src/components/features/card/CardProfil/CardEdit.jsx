import React, { useEffect, useState } from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { MdEmail, MdAddAPhoto } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const CardEdit = ({ handleEditClose, address, phone, email, file }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // Nettoyage quand le composant se démonte ou que file change
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profil"
            className="w-full h-full object-cover"
            style={{ width: "200px", height: "300px" }}
          />
        ) : (
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">Number : {phone}</h2>
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
            placeholder="Modifier Phone"
            required
          />
        </label>
        <p>Address : {address}</p>
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
            placeholder="Modifier Address"
          />
        </label>
        <p>Email : {email}</p>
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
            placeholder="Modifier Email"
          />
        </label>
        <div className="card-actions justify-end">
          <button onClick={handleEditClose} className="btn btn-success">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
