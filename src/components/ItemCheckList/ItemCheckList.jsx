import { Sandwich } from 'lucide-react'
import { Tag } from '../tags/Tag'
import styles from './ItemCheckList.module.css'
export function ItemCheckList(){
    return(
        <div className={styles.item}>
            <div className={styles.check}>
                <input type="checkbox" name="" id="" />
                
                <div>
                    <span>name</span>
                    <span>quantidade</span>
                </div>
            </div>
            <div className={styles.tag}>
                <Tag  texto='Padaria' />
            </div>
        </div>
    )
}