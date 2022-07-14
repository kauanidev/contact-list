import { AddContact } from "./components/AddContact"
import { List } from "./components/List"
import { Search } from "./components/Search";
import { ContactsContextProvider } from "./contexts/ContactsContext";

function App() {

  return (
    <ContactsContextProvider>
      <main>
        <AddContact />
        <Search />
        <List />
      </main>
    </ContactsContextProvider>
  )
}

export default App