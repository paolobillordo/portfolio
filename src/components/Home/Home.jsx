import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.developer}>
                <h1>Full Stack Web Developer</h1>
                <p>Desarrollador de aplicaciones web. Front-end y Back-end para mas placer</p>
                <div className={styles.buttons}>
                <a href="mailto:paolobillordo@gmail.com">
                    <button className={styles.buttons}>Envíame un correo</button>
                </a>
                <a href='src\assets\CV_PAOLO_BILLORDO_es.pdf' download='CV_PAOLO_BILLORDO_es.pdf'>
                    <button className={styles.buttons}>Descarga mi CV</button>
                </a>

                </div>
            </section>
            <img src='src\assets\pollito_developer.gif' alt="pollito developer" />
            
        </div>

    )
}

export default Home;