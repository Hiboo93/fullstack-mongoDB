import React, { useEffect, useState } from "react";

const Card = ({ address, phone, email, file, handleEditMode }) => {
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
            style={{width: "200px", height: "300px"}}
          />
        ) : (
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        )}
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          //src={file}
          alt="Movie"
        /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">Number : {phone}</h2>
        <p>Address : {address}</p>
        <p>Email : {email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Call</button>
          <button onClick={handleEditMode} className="btn btn-secondary">Edit</button>
          <button className="btn btn-active btn-neutral">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
