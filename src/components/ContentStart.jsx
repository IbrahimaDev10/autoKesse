import React from 'react'
import imgStart from '../assets/images/imgStart.jpg'
import audi from '../assets/images/audi.png'
import nissan_logo from '../assets/images/nissan_logo.png'
import peugeot_logo from '../assets/images/peugeot_logo.png'

export default function ContentStart() {
  return (
    <div className='flex   relative h-150'>
        <img className='w-full h-150 object-cover opacity-70 absolute z-0 bg-black ' src={imgStart} alt="" />
        <div className='flex w-full h-150  opacity-60 z-20 bg-black absolute'>
            
        </div>
        <div className='flex flex-col h-full z-30 '>
        <div className='flex mt-20 ml-20 w-full'>
        <span className='text-white text-5xl font-bold z-30 w-150   '>Trouvez & vendre la voiture de vos choix</span>
        
        </div>
        <div className='flex z-30 w-200 mt-20 h-full flex-col-reverse'>
            <div className='flex items-center gap-4 p-4'>
                <img className='w-40 h-30 hover:cursor-pointer' src={audi} alt="" />
                <img className='w-40 h-30' src={nissan_logo} alt="" />
                <img className='w-40 h-30' src={peugeot_logo} alt="" />
            </div>
            </div>
        </div>
        
    </div>
  )
}