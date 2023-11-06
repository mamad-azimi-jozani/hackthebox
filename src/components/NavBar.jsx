
import styles from './NavBar.module.scss'
import HackTheBox from '../images/hackthebox.svg'
import Hamburger from '../assets/burger-menu-svgrepo-com.svg'
import closeIcon from '../assets/close.png'
import { useState } from 'react'

// import DropdownMenu from './DropdownMenu'


function NavBar() {
    const [mouseIn, setMouseIn] = useState(false)
    const [mouseOut, setMouseOut] = useState(false)
    const [id, setId] = useState(0)
    const [ham, setHam] = useState(false)

    const toogleHam = () => {
        setHam(!ham)
    }

    const handleMouseEnter = (e) => {
        const innerText = e.target.innerText
        if (innerText === 'Industries') {
            setMouseIn(true)
            setId(1)
        }

        if (innerText === 'Resources') {
            setMouseIn(true)
            setId(2)
        }

        if (innerText === 'Company') {
            setMouseIn(true)
            setId(3)
        }
    }

    const handleMouseOut = (e) => {
        setMouseIn(false)
        // document.body.
    }








  return (
    <nav className={styles.navbar}
    onMouseLeave={handleMouseOut}
    >
        <div className={styles.container}>

            <img src={HackTheBox} alt="" width={180} />
            <ul className={styles.navlinks}
                
            >
                <li> Business </li>
                <li>  Hackers  </li>
                <li 
                onMouseEnter={handleMouseEnter}
                // 
                    > 
                    Industries 
                    {mouseIn && id === 1 ? (
                     <div 
                     className={styles.subMenu}
                     onMouseLeave={handleMouseOut}
                     >
                         <div>
                             <h3>Governments</h3>
                             <p>hello world</p>
                         </div>
                         <div>
                             <h3>Governments</h3>
                             <p>hello world</p>
                         </div>
                         <div>
                             <h3>Governments</h3>
                             <p>hello world</p>
                         </div>
                     </div>
                    ) : null}

                </li>
                <li
                
                onMouseEnter={handleMouseEnter}
                >  Resources 
                {mouseIn && id === 2 ? (
                <div 
                     className={styles.subMenu}
                     onMouseLeave={handleMouseOut}
                     >
                         <div>
                             <h3>Governments</h3>
                             <p>hello world1</p>
                         </div>
                         <div>
                             <h3>Governments</h3>
                             <p>hello world2</p>
                         </div>
                         <div>
                             <h3>Governments</h3>
                             <p>hello world3</p>
                         </div>

                         <div>
                             <h3>Governments</h3>
                             <p>hello world4</p>
                         </div>

                         <div>
                             <h3>Governments</h3>
                             <p>hello world4</p>
                         </div>


                         <div>
                             <h3>Governments</h3>
                             <p>hello world4</p>
                         </div>


                         <div>
                             <h3>Governments</h3>
                             <p>hello world4</p>
                         </div>

                         <div>
                             <h3>Governments</h3>
                             <p>hello world4</p>
                         </div>
                     </div>
                    ) : null}
                    
                    
                 </li>
                <li
                
                onMouseEnter={handleMouseEnter}
                >  
                    Company 

                {mouseIn && id === 3 ? (
                <div 
                     className={styles.subMenu}
                     onMouseLeave={handleMouseOut}
                     >
                         <div>
                             <h3>Governments</h3>
                             <p>hello world</p>
                         </div>
                         <div>
                             <h3>Governments</h3>
                             <p>hello world</p>
                         </div>
                         <div>
                             <h3>Governments</h3>
                             <p>hello world</p>
                         </div>
                         <div>
                             <h3>Governments</h3>
                             <p>hello world3</p>
                         </div>

                         <div>
                             <h3>Governments</h3>
                             <p>hello world4</p>
                         </div>
                         
                     </div>
                    ) : null} 
                    </li>
            </ul>
            <div className={styles.register}>
                <p className={styles.signIn}>
                    Sign in
                </p>
                <button className={styles.getStarted}>
                    Get Started
                </button>
            
            </div>
            <img 
            src={Hamburger} 
            alt="" 
            className={styles.hamburger} 
            width={50}
            onClick={(e) => setHam(pre => !pre)}
            />
        </div>
          {ham && (
            <div 
            className={
            `${styles.HambergurMenu}
    
             `}
            // style={{display: ham?'block': 'none'}}
            // onClick={toogleHam}
            >
                <img 
                src={closeIcon} 
                alt="" 
                width={50}
                style={{alignSelf: 'flex-end', cursor: 'pointer'}}
                onClick={(e) => setHam(pre => !pre)}
                />
                <p>Business</p>
                <p>Hackers</p>
                <p>Resources</p>
                <p>Sign in</p>
                <p>Get Started</p>
            </div>

          )}          
        

    </nav>
  )
}

export default NavBar