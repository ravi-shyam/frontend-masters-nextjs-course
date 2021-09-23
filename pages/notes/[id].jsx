import React from 'react'
import { useRouter } from 'next/router'

const notesPage= ()=>{
    const router=useRouter();
    const { id }= router.query;
    return (
        <h1>note with id : { id } </h1>
    )
}

export default notesPage