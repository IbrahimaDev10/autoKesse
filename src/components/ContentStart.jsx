import React from 'react'


export default function ContentStart() {
  return (
    <div className='flex relative h-150 bg-orange-500 w-full'>
        <img className='flex w-full h-150 object-cover opacity-70 absolute z-0 bg-black ' src={`${import.meta.env.BASE_URL}/assets/images/imgStart.jpg`} alt="" />

        <div className='flex flex-col h-full z-30 w-full '>
        
        <span className='mt-20 ml-5 text-white text-5xl font-bold z-30 w-[300px] max-lg:text-3xl max-lg:w-[300px]   '>Trouvez & vendre la voiture de vos choix 100%</span>
        
        <div className='flex z-30 w-[300px] mt-5 h-full flex-col-reverse max-lg:w-[300px]'>
            <div className='flex items-center gap-4 p-4'>
                <img className='w-25 h-25 hover:cursor-pointer' src={`${import.meta.env.BASE_URL}/assets/images/audi.png`} alt="" />
                <img className='w-25 h-25' src={`${import.meta.env.BASE_URL}/assets/images/nissan_logo.png`} alt="" />
               {/* <img className='w-25 h-25' src={`${import.meta.env.BASE_URL}/assets/images/peugeot_logo.png`} alt="" /> */}
            </div>
            </div>
        </div>
        
    </div>
  )
}