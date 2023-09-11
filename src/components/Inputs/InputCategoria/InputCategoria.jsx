import styles from './InputCategoria.module.css'
const categorias = ['Padaria', 'Legume', 'Carne', 'Fruta', 'Bebida']

  
export function InputCategoria(){
    
    return (
        <div className={styles.container}>
            <label htmlFor="categoria">Categoria</label>
            <select>
                {
                categorias.map(categoria => {
                    return(
                        <option value={categoria} key={categoria}>
                            {categoria}
                        </option>
                    )
                })
                }
            </select>
        </div>
    )
}