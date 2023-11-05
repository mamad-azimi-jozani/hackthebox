
import styles from './NavBar.module.scss'
import HackTheBox from '../images/hackthebox.svg'

import DropdownMenu from './DropdownMenu'


function NavBar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>

            <img src={HackTheBox} alt="" width={180} />
            <ul className={styles.navlinks}>
                <li> Business </li>
                <li>  Hackers  </li>
                <li className={styles.rel}> Industries </li>
                <li>  Resources  </li>
                <li>  Company  </li>
            </ul>
            <div className={styles.register}>
                <p className={styles.signIn}>
                    Sign in
                </p>
                <button className={styles.getStarted}>
                    Get Started
                </button>
            </div>
            <DropdownMenu>
                <div className={styles.dropItems}>
                    <div className={styles.item}>
                        <h3>hello</h3>
                        <p>sth else</p>
                    </div>
                    <div className={styles.item}>
                        <h3>hello2</h3>
                        <p>sth else2</p>
                    </div>
    

                </div>
            </DropdownMenu>
        </div>

    </nav>
  )
}

export default NavBar