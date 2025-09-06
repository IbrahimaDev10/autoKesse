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
    <div className='flex w-full bg-none h-20 justify-between'>
        <div className='flex items-center p-2 gap-4'>
           {/* <img className='w-30 h-15 object-cover rounded-2xl ' src={logo}  alt="" />  */}
            <span className='text-cyan-700 text-3xl font-bold'>AutoGreatest</span>
        </div>
        <div className='flex items-center gap-8 mr-10 '>
            {navItems.map((item,index)=>(
              <NavLink key={index} to={item.path}  className={({isActive})=> `text-2sm ${isActive ? 'underline' :''} text-xl text-gray-700 font-bold`} >{item.text}</NavLink>  
            ))}
        </div>
    </div>
  )
}
