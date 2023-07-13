import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ContactItem, DeleteBtn } from './Сontact.styled';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <ContactItem id={id}>
    <p>{name}</p>
    <div>
      <p>{number}</p>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        <RiDeleteBin6Line />
      </DeleteBtn>
    </div>
  </ContactItem>
);

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
