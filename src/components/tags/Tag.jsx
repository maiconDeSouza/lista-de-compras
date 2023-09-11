import { Apple, Sandwich } from 'lucide-react'
import styles from './Tag.module.css'
const categorias = [
    {
        texto:'Padaria',
        componente: <Sandwich />,
        backgroundColor: '#BB9F3A',
        color: '#211E12'

    },
    {
        texto:'Fruta',
        componente: <Apple />,
        backgroundColor: '#DB5BBF',
        color: '#251622'

    }
]

export function Tag({texto}){
    const tag = categorias.find(categoria => categoria.texto === texto)
    const Componente = tag.componente
    return (
        <span style={{backgroundColor: tag.backgroundColor, opacity: '0.5', color: tag.color}} className={styles.tag}>
            <Componente size={16} /> 
            {tag.texto}
        </span>
    )
}