import PropTypes from 'prop-types';

export const Contact = ({ name, number, deleteContact, contactId }) => {
  return (
    <li>
      <p>
        <span>{name}</span>
        <span>{number}</span>
      </p>

      <button type="button" onClick={() => deleteContact(contactId)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
