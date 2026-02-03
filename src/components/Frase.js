import styles from './Frase.module.css';
import HelloWorld from "./HelloWorld"
function Frase() {
    return (
            <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>Esse é o componente do <HelloWorld /></h1>
        </div>
    )
}
export default Frase;