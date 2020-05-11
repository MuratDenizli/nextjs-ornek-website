import Link from 'next/link'

import styles from './nav.module.css'

function Navigation() {
  return (
    <nav>
      <Link href="/index">
        <a className={styles.link}>Anasayfa</a>
      </Link>
      <Link href="/about">
        <a style={{color:'purple'}}>Hakkında</a>
      </Link>
    </nav>
  )
}

export default Navigation
