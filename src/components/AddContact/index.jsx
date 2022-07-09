import { Input } from '../Input'
import styles from './addcontact.module.scss'
import {MdPersonAddAlt1 , MdAddCircle , MdRemoveCircle} from 'react-icons/md'
import { useState } from 'react'

export function AddContact({ addContact }) {
    const [isShowing , setIsShowing] = useState(false)
    const [avatar , setAvatar] = useState("")
    const [name , setName] = useState("")
    const [phone , setPhone] = useState("")

    function toggleForm() {
        setIsShowing(!isShowing);
    }

    function onSubmit(event) {
        event.preventDefault()
        addContact({
            id: crypto.randomUUID(),
            name: name,
            phone: phone,
            avatar: !avatar ? null : avatar
        })
        setAvatar("")
        setName("")
        setPhone("")
    }

    function onChangeAvatar(event) {
        setAvatar(event.target.value.trim(""))
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangePhone(event) {
        setPhone(event.target.value)
    }

    return(
        <section className={styles.container}>
            <header className={styles.header}>
                <button onClick={toggleForm} className={isShowing ? styles.circle : ""} style={isShowing ? { background: '#fe6161' } : {}}>
                    {isShowing ? (
                            <MdRemoveCircle size={20}/>
                    ) : (
                        <>
                            <MdPersonAddAlt1 size={20}/>
                            Adicionar Contato
                        </>
                    )}
                </button>
                <p className={styles.credits}>
                    Feito com <span>❤</span> por <a href="https://github.com/kauanidev" target="_blank">KauDev</a>
                </p>
            </header>
            {isShowing && (
                <form onSubmit={onSubmit}className={styles.form}>
                    <Input placeholder='URL da foto' onChange={onChangeAvatar} value={avatar}/>
                    <Input placeholder='Nome completo *' required onChange={onChangeName} value={name}/>
                    <Input placeholder='Número *' required onChange={onChangePhone} value={phone}/>
                    <button className={styles.circle}><MdAddCircle size={20}/></button>
                </form>
            )}
        </section>
    )
}