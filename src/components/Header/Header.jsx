import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <div className="container">
                <h1 className="heading1">Lista de Compras</h1>
            </div>
        </header>
    )
}