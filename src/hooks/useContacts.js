import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

export function useContacts() {
    const context = useContext(ContactsContext);
    return context
}