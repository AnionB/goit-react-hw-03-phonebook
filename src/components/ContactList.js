import PropTypes from 'prop-types';

export default function ContactList({ contacts, idToDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
          <button type="button" onClick={() => idToDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object),
  idToDelete: PropTypes.func,
};
