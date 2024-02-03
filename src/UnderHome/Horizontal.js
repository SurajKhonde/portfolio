import React, { useEffect, useState } from "react";
import ProgressBar from "./Slider";
import { useContext } from "react";
import { UserContext } from "./CurosalInHome"
import { MdCloseFullscreen} from "react-icons/md"
const Appss = ({closePopup}) => {
  const user = useContext(UserContext);

      return (
        <div className=' mb-[500px] sm:-mt-[55%] absolute rounded-3xl p-6 w-11/12 sm:w-7/12 sm:mx-[200px] my-4 bg-lime-200 shadow-sm bg-opacity-100  '>{
          <>
            < MdCloseFullscreen  className="text-[30px] mx-[90%]" onClick={closePopup}></ MdCloseFullscreen>
          <div className="w-[70%] mt-[10px] ">
            
      <div>{user?.Cards?.covered===undefined ?"":(user?.Cards?.covered.map((item) => {
        return (<><h2 >{item?.ProjectName}</h2>
          <ProgressBar key={item.id} bgcolor={item?.bgcolor} completed={item.completed} name={item.name} data={user?.Cards} />
          
        </>)
      }))}</div>
          </div>
        </>}
    
    </div> 
  )
}

export default Appss;