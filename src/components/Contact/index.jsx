import styles from './contact.module.scss'
import { MdDeleteForever } from 'react-icons/md';

export function Contact(props) {
    return(
        <div className={styles.container}>
            <div>
                <img src={props.contactData.avatar} alt={props.contactData.name} />
                <div className={styles.details}>
                    <strong>{props.contactData.name}</strong>
                    <span>{props.contactData.phone}</span>
                </div>
            </div>
            <button onClick={() => props.deleteContact(props.contactData.id)} className={styles.delete}>
                <MdDeleteForever size={20} />
            </button>
        </div>
    )
}