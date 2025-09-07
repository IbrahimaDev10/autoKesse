import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import ContentStart from './ContentStart'
import AnnonceLimit from './annonce/AnnonceLimit'


export default function Layout() {
  return (
    <main className='flex min-h-svh flex-col  '>
    <Header />
   
     <ContentStart />
     {/* min-md= (>768)   max-md= (<768)} */}
         
    <section className='flex-grow container p-2 mx-auto '>
    
       {/* <Toaster position="top-center" richColors expand={true} /> */}
    {/* <Outlet /> */}
    <div className='flex w-full text-2xl font-bold py-10 md:text-center max-md:justify-center   min-md:justify-start '>
        <h3 className='max-md:ml-10 max-md:text-sm'>Nos top voiture</h3>
    </div>

    <div className='flex items-center mx-auto py-5 justify-center'>
      <AnnonceLimit />
              
    </div>
      
   
   </section>
  
  {/* <Footer /> */}
   
   </main>
  )
}
