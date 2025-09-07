import React from 'react';
//import logo from '../assets/images/logo.jpg'; 
import { NavLink } from 'react-router-dom';

export default function Header() {
        const navItems=[
        {text:"Accueil", path:"/index"},
        {text:"vente", path:"/tous-les-personnages"},
        {text:"Location", path:"/fdfa"},
   
    ]
  return (
    <div className='flex w-full bg-none h-30 justify-between'>
        <div className='flex items-center py-10 gap-4'>
            <img className='w-25 h-25 object-cover  ' src={`${import.meta.env.BASE_URL}/assets/images/logoApp.png`}  alt="" />  
           {/* <span className='text-cyan-700 text-3xl font-bold'>AutoGreatest</span> */}
        </div>
        <div className='flex items-center gap-8 mr-10 max-md:hidden '>
            {navItems.map((item,index)=>(
              <NavLink key={index} to={item.path}  className={({isActive})=> `text-2sm ${isActive ? 'underline' :''} text-xl text-gray-700 font-bold`} >{item.text}</NavLink>  
            ))}
        </div>
    </div>
  )
}
