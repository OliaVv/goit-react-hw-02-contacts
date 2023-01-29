import { Component } from 'react';
import { nanoid } from 'nanoid';

import { AddForm } from './AddForm/AddForm';
import { ContactList } from './Contacts/Contacts';
import { FilterContact } from './FilterContact/FilterContact';
import { Card, Title } from './App.styled';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };
  state = {
    contacts: this.props.initialContacts,
    filter: '',
  };

  addContact = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in Phonebook List`);
    }
    this.setState(prev => {
      const newContact = {
        ...contact,
        id: nanoid(),
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  contactDelete = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  filterContact() {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLocaleLowerCase();
    if (!filter) {
      return contacts;
    }
    const filterContacts = contacts.filter(({ name }) => {
      const nameContactNormalize = name.toLocaleLowerCase();
      const resultFilter = nameContactNormalize.includes(filterNormalize);
      return resultFilter;
    });
    return filterContacts;
  }

  isDuplicate = contact => {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === contact.name);
    return result;
  };

  render() {
    const contacts = this.filterContact();
    return (
      <Card>
        <div>
          <Title>Додайте контакт</Title>
          <AddForm formSubmit={this.addContact} />
        </div>
        <div>
          <Title>Ваши контакти</Title>
          <FilterContact onFilter={this.changeFilter} />
          <ContactList items={contacts} contactDelete={this.contactDelete} />
        </div>
      </Card>
    );
  }
}
