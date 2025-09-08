import React from 'react'
import { Link } from 'react-router-dom'

export default function BoutonConnect() {
  return (
        <div className='flex items-center gap-4'>
        <Link className='bg-neutral-800 text-white font-bold p-2 rounded-2xl'>Se connecter</Link>
    </div>
  )
}
