import React from 'react'
import Link from 'next/link'
import styles from '../src/components/styles.module.css'

const mainPage = () => {
    return (
        <div className={ styles }>
            <h1>Home Page</h1>
            <Link href='/notes'>
                <a>Notes</a>
            </Link>
        </div>
    )
}

export default mainPage;