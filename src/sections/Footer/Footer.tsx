import styles from './Footer.module.css'
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined
} from '@ant-design/icons'

const linkedIn = 'https://www.linkedin.com/in/radoslav-genov-009a57b6/'
const github = 'https://github.com/RadoslavGenov'

const Footer = () => {
  const handleClickIcon = (link: string) => () => {
    window.open(link, '_blank')
  }

  const handleClickMail = () => {
    window.open('mailto:radoslavgenov@icloud.com')
  }

  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.copyRight}>
        <div className={styles.text}> &copy; 2024 Rado</div>
        <div>
          <GithubOutlined
            className={styles.icon}
            onClick={handleClickIcon(github)}
          />
          <LinkedinOutlined
            className={styles.icon}
            onClick={handleClickIcon(linkedIn)}
          />
          <MailOutlined className={styles.icon} onClick={handleClickMail} />
        </div>
      </div>
    </div>
  )
}

export default Footer
