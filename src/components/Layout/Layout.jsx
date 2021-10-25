import Anchor from "../Anchor/Anchor"
import styles from './Layout.module.css'

export default function Layout({ arrayAnchorMenuOptinal,children }) {
  return (
    <div className={styles.layout_warapper} >
      <menu>
        <nav>
          <ul>
            <li><Anchor description='Home' direction='/'/></li>
            <li>about</li>
            <li>contacts</li>
          </ul>
        </nav>

        <ul 
          className={styles.menuOptional}
        >
          {[arrayAnchorMenuOptinal].map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </menu>

      {children}
    </div>
  )
}