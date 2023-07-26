// import styles of this component
import styles from "./Nav.module.css"

// import other components
import Button from "../Elements/Button/Button"

// import other react pkg to use
import { HambergerMenu } from "iconsax-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

// Nav component
const Nav = () => {
    const [open, setopen] = useState(false)
    const location=useLocation()
    
    return (
        <nav className={`${styles.nav} flex align-items-center`}>
            <div className={styles["nav-title"]}>
                <img className={`${styles["image"]}`} src="/img/WhatsApp Image 2023-07-20 at 10.57.03 PM.jpeg" alt="" />
            </div>
            <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
                <Link to='/'>
                <li className={`${styles["nav-item"]} ${location.pathname==='/'&&styles.active} ${styles["nav-itemSize"]}`} >
                    <a href="" className={styles["nav-link"]}>Home</a>
                </li>
                </Link>
                <Link to='/shop'>
                <li className={`${styles["nav-item"]} ${location.pathname.startsWith('/shop')&&styles.active} ${styles["nav-itemSize"]}`}>
                    <a href="" className={styles["nav-link"]}>Shop</a>
                </li>
                </Link>
                <li className={`${styles["nav-item"]} ${styles["nav-itemSize"]}`}>
                    <a href="" className={styles["nav-link"]}>Artists</a>
                </li>
                <li className={`${styles["nav-item"]} ${styles["nav-itemSize"]}`}>
                    <a href="" className={styles["nav-link"]}>Contact</a>
                </li>

            </ul>
            <div className={styles["navbar-responsive-menu"]}>
                <Button theme="transparent" onClick={()=>setopen(!open)}>
                    <HambergerMenu size="32" color="var(--dark-100)" />
                </Button>
            </div>
            <div className={`${styles["slideDown"]}`} style={open?{top:'0'}:{top:'-100vh'}}>
                <ul className={`flex align-items-center ${styles["slideDown-nav"]}`}  style={open?{display:'flex',opacity:'1',transition:'1s ease-in-out 1s'}:{transition:'none'}}>
                    <li className={`${styles["nav-item"]} ${styles.active}`}>
                        <a href="" className={styles["nav-link"]}>Home</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="" className={styles["nav-link"]}>Shop</a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="" className={styles["nav-link"]}>Artists</a>
                    </li>
                    <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                        <a href="" className={styles["nav-link"]}>Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav