/* eslint-disable react/prop-types */
import styles from './Card.module.css'

function Card(props) {
    

    return(
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={props.img} alt="Imagen del proyecto" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className={styles.tech}>
                {props.tech.map((element, index) => (
                    <img key={index} width='30px' className={styles.logo} src={element} alt="Logo de la tecnología" />
                ))}
            </div>

        </div>
    )
}

export default Card;