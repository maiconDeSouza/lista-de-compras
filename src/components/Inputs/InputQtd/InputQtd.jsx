import styles from './InputQtd.module.css'
export function InputQtd(){
    return (
        <div className={styles.container}>
            <label htmlFor="quantidade">Quantidade</label>
            <div className={styles.divinput}>
                <input type="number" name="quantidade" id="quantidade" />
                <select>
                    <option value="Un.">Un.</option>
                    <option value="L">L</option>
                    <option value="Kg">Kg</option>
                </select>
            </div>
        </div>
    )
}