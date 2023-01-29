import { Contact } from 'components/Contact/Contact';
import { List } from './Contacts.styled';

export const ContactList = ({ items }) => {
  return (
    <>
      <h2> Contacts</h2>
      <List>
        {items.map((item, id) => (
          <li key={id}>
            <Contact contact={item} />
          </li>
        ))}
      </List>
    </>
  );
};
