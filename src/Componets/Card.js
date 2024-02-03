import logo from "../image/newPICS.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Item from './Item'
import { useState } from "react";

export const Cardo = ({ carddata }) => {
  const [show, setshow] = useState(false)
  const [number, setnumber] = useState(0)
  const [hide, sethide]=useState(true)
  const [showIndex, setshowIndex] = useState();
  const handdleClick = (index) => {
    setshowIndex(index)
    setshow(!show)
    sethide(!hide)
  }
  
    return (
      <div>{carddata.map((details, index) => <div className=" w-[250px] md:w-[300px]  lg:w-[500px] mx-auto my-4 bg-gray-50 shadow-lg p-4 " onClick={() => handdleClick(index)}>{index === showIndex && show && <Item details={details} num={number} index={index} photo={logo}/>}
          <h4 className='text-2xl text-center'>{ hide &&index===0? details.AboutMyself.Title:hide &&index===1? details.aboutEduction.Title:hide &&index===2? details.AfterCollageLife.Title:hide &&index===3?hide && details.AboutJobExp.Title:hide &&index===4? details.WEBDevloper.Title:hide &&index===5? details.Project.Title:"" }</h4>
          <div className='text-3xl mx-[210px] md:mx-[250px]  lg:mx-[450px]'><HiOutlineChevronDoubleDown /></div>
          
          
         </div>)}</div>
     

    
  )
} 
export default Cardo;
