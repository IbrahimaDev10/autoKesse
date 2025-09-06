import React from 'react';
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";


export default function AnnonceLimit() {

    const listAnnonce=[
        {
            marque:"audi",
            model:"Q7",
            transmission:"manuel",
            carburant:"essence",
            prix:6000000,
            type:"vente",
            image:"audiAn.png",
            annee:"2020"
        },
                {
            marque:"toyota",
            model:"Vitz",
            transmission:"manuel",
            carburant:"essence",
            prix:4000000,
            type:"vente",
            image:"toyota.png",
            annee:"2018"
        },
                {
            marque:"volkswagen",
            model:"SUV",
            transmission:"manuel",
            carburant:"essence",
            prix:8000000,
            type:"vente",
            image:"volkswagen.jpg",
            annee:"2022"
        },
                {
            marque:"citroen",
            model:"c4",
            transmission:"manuel",
            carburant:"essence",
            prix:12000000,
            type:"vente",
            image:"citroen.webp",
            annee:"2025"
        }
    ];
  return (
    <>
    <div className=' grid min-md:grid-cols-3 gap-8 max-md:grid-cols-1 w-full mx-auto'>  
        {listAnnonce.map((item,index)=>(
        <div jkey={index} className='flex flex-col w-full h-[380px] bg-white shadow-2xl rounded-2xl relative'>
            <img src={`${import.meta.env.BASE_URL}assets/images/${item.image}`} className='w-full object-cover h-[200px] rounded-2xl'  />
            <div className='flex items-center justify-between px-8 mt-2 '>
                <span className='text-gray-500 text-xl font-bold max-md:text-sm'>{item.marque} | {item.model}</span>  
                  
                <span className='text-gray-500 text-xl font-bold max-md:text-sm'> annee: <span className='text-cyan-500 text-xl font-bold'>{item.annee}</span>  </span>  
            </div>
             <div className='flex items-center justify-between mt-2 px-8 '>
              <span className='text-gray-500 text-xl font-bold max-md:text-sm'> Prix: <span className='text-cyan-500 text-xl font-bold'>{item.prix.toLocaleString('fr-FR')} CFA</span>  </span>
             </div>
            <div className='flex items-center justify-between mt-2 px-8 '>
                <div className='flex '>
            <span className='text-xl text-gray-500 max-md:text-sm'> <BsFillFuelPumpDieselFill /> {item.transmission} ||  {item.carburant} </span>
            </div>
             </div>
            <div className='flex flex-col-reverse mt-4 px-8 '>
           <div className='flex gap-8 max-md:text-sm'>
             <FaWhatsapp />
             <CiFacebook />
             <FaTiktok />
             </div>
           
            </div>
        </div>
    ))}
    </div>
    </>
  )
}
