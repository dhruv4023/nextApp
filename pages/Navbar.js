import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLst}>
                <Link href="/" ><li className={styles.navItems}>Home</li></Link>
                <Link href="/about" ><li className={styles.navItems}>About</li></Link>
                <Link href="/blog" ><li className={styles.navItems}>Blog</li></Link>
                <Link href="/contact" ><li className={styles.navItems}>Contact Us</li></Link>
            </ul>
        </nav>
    )
}
