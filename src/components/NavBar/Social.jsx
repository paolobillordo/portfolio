import styles from './Social.module.css'


function Social() {
    return (
        <div className={styles.social}>
            <a href='https://www.instagram.com/paolobill86/' target="_blank" rel="noopener noreferrer">
                <img src='src\assets\icons8-instagram-96.png' alt="Icono de instagram" width='40px' />
            </a>
            <a href='https://www.linkedin.com/in/paolobillordo/' target="_blank" rel="noopener noreferrer">
                <img src='src\assets\icons8-linkedin-96.png' alt="Icono de linkedin" width='40px' />
            </a>
            <a href='https://github.com/paolobillordo' target="_blank" rel="noopener noreferrer">
                <img src='src\assets\icons8-github-96.png' alt="Icono de github" width='40px' />
            </a>
        </div>
    )
}

export default Social;