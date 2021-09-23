import React from 'react'
import Link from 'next/link'

const notePage = () => {
    return (
        <div>
            <h1>Notes index page</h1>
            <Link href='/notes/[id]' as={`/notes/1`}>
                Note 1
            </Link>
        </div>
    )
}

export default notePage