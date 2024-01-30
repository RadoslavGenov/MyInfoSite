import { SectionProps } from '../../types'
import styles from './About.module.css'

const skills = [
  'React JS/TS',
  'Typesript',
  'Webpack',
  'MongoDB',
  'PostgreSQL',
  'Kubernetes',
  'Javascript',
  'Express',
  'Nest JS/TS',
  'Node JS/TS',
  'React Native',
  'Linux',
  'System Administration'
]

const About: React.FC<SectionProps> = ({ refs }) => {
  return (
    <div ref={(el) => (refs.current[1] = el)} className={styles.container}>
      <div className={styles.title}>About</div>
      <div className={styles.description}>
        As a highly motivated and detail-oriented Javascript developer, I bring
        a wealth of expertise in crafting robust and scalable applications. With
        a profound love for everything related to React and Node, I have honed
        my skills to deliver cutting edge solutions that seemlessly integrate
        frontend and backend technologies. My commitment to staying abreast of
        the latest industry trends and best practices reflects my ambition to
        contribute meani ngfully to the ever-evolving world of web development.
        Eager to tackle complex challenges, I thrive in collaborative
        environments and am driven by a relentless pursuit of excellence. My
        forward-thinking approach and dedication make me an asset to any team,
        and I am excited about the limitless possibilities for growth in my
        future endeavors.
      </div>

      <div className={styles.title}>Skills and Technologies</div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div key={skill} className={styles.item}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
