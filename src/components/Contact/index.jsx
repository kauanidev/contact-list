import styles from './contact.module.scss'
import { MdDeleteForever } from 'react-icons/md';
import placeholderImg from '../../assets/placeholder_user.png';
import { useContacts } from '../../hooks/useContacts';

export function Contact(props) {
    const { deleteContact } = useContacts();

    return(
        <div className={styles.container}>
            <div>
                <img src={props.contactData.avatar ?? placeholderImg} alt={props.contactData.name} />
                <div className={styles.details}>
                    <strong>{props.contactData.name}</strong>
                    <span>{props.contactData.phone}</span>
                </div>
            </div>
            <button onClick={() => deleteContact(props.contactData.id)} className={styles.delete}>
                <MdDeleteForever size={20} />
            </button>
        </div>
    )
}