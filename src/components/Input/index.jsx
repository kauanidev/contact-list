import styles from './input.module.scss';

export function Input(props) {
    return (
        <input type="text" className={styles.input} {...props}/>
    )
}