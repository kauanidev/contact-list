import { useContacts } from "../../hooks/useContacts";
import { Input } from "../Input";

export function Search() {
    const { search, onChangeSearch } = useContacts();

    return (
        <Input onChange={onChangeSearch} value={search} placeholder='Buscar contato...'/>
    )
}