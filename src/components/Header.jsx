import React, { useEffect, useState } from 'react';
//import logo from '../assets/images/logo.jpg'; 
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import BoutonConnect from './BoutonConnect';

export default function Header() {
        const navItems=[
        {text:"Accueil", path:"/index"},
        {text:"vente", path:"/tous-les-personnages"},
        {text:"Location", path:"/fdfa"},
   
    ]
    const [openMenu , setOpenMenu]=useState(false);

    function ToggleMenu(){
        setOpenMenu(!openMenu);
        console.log(openMenu);
    }
        function handleResize(){
        if(window.innerWidth>=768){
            setOpenMenu(false);
        }
    }
        useEffect(()=>{
       window.addEventListener('resize',handleResize);
       //window.addEventListener('click',clickEcran);
           return () => {
        window.removeEventListener('resize', handleResize);
        //window.removeEventListener('click', clickEcran);
    };
    },[])
  return (
    <div className='flex w-full bg-none h-30 justify-between'>
        <div className='flex items-center py-10 gap-4'>
            <img className='w-25 h-25 object-cover  ' src={`${import.meta.env.BASE_URL}/assets/images/logoApp.png`}  alt="" />  
           {/* <span className='text-cyan-700 text-3xl font-bold'>AutoGreatest</span> */}
        </div>
        <div className='flex text-3xl md:hidden items-center'>
        <button onClick={ToggleMenu} className='mr-5 text-[rgb(0,162,232)]'><GiHamburgerMenu /></button>
        </div>
        <div className={` ${openMenu ? 'translate-x-0' : '-translate-x-full' } fixed flex flex-col items-center gap-y-6 w-[200px] h-svh bg-[rgb(0,162,232)]
           top-0 left-0 pt-10 duration-300 z-40`}>
            {navItems.map((item,index)=>(
              <NavLink key={index} to={item.path}  className={({isActive})=> `text-2sm ${isActive ? 'underline' :''} text-xl text-white font-bold`} >{item.text}</NavLink>  
            ))}
            <BoutonConnect />
          </div>
        <div className='flex items-center gap-8 mr-10 max-md:hidden '>
            {navItems.map((item,index)=>(
              <NavLink key={index} to={item.path}  className={({isActive})=> `text-2sm ${isActive ? 'underline' :''} text-xl text-gray-700 font-bold`} >{item.text}</NavLink>  
            ))}
            <BoutonConnect />
        </div>
    </div>
  )
}
