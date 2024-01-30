import { SectionProps } from '../../types'
import styles from './Work.module.css'

const experience = [
  {
    workDate: 'Jan 2020 - Dec 2023',
    company: 'The OpenTag - Senior Fullstack Developer',
    description: [
      `Lead the development and implementation of complex and scalable back-office administration platform in React TS.`,
      `Involved in development of CMS system written in Node TS, which used gRPC for service definitions.`,
      `Involved in development of API Gateway which exposed backend services through Apollo GraphQL.`,
      `Collaboration with cross-functional teams to define and execute software solutions that meet business requirements.`,
      `Create and delegate technical debt tasks for teams and supervise completion of tasks.`,
      `Mentor and guide junior developers, fostering a collaborative and knowledge-sharing environment.`,
      `Conduct code reviews to ensure code quality, adherence to coding standards, and knowledge transfer within the team.`,
      `Troubleshoot and debug issues, providing workDately and effective resolutions to ensure smooth application functionality.`,
      `Stay current with industry trends, emerging technologies, and best practices to continually improve development processes.`,
      `Collaborate with product owners and stakeholders to understand requirements and contribute to feature planning and prioritization.`,
      `Drive the adoption of best practices for software development, testing, and deployment.`
    ]
  },
  {
    workDate: 'June 2018 - Jan 2020',
    company: 'Accedia - Software Consultant',
    description: [
      `Adapt to the current projects which where at hand.`,
      `Advance my knowledge in libraries and frameworks such as React JS and React Native.`,
      `Be involved in team rituals, such as daily stand ups, refinements, plannings and retrospections.`,
      `Collaborate with clients to ensure product requirements are met.`,
      `Worked on many different project and was able to maintain focus in a very dynamic environment.`,
      `Integrated myself with ease in upcoming new projects.`,
      `Learned the basics of working in a team and collaborating with other colleagues.`
    ]
  }
]

const Work: React.FC<SectionProps> = ({ refs }) => {
  return (
    <div className={styles.container} ref={(el) => (refs.current[2] = el)}>
      <div className={styles.title}>Work Experience</div>
      {experience.map((item) => (
        <div className={styles.item}>
          <div className={styles.workDate}>{item.workDate}</div>
          <div className={styles.description}>
            <div className={styles.company}>{item.company}</div>
            <div className={styles.description}>
              {item.description.map((desc) => (
                <div>- {desc}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Work
