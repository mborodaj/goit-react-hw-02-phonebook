import React from 'react';

const ContactForm = ({}) => {
  return (
    <form>
      <label for="userName">Name</label>
      <input id="userName" type="text"></input>

      <label for="phoneNumber">Phone number</label>
      <input id="phoneNumber" type="text"></input>

      <button>Add contact</button>
    </form>
  );
};

export default ContactForm;
