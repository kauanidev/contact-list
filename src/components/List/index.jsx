import { Contact } from '../Contact'
import styles from './list.module.scss'
import { FaSadTear } from "react-icons/fa"

export function List({ contacts , search, deleteContact }) {
    return(
        <section className={styles.container}>
            {contacts.map((item)=>{
                return(
                    <Contact key={item.id} contactData={item} deleteContact={deleteContact}/>
                )
            })}
            {contacts.length <= 0 && (
                <div className={styles.empty}>
                    <FaSadTear size={50} />
                    <div>
                        {search ? (
                            <>
                                <strong>Nenhum contato encontrado...</strong>
                                <p>Busque por outro ou adicione um novo</p>
                            </>
                        ) : (
                            <>
                                <strong>Sua lista está vazia...</strong>
                                <p>Adicione seus contatos para começar a interagir</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}