import React, { createContext } from 'react'
import LearnData from "../utlity/ProjectDetails";
import { useState } from 'react';
import Appss from './Horizontal';
import { Url } from '../utlity/Constsnt';
 export const UserContext = createContext()
const CurosalInHome = ({ id }) => {
  const [datas, setdata] = useState()
  const [Num, setNum] = useState()
  const [shows,setshows]=useState(false)
  const NewData = LearnData.map((data, index) => {
    return data    
  })
  const da = (NewData.filter((idol) => { return (idol.ProjectId == id) }));
  const Handleclick = (item) => { 
    setdata(item)
    setshows(true)
  
  }
 return (<div className='relative'>
   <UserContext.Provider value={datas} >
      <div className='w-full mt-16 grid grid-cols-1 sm:grid-cols-3 gap-9 mr-24'>{da.map((item,index) => <div  className='w-[95%]  sm:w-[400px]  bg-slate-50 ml-7 mt-7  rounded-2xl'>{<div>
        <div className='relative'>
          <img className='w-full h-[200px] rounded-lg position' src={Url}></img>
          <button className='absolute bottom-4 -mx-24 rounded-full' onClick={()=>Handleclick(item)}>click</button> </div>
        <h3 className='font-semibold'>{item.Cards.name}</h3>
        <h3>Ingredient<span className='text-amber-500 font-semibold '>:{item.Cards.containt.join(",")}</span></h3>
        <p>Desc:{item.Cards.desc}</p></div>}
      </div>
      )} 
    </div>
     <div>{shows && <  Appss className="absolute" user={datas} closePopup={ ()=>setshows(false)} />}</div>
  </UserContext.Provider>
    </div>
    
  )
   
}

export default CurosalInHome