import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import styles from './Projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('src/assets/project.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error loading project data:', error));
    }, []);

    console.log(projects)


    return (
        <div className={styles.projects}>
            {projects.map((proj, index) => (
                <Card key={index} {...proj} />
            ))}
        </div>
    )
}

export default Projects;