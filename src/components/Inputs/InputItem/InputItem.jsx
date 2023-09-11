import styles from './InputItem.module.css'
export function InputItem(){
    return (
        <div className={styles.container}>
            <label htmlFor="item">Item</label>
            <input type="text" name="item" id="item" />
        </div>
    )
}