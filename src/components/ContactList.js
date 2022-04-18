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
