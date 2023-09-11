import { Plus } from "lucide-react";
import styles from './ButtonAdd.module.css'
export function ButtonAdd(){
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <Plus size={24} color="white"/>
            </button>
        </div>
    )
}