import React from "react";
import ButtonAddContact from "../../../../../common/design-system/Button/ButtonAddContact.jsx";

const ContactSearch = () => {
  return (
    <div className="flex gap-8">
      <form>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Contact"
            className="input input-bordered w-64 "
          />
        </div>
      </form>
      <ButtonAddContact />
    </div>
  );
};

export default ContactSearch;
