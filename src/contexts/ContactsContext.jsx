import { createContext, useState, useEffect } from "react";

export const ContactsContext = createContext({});

export function ContactsContextProvider({ children }) {
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
        <ContactsContext.Provider value={{ addContact, contacts, search, deleteContact, onChangeSearch, filteredContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}