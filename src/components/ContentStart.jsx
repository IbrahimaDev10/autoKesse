import React from 'react'


export default function ContentStart() {
  return (
    <div className='flex   relative h-150'>
        <img className='w-full h-150 object-cover opacity-70 absolute z-0 bg-black ' src={`${import.meta.env.BASE_URL}assets/images/imgStart.jpg`} alt="" />
        <div className='flex w-full h-150  opacity-60 z-20 bg-black absolute'>
            
        </div>
        <div className='flex flex-col h-full z-30 '>
        <div className='flex mt-20 ml-20 w-full'>
        <span className='text-white text-5xl font-bold z-30 w-150   '>Trouvez & vendre la voiture de vos choix</span>
        
        </div>
        <div className='flex z-30 w-200 mt-20 h-full flex-col-reverse'>
            <div className='flex items-center gap-4 p-4'>
                <img className='w-40 h-30 hover:cursor-pointer' src={`${import.meta.env.BASE_URL}assets/images/audi.png`} alt="" />
                <img className='w-40 h-30' src={`${import.meta.env.BASE_URL}assets/images/nissan_logo.png`} alt="" />
                <img className='w-40 h-30' src={`${import.meta.env.BASE_URL}assets/images/peugeot_logo.png`} alt="" />
            </div>
            </div>
        </div>
        
    </div>
  )
}