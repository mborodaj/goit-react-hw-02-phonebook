import React from 'react';

const ContactList = ({ contacts }) => {
  contacts.map(item => {
    console.log(item.name);
    return item.name;
  });
  return (
    <>
      <form>
        <label for="findContact">Find contact</label>
        <input id="findContact" type="text"></input>
      </form>
      <ul></ul>
    </>
  );
};

export default ContactList;
