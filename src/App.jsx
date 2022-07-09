import { useEffect, useState } from "react"
import { AddContact } from "./components/AddContact"
import { Input } from "./components/Input";
import { List } from "./components/List"

function App() {
  const [contacts, setContacts] = useState([]);
  const [search , setSearch] = useState("");

  function setContactsAndSave(newContacts) {
    setContacts(newContacts);
    localStorage.setItem('contacts:saved', JSON.stringify(newContacts));
  }

  function loadSavedContacts() {
    const saved = localStorage.getItem('contacts:saved');
    if (saved) {
      setContacts(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedContacts();
  }, []);

  function addContact(newContact) {
    setContactsAndSave([
      ...contacts,
      newContact
    ])
  }

  function deleteContact(contactId) {
    const newContacts = contacts.filter((item) => {
      return item.id !== contactId
    });
    setContactsAndSave(newContacts);
  }

  function onChangeSearch(event) {
    setSearch(event.target.value)
  }

  const filteredContacts = contacts.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <AddContact addContact={addContact}/>
      <Input onChange={onChangeSearch} value={search} placeholder='Buscar contato...'/>
      <List contacts={filteredContacts} search={search} deleteContact={deleteContact}/>
    </main>
  )
}

export default App