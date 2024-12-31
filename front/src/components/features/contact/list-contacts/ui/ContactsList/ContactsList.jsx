import React from "react";

const ContactsList = () => {
  return (
    <div className="h-[700px] w-[500px] overflow-x-auto mt-5">
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ant-Man</td>
          </tr>
          <tr>
            <td>Aquaman</td>
          </tr>
          <tr>
            <td>Asterix</td>
          </tr>
          <tr>
            <td>The Atom</td>
          </tr>
          <tr>
            <td>The Avengers</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
